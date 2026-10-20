'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Mở menu');
  navigation.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
  navigation.classList.toggle('is-open', isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(element => revealObserver.observe(element));
  document.documentElement.classList.add('reveal-ready');

  const navLinks = [...navigation.querySelectorAll('a')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const isActive = link.hash === `#${entry.target.id}`;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

const articleDialog = document.querySelector('#article-dialog');
const articleBody = document.querySelector('#article-body');

document.querySelectorAll('[data-article]').forEach(button => {
  button.addEventListener('click', () => {
    const template = document.getElementById(button.dataset.article);
    articleBody.replaceChildren(template.content.cloneNode(true));
    articleDialog.showModal();
    articleDialog.scrollTop = 0;
    document.documentElement.classList.add('has-modal');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => articleDialog.close());
articleDialog.addEventListener('close', () => document.documentElement.classList.remove('has-modal'));
articleDialog.addEventListener('click', event => {
  const rect = articleDialog.getBoundingClientRect();
  if (event.target === articleDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
    articleDialog.close();
  }
});

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

function getPageUrl() {
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  return url.href;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch { /* Fall back when clipboard permission is unavailable. */ }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.className = 'clipboard-helper';
  textarea.setAttribute('readonly', '');
  textarea.setAttribute('aria-hidden', 'true');
  document.body.append(textarea);
  textarea.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch { copied = false; }
  textarea.remove();
  return copied;
}

document.querySelector('#share-button').addEventListener('click', async event => {
  const button = event.currentTarget;
  const url = getPageUrl();
  button.disabled = true;
  try {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Vương giả — Một thế giới riêng', text: 'Một góc nhỏ về sáng tạo, sự tò mò và những điều giản dị.', url });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    const copied = await copyText(url);
    showToast(copied ? 'Đã sao chép liên kết. Gửi một chút đồng điệu đi nhé!' : 'Bạn có thể sao chép địa chỉ trên thanh trình duyệt để chia sẻ.');
  } finally {
    button.disabled = false;
    button.focus({ preventScroll: true });
  }
});

document.querySelector('#vcard-button').addEventListener('click', () => {
  const escapeValue = value => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
  const urlLine = /^https?:/.test(window.location.protocol) ? [`URL:${escapeValue(getPageUrl())}`] : [];
  const card = ['BEGIN:VCARD', 'VERSION:3.0', 'N:Vương giả;;;;', 'FN:Vương giả', 'TITLE:Người sáng tạo độc lập', ...urlLine, 'NOTE:Một người bình thường. Một thế giới rất riêng. Chân dung sáng tác.', 'END:VCARD', ''].join('\r\n');
  const fileUrl = URL.createObjectURL(new Blob([card], { type: 'text/vcard;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'vuong-gia.vcf';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(fileUrl), 10000);
  showToast('Đã tạo danh thiếp Vương giả để tải xuống.');
});

document.querySelector('#year').textContent = new Date().getFullYear();
