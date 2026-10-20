# Vương giả — website giới thiệu cá nhân

Trang web tĩnh bằng HTML, CSS và JavaScript, không cần cài thư viện hoặc chạy bước build. Trang gồm câu chuyện cá nhân, những điều theo đuổi, ba bài ghi chép mở trong hộp thoại, nút chia sẻ và tải danh thiếp vCard.

Vương giả là nhân vật hư cấu; nội dung do sáng tác và chân dung minh họa được tạo bằng AI. Trang không có backend hoặc biểu mẫu gửi email.

## Xem trên máy

Mở terminal tại thư mục dự án và chạy:

```sh
python3 -m http.server 4173
```

Truy cập [http://localhost:4173](http://localhost:4173). Nhấn `Ctrl+C` để dừng.

## Sửa nội dung

- `index.html`: tên, phần giới thiệu, những điều theo đuổi, thẻ bài ghi chép và thông tin chia sẻ trang trong các thẻ `meta`. Nội dung đầy đủ ba bài nằm trong các thẻ `<template>` ở cuối tệp.
- `styles.css`: màu sắc, kiểu chữ, khoảng cách và bố cục trên điện thoại.
- `script.js`: menu, hộp thoại bài viết, chia sẻ liên kết và nội dung danh thiếp tải xuống (`.vcf`). Khi đổi tên nhân vật, nhớ sửa cả dữ liệu danh thiếp trong tệp này.
- `assets/`: hình ảnh và biểu tượng. Khi thay ảnh, cập nhật cả đường dẫn và mô tả `alt` trong HTML.

Đổi nội dung mẫu thành thông tin của bạn; chỉ thêm email, mạng xã hội và tên miền khi đã có địa chỉ chính xác. Sau khi có tên miền, sửa `og:image` trong `index.html` thành URL HTTPS tuyệt đối trỏ đến ảnh `assets/portrait-original.png` để các nền tảng chia sẻ đọc được ảnh.

`vercel.json` đã có cấu hình URL và một số HTTP header; không cần thêm biến môi trường.

## Đưa lên Vercel qua GitHub

1. Tạo repository GitHub và tải toàn bộ các tệp của dự án lên, giữ `index.html` ở thư mục gốc.
2. Đăng nhập Vercel, chọn **Add New → Project**, rồi import repository vừa tạo.
3. Thiết lập:

   | Mục | Giá trị |
   | --- | --- |
   | Framework Preset | **Other** |
   | Root Directory | Thư mục chứa `index.html`; để mặc định nếu ở gốc repository |
   | Build Command | Bật **Override** và để trống |
   | Output Directory | Giữ mặc định: Vercel phục vụ thư mục gốc khi không có `public/` |

4. Chọn **Deploy**. Mở đường dẫn `.vercel.app` được cấp để kiểm tra trang.

Những lần push tiếp theo lên nhánh production sẽ tự cập nhật website. Cấu hình trang tĩnh theo [tài liệu build của Vercel](https://vercel.com/docs/builds/configure-a-build).

## Gắn tên miền của bạn

1. Mở project trong Vercel, vào **Settings → Domains → Add Domain** và nhập tên miền.
2. Tại nơi quản lý DNS của tên miền, thêm bản ghi mà Vercel hiển thị: thường là **A** cho tên miền gốc hoặc **CNAME** cho tên miền phụ. Sao chép đúng giá trị được cấp cho project của bạn.
3. Quay lại Vercel, đợi DNS được xác minh. Vercel tự cấp chứng chỉ HTTPS sau khi xác minh thành công.
4. Nếu dùng cả tên miền gốc và `www`, thêm cả hai rồi chọn một địa chỉ chính và chuyển hướng địa chỉ còn lại về đó.

Xem hướng dẫn chính thức về [thêm tên miền trong dashboard](https://vercel.com/docs/domains/working-with-domains/add-a-domain) và [xác minh DNS, HTTPS](https://vercel.com/docs/domains/set-up-custom-domain).
