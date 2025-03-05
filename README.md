# Pizza-Restaurant (Frontend)

![image](https://github.com/user-attachments/assets/fa6609e3-2a38-41e5-9cd3-b0c87f55acaf)


Dự án **Pizza-Restaurant** là phần frontend (React) cho hệ thống quản lý và đặt món pizza.  
Người dùng có thể:
- Xem thông tin nhà hàng, menu pizza
- Đặt món, quét QR tại bàn
- Theo dõi các khuyến mãi, sự kiện

## **Mục Lục**
1. [Giới thiệu](#giới-thiệu)
2. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
3. [Cấu trúc thư mục](#cấu-trúc-thư-mục)
4. [Cài đặt và chạy](#cài-đặt-và-chạy)
5. [Thiết kế giao diện](#thiết-kế-giao-diện)
6. [Thông tin liên hệ](#thông-tin-liên-hệ)

---

## **Giới thiệu**
Dự án này được xây dựng bằng **React.js**, cung cấp giao diện cho khách hàng truy cập website để đặt món, xem thông tin, và cho quản trị viên quản lý (nếu có trang admin).  
Ngoài ra, dự án còn tích hợp tính năng quét mã QR tại bàn để khách hàng tự order nhanh chóng.

---

## **Công nghệ sử dụng**
- **React** (create-react-app)
- **React Router** (điều hướng)
- **Tailwind CSS** hoặc **CSS/SCSS** (tuỳ chọn)
- **Axios** (gọi API)
- **Redux** (nếu cần quản lý state phức tạp)
- **react-icons**, **antd**, v.v. (nếu bạn dùng thêm thư viện UI)

---

## **Cấu trúc thư mục**

```plaintext
pizza-restaurant-frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/ (chứa ảnh, icon)
│   ├── components/ (chứa các component dùng chung)
│   ├── pages/ (mỗi file là một trang)
│   ├── services/ (gọi API)
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

- `/public`: Chứa file index.html gốc, favicon, v.v.
- `/src/assets/images`: Ảnh tĩnh (logo, icon, svg, v.v.)
- `/src/components`: Các component tái sử dụng (Header, Footer, Banner…)
- `/src/pages`: Mỗi trang React (HomePage, MenuPage, AboutPage…)
- `/src/services`: Code gọi API (axios…)
- `App.js`: Khai báo route, layout chính
- `index.js`: Điểm khởi chạy React

---

## **Cài đặt và chạy**

### Clone repo (hoặc tải zip):
```bash
git clone https://github.com/your-username/pizza-restaurant-frontend.git
```

### Cài đặt phụ thuộc:
```bash
cd pizza-restaurant-frontend
npm install
```

### Chạy dev server:
```bash
npm start
```
Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000).

### Build (sản phẩm deploy):
```bash
npm run build
```
Thư mục `build/` chứa file tĩnh để deploy lên server.

---

## **Thiết kế giao diện**
Figma thiết kế giao diện có thể xem tại: [Figma Pizza-Restaurant](https://www.figma.com/design/ODcT2cvfSKL1ezbZoHvfiL/Pizza-Restaurant?node-id=168-1215&p=f&t=lPywaF4B5OzUny2Q-0)

---
## **Quản lý công việc**
Theo dõi tiến độ dự án trên Jira: [Jira Pizza-Restaurant](https://nguyendminh025.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-4)

---

## **Thông tin liên hệ**
- **Tác giả**: Nguyễn Duy Minh 
- **Email**: contact@pizza-restaurant.com  

---

## **License**
Mô tả giấy phép (MIT, Apache 2.0, v.v.) hoặc dự án private tuỳ theo nhu cầu.



