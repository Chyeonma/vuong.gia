# Hệ thống Tài liệu Dự án (Documentation Hub)

Thư mục `docs/` là trung tâm lưu trữ toàn bộ nội dung, tài liệu thiết kế và định hình thương hiệu cá nhân trước khi được đưa lên giao diện trang web.

Tài liệu tuân thủ mô hình **Docs-as-Code**: Mỗi phân hệ chủ đề có một file `README.md` bao quát ngữ cảnh, đi kèm các tài liệu phân tích và đặc tả chi tiết.

---

## 1. Bản đồ cấu trúc tài liệu (Documentation Taxonomy)

```text
docs/
├── README.md               # [Bạn đang ở đây] Chỉ mục toàn bộ hệ thống tài liệu
├── 00-meta/                # Tiêu chuẩn kỹ thuật, phong cách & kiến trúc tổng thể
│   ├── README.md           # Định hướng chung về kỹ thuật & cách thức vận hành
│   ├── brand-guidelines.md # Định vị thương hiệu cá nhân, thông điệp cốt lõi & tone giọng
│   └── site-architecture.md# Kiến trúc kỹ thuật, luồng dữ liệu và tech stack của website
├── 01-identity/            # Định vị con người & Giá trị cốt lõi (Tầng 1: Lõi)
│   ├── README.md           # Tổng quan về định danh cá nhân
│   ├── philosophy.md       # Nhân sinh quan, nguyên tắc làm việc và mục tiêu dài hạn
│   ├── career-and-education.md # Hành trình học vấn, lịch sử công tác & các cột mốc nghề nghiệp
│   └── bio.md              # Tiểu sử tóm tắt theo các góc nhìn
├── 02-domains/             # Lĩnh vực quan tâm & Hệ thống tri thức (Tầng 2: Tư duy)
│   ├── README.md           # Tổng quan bản đồ tri thức
│   ├── interests.md        # Các chủ đề quan tâm ngoài IT (Kinh tế, Xã hội, Khoa học, Nghệ thuật)
│   └── mental-models.md    # Các mô hình tư duy và phương pháp luận giải quyết vấn đề
├── 03-craft/               # Năng lực thực thi & Đòn bẩy IT (Tầng 3: Thực thi)
│   ├── README.md           # Quan điểm về công nghệ: Công cụ đòn bẩy
│   ├── engineering.md      # Năng lực chuyên môn phần mềm, kiến trúc hệ thống
│   └── tools-and-setup.md  # Hệ sinh thái công cụ, môi trường làm việc và tự động hóa
├── 04-creations/           # Sản phẩm & Bằng chứng thực tế (Tầng 4: Kết quả)
│   ├── README.md           # Danh mục tổng hợp các dự án và đóng góp
│   └── case-studies/       # Thư mục chứa từng dự án (Vấn đề -> Giải pháp -> Kết quả)
└── 05-reflections/         # Góc nhìn, Bài viết & Tri thức mở (Tầng 5: Chia sẻ)
    ├── README.md           # Chiến lược nội dung và chia sẻ cộng đồng
    └── articles/           # Các bài viết, tiểu luận và ghi chép học tập
```

---

## 2. Mô tả chi tiết từng thành phần

| Thư mục | Mục đích cốt lõi | Giá trị cho thương hiệu cá nhân |
| :--- | :--- | :--- |
| `00-meta/` | Định nghĩa quy chuẩn thiết kế, phong cách viết và kiến trúc kỹ thuật của website. | Giữ cho toàn bộ nội dung và mã nguồn đồng nhất, chuyên nghiệp. |
| `01-identity/` | Trả lời câu hỏi: **"Bạn là ai?"** thông qua giá trị, nhân sinh quan và hành trình trưởng thành. | Tạo sự kết nối cảm xúc và độ tin cậy với người xem ở góc độ con người thực tế. |
| `02-domains/` | Trả lời câu hỏi: **"Bạn tư duy thế nào?"** thông qua các chủ đề quan tâm đa chiều ngoài việc viết code. | Khẳng định chiều sâu tư duy, tránh định vị bản thân là "thợ code một chiều". |
| `03-craft/` | Trả lời câu hỏi: **"Bạn giải quyết vấn đề bằng công cụ gì?"**, lấy IT làm đòn bẩy trọng tâm. | Thể hiện năng lực kỹ thuật thực tế, kỹ năng tổ chức và khả năng làm chủ công cụ. |
| `04-creations/` | Cung cấp bằng chứng thực tế qua các sản phẩm, giải pháp và kết quả cụ thể. | Xây dựng uy tín và tính thuyết phục với đối tác, nhà tuyển dụng và cộng đồng. |
| `05-reflections/` | Lưu trữ các bài viết, quan điểm và kinh nghiệm đúc rút theo thời gian. | Lan tỏa giá trị, xây dựng vị thế chuyên môn và thói quen học hỏi liên tục. |

---

## 3. Tiêu chuẩn viết tài liệu (Documentation Standards)

Để tài liệu luôn rõ ràng cho cả người đọc và các hệ thống AI:
1. **Trực tiếp và chính xác**: Trình bày thẳng vào trọng tâm, tránh các từ ngữ sáo rỗng hoặc biểu diễn cảm xúc không cần thiết.
2. **Cấu trúc nhất quán**: Mỗi thư mục con bắt buộc phải có `README.md` đóng vai trò là trang tổng quan.
3. **Phân tách ranh giới**:
   - Tài liệu trong `docs/` dùng để tư duy, lập hồ sơ và chuẩn hóa dữ liệu.
   - Nội dung hiển thị trên trang web cuối cùng sẽ được tinh gọn, biên tập lại để tối ưu trải nghiệm đọc trên giao diện web.

---

## 4. Bảng theo dõi tiến độ hoàn thiện

- [x] Khởi tạo tài liệu chỉ mục `docs/README.md`
- [x] Xây dựng `00-meta/` (Brand Guidelines & Site Architecture)
- [x] Xây dựng `01-identity/` (Philosophy, Bio & Career Timeline)
- [ ] Xây dựng `02-domains/` (Mental Models & Knowledge Areas)
- [ ] Xây dựng `03-craft/` (Engineering & Tooling)
- [ ] Xây dựng `04-creations/` (Template & Case Studies)
- [ ] Xây dựng `05-reflections/` (Content Strategy)
