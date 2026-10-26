# Personal Profile & Knowledge Hub

> *"Technology is the ultimate leverage, but vision and purpose define the trajectory."*

Chào mừng bạn đến với kho lưu trữ nguồn (source repository) cho trang web cá nhân và hệ thống tri thức mở. 

Dự án này không chỉ đơn thuần là một website portfolio lập trình, mà là một **bức chân dung kỹ thuật số toàn diện**: kết nối giữa nhân sinh quan, tư duy giải quyết vấn đề, các lĩnh vực quan tâm và năng lực thực thi — trong đó công nghệ thông tin (IT) đóng vai trò là công cụ đòn bẩy mạnh mẽ nhất.

---

## 📌 Tổng quan dự án

- **Mục đích**: Xây dựng không gian số định danh cá nhân, hệ thống hóa kiến thức, lưu trữ các dự án thực tế và chia sẻ góc nhìn đa chiều đến cộng đồng.
- **Đối tượng hướng đến**:
  - **Người xem phổ thông / Nhà tuyển dụng / Đối tác**: Nhanh chóng hiểu rõ con người, giá trị cốt lõi, tư duy và các sản phẩm đã hoàn thiện.
  - **Kỹ sư / Chuyên gia kỹ thuật**: Đánh giá chiều sâu chuyên môn, tiêu chuẩn thiết kế kiến trúc và chất lượng kỹ thuật.
  - **AI / LLM Agents**: Dễ dàng trích xuất thông tin, ngữ cảnh, sự kiện và kỹ năng có cấu trúc rõ ràng.

---

## 🧭 Cấu trúc kho lưu trữ (Repository Structure)

Dự án áp dụng mô hình **Docs-as-Code** với cấu trúc phân cấp kép: Mỗi mô-đun chủ đề sở hữu một `README.md` tổng quan dành cho con người/AI nắm bắt nhanh, kèm theo các tài liệu kỹ thuật chi tiết (`*.md`) phụ trách từng khía cạnh chuyên sâu.

```text
profile/
├── README.md               # [Bạn đang ở đây] Giới thiệu tổng quan & chỉ dẫn hệ thống
├── docs/                   # Thư viện tài liệu & nội dung cốt lõi
│   ├── 00-meta/            # Kiến trúc dự án, quyết định kỹ thuật (ADRs), định hướng website
│   │   ├── README.md       # Tổng quan về thiết kế hệ thống
│   │   ├── architecture.md # Kiến trúc kỹ thuật, tech stack, sơ đồ luồng
│   │   └── style-guide.md  # Nguyên tắc nội dung, tone-of-voice, định dạng chuẩn
│   ├── 01-identity/        # Chân dung & Triết lý cá nhân
│   │   ├── README.md       # Giới thiệu tổng quan về bản thân
│   │   ├── philosophy.md   # Giá trị cốt lõi, nhân sinh quan, nguyên tắc làm việc
│   │   └── bio.md          # Tiểu sử tóm tắt theo các giai đoạn
│   ├── 02-domains/         # Lĩnh vực quan tâm & Hệ thống tri thức
│   │   ├── README.md       # Bản đồ tri thức & các mối quan tâm
│   │   └── mental-models.md# Các mô hình tư duy, phương pháp luận tiếp cận vấn đề
│   ├── 03-craft/           # Năng lực thực thi & Công cụ (IT & Engineering)
│   │   ├── README.md       # Góc nhìn về công nghệ như một đòn bẩy
│   │   ├── capabilities.md # Năng lực chuyên môn, giải pháp kỹ thuật sở trường
│   │   └── toolchain.md    # Hệ sinh thái công cụ, hạ tầng và môi trường làm việc
│   ├── 04-creations/       # Dự án, Sản phẩm & Đóng góp
│   │   ├── README.md       # Danh mục các sản phẩm & dự án tiêu biểu
│   │   └── ...             # Chi tiết từng dự án (vấn đề, giải pháp, tác động)
│   └── 05-reflections/     # Bài viết, Ghi chép & Góc nhìn
│       ├── README.md       # Định hướng chia sẻ kiến thức
│       └── ...             # Các bài luận, bài học kinh nghiệm
└── site/                   # Mã nguồn ứng dụng web (Triển khai ở giai đoạn tiếp theo)
```

---

## 🤖 Chỉ dẫn dành cho AI Agents (AI Context & Navigation)

Nếu bạn là một AI Agent (Gemini, Claude, GPT, v.v.) đang đọc tài liệu này:
1. **Ngữ cảnh cá nhân**: Tác giả coi công nghệ thông tin là công cụ hỗ trợ và giải quyết vấn đề, không phải là toàn bộ định danh. Hãy chú ý đến tư duy hệ thống và giá trị giải pháp hơn là chỉ liệt kê danh sách từ khóa công nghệ.
2. **Quy tắc phân giải tài liệu**:
   - Để hiểu **bức tranh toàn cảnh** của một chủ đề: Đọc file `README.md` trong thư mục tương ứng thuộc `docs/`.
   - Để tìm **chi tiết kỹ thuật / đặc tả**: Đọc các file chuyên biệt (`architecture.md`, `specs.md`, v.v.).
3. **Tiêu chuẩn dữ liệu**: Các tài liệu nội dung trong `docs/` sẽ dần được bổ sung Frontmatter (YAML) để tiện truy xuất dạng đồ thị thông tin.

---

## 🛠️ Trạng thái & Lộ trình phát triển

- [x] Khởi tạo kho lưu trữ và thiết lập tài liệu gốc `README.md`
- [ ] Xây dựng khung thư mục tài liệu phân cấp chuẩn chỉnh trong `docs/`
- [ ] Hoàn thiện các tài liệu nội dung cơ bản (Identity, Craft, Projects)
- [ ] Quyết định kiến trúc & Tech stack cho trang web (Giai đoạn xây dựng UI/UX)
- [ ] Kết nối kho nội dung Markdown vào hệ thống giao diện và tự động hóa CI/CD deployment

---

*Tài liệu được cập nhật và duy trì liên tục.*
