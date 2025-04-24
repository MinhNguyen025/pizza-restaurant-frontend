
# README: Hướng Dẫn Hoàn Thành Xuất Sắc Bài Kiểm Tra Lập Trình C (90 phút)

## Mục lục

1. [Lộ trình thực hiện đề thi](#lộ-trình-thực-hiện-đề-thi)  
2. [Khung code cơ bản](#khung-code-cơ-bản)  
3. [Chi tiết từng câu](#chi-tiết-từng-câu)  
   - [Câu 1: Mảng số nguyên, tổng chẵn & liệt kê > 5](#câu-1-mảng-số-nguyên-tổng-chẵn--liệt-kê--5)  
   - [Câu 2: Hàm `tong()`](#câu-2-hàm-tong)  
   - [Câu 3: Đếm chữ cái & chữ số trong chuỗi](#câu-3-đếm-chữ-cái--chữ-số-trong-chuỗi)  
   - [Câu 4: Đệ quy tính giai thừa](#câu-4-đệ-quy-tính-giai-thừa)  
   - [Câu 5: Struct sản phẩm + File I/O](#câu-5-struct-sản-phẩm--file-io)  
   - [Câu 6: Menu gọi các hàm](#câu-6-menu-gọi-các-hàm)  
4. [Định nghĩa và giải thích `#define`](#định-nghĩa-và-giải-thích-define)  
5. [Checklist nộp bài](#checklist-nộp-bài)  

---

## Lộ trình thực hiện đề thi

| Thời gian     | Công việc                                                                 |
|---------------|----------------------------------------------------------------------------|
| 0–10 phút     | Đọc đề, gạch chân đầu vào/đầu ra/quy ước. Khởi tạo file, include thư viện. |
| 10–65 phút    | Viết và biên dịch riêng lẻ các hàm theo độ khó: Câu 2 → 1 → 3 → 4 → 5.      |
| 65–80 phút    | Ghép khung menu (Câu 6), kiểm tra logic `switch` + `break`.               |
| 80–87 phút    | Chạy thử từng case, test giá trị biên.                                     |
| 87–90 phút    | Thêm comment đầu file (tên, lớp), biên dịch cuối, nộp bài.                |

---

## Khung code cơ bản

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_N    50
#define MAX_STR  100
#define MAX_PROD 30

/* Prototypes */
void cau1(void);
void cau2(void);
void cau3(void);
void cau4(void);
void cau5(void);

int main(void) {
    int choice;
    do {
        printf("\n===== MENU =====\n");
        printf("1. Câu 1\n2. Câu 2\n3. Câu 3\n4. Câu 4\n5. Câu 5\n0. Thoát\n");
        printf("Chọn: ");
        if (scanf("%d", &choice) != 1) {
            while (getchar() != '\n');
            continue;
        }
        switch (choice) {
            case 1: cau1(); break;
            case 2: cau2(); break;
            case 3: cau3(); break;
            case 4: cau4(); break;
            case 5: cau5(); break;
            case 0: printf("Thoát chương trình!\n"); break;
            default: printf("Lựa chọn không hợp lệ, vui lòng nhập lại.\n");
        }
    } while (choice != 0);
    return 0;
}
```

---

## Chi tiết từng câu

### Câu 1: Mảng số nguyên, tổng chẵn & liệt kê > 5

```c
#include <stdio.h>      // ①
#define MAX 50          // ②

int main(void) {        // ③
    int n, a[MAX];      // ④
    int sumEven = 0;    // ⑤

    printf("Nhap n (1–50): ");
    scanf("%d", &n);    // ⑥
    if (n <= 0 || n > MAX) return 0;   // ⑦

    for (int i = 0; i < n; ++i) {      // ⑧
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
        if (a[i] % 2 == 0)             // ⑨
            sumEven += a[i];
    }

    printf("Tong chan = %d\n", sumEven);

    printf("Cac phan tu > 5: ");
    for (int i = 0; i < n; ++i)
        if (a[i] > 5) printf("%d ", a[i]);
    puts("");                          // ⑩
    return 0;                          // ⑪
}
```

| Mã  | Ký hiệu                  | Giải thích                                                                                 |
|-----|--------------------------|-------------------------------------------------------------------------------------------|
| ①   | `#include <stdio.h>`     | Nạp thư viện chuẩn chứa `printf`, `scanf`. Dấu `<...>` tìm trong thư mục hệ thống.        |
| ②   | `#define MAX 50`         | Định nghĩa macro `MAX` giá trị 50. Tất cả `MAX` trong code được thay bằng `50`.           |
| ③   | `int main(void)`         | Hàm chính – nơi bắt đầu chương trình. Trả về `int`, `void` nghĩa không nhận tham số.     |
| ④   | `int n, a[MAX];`         | Khai báo `n` và mảng `a` có `MAX` phần tử kiểu `int`.                                     |
| ⑤   | `int sumEven = 0;`       | Biến tổng số chẵn, khởi tạo bằng 0.                                                       |
| ⑥   | `scanf("%d", &n);`       | Đọc số nguyên vào `n`. Dấu `&` lấy địa chỉ biến để ghi dữ liệu.                           |
| ⑦   | `if (...) return 0;`     | Kiểm tra `n` hợp lệ; nếu sai thoát chương trình, trả mã 0.                                 |
| ⑧   | `for (int i=0; i<n; ++i) | Vòng lặp duyệt mảng từ `i=0` đến `i<n`.                                                    |
| ⑨   | `a[i] % 2 == 0`          | Toán tử chia lấy dư `%`. Thỏa mãn khi phần dư bằng 0 ⇒ số chẵn.                           |
| ⑩   | `puts("")`               | In xuống dòng nhanh, tương đương `printf("\n")`.                                         |
| ⑪   | `return 0;`              | Kết thúc `main`, trả mã 0 cho hệ điều hành.                                               |

---

### Câu 2: Hàm `tong()`

```c
#include <stdio.h>

int tong(int a, int b) {      // ①
    return a + b;             // ②
}

int main(void) {
    int x, y;
    printf("Nhap hai so: ");
    scanf("%d%d", &x, &y);    // ③
    printf("Tong = %d\n", tong(x, y));  // ④
    return 0;
}
```

| Mã  | Giải thích                                                         |
|-----|--------------------------------------------------------------------|
| ①   | Định nghĩa hàm `tong` trả về tổng hai số nguyên.                   |
| ②   | Toán tử `+` cộng `a` và `b`, trả kết quả.                           |
| ③   | Nhập hai số nguyên liên tiếp, cách nhau khoảng trắng hoặc xuống dòng. |
| ④   | Gọi hàm `tong(x, y)` và in kết quả với định dạng `%d`.             |

---

### Câu 3: Đếm chữ cái & chữ số trong chuỗi

```c
#include <stdio.h>
#include <ctype.h>                 // ①
#define MAX 100

int main(void) {
    char s[MAX + 1];               // ②
    int letters = 0, digits = 0;

    getchar();                     // ③
    printf("Nhap chuoi: ");
    fgets(s, sizeof(s), stdin);    // ④

    for (int i = 0; s[i] != '\0'; ++i) {    // ⑤
        if (isalpha((unsigned char)s[i]))    // ⑥
            ++letters;
        else if (isdigit((unsigned char)s[i]))
            ++digits;
    }
    printf("Chu cai = %d\nChu so  = %d\n", letters, digits);
    return 0;
}
```

| Ký hiệu  | Vai trò                                                                                  |
|----------|------------------------------------------------------------------------------------------|
| ①        | `#include <ctype.h>`: Thư viện kiểm tra ký tự (`isalpha`, `isdigit`).                   |
| ②        | Mảng `s` đủ 101 ô: 100 ký tự + 1 kí tự kết thúc `\0`.                                   |
| ③        | `getchar()` loại newline còn sót lại do `scanf` lần trước.                              |
| ④        | `fgets` đọc nguyên dòng, kể cả khoảng trắng, dừng khi gặp `\n` hoặc hết 100 ký tự.       |
| ⑤        | Duyệt tới ký tự kết thúc chuỗi `\0`.                                                   |
| ⑥        | `isalpha`, `isdigit` trả true nếu ký tự là chữ cái/số. Ép `unsigned char` tránh lỗi.    |

---

### Câu 4: Đệ quy tính giai thừa

```c
#include <stdio.h>

int giaithua(int n) {           // ①
    if (n <= 1)                  // ②
        return 1;
    return n * giaithua(n - 1);  // ③
}

int main(void) {
    int n;
    printf("Nhap n (0–10): ");
    scanf("%d", &n);
    if (n < 0 || n > 10) return 0;
    printf("%d! = %d\n", n, giaithua(n));  // ④
    return 0;
}
```

| Mã  | Ý nghĩa                                                                                             |
|-----|-----------------------------------------------------------------------------------------------------|
| ①   | Hàm đệ quy `giaithua`, gọi lại chính nó.                                                            |
| ②   | Điều kiện dừng (base case): 0! và 1! đều bằng 1.                                                   |
| ③   | Công thức giai thừa: `n! = n × (n−1)!`.                                                             |
| ④   | Gọi hàm `giaithua(n)` và in kết quả.                                                               |

---

### Câu 5: Struct sản phẩm + File I/O

```c
#include <stdio.h>
#include <string.h>
#define MAX_P 30
#define MAX_S 100

typedef struct {                  // ①
    char ten[MAX_S];
    char ma[50];
} Product;

int main(void) {
    int n; Product p[MAX_P];
    printf("Nhap so SP (<=30): ");
    scanf("%d", &n);               // ②
    getchar();                     // Loại newline

    for (int i = 0; i < n; ++i) {
        printf("Ten SP %d: ", i + 1);
        fgets(p[i].ten, sizeof(p[i].ten), stdin);
        p[i].ten[strcspn(p[i].ten, "\n")] = '\0';  // ③
        printf("Ma  SP %d: ", i + 1);
        fgets(p[i].ma, sizeof(p[i].ma), stdin);
        p[i].ma[strcspn(p[i].ma, "\n")] = '\0';
    }

    FILE *fp = fopen("danhsach.txt", "w");         // ④
    for (int i = 0; i < n; ++i)
        fprintf(fp, "%s|%s\n", p[i].ten, p[i].ma); // ⑤
    fclose(fp);

    puts("\nDoc lai file:");
    fp = fopen("danhsach.txt", "r");
    char line[200]; int idx = 1;
    while (fgets(line, sizeof(line), fp)) {        // ⑥
        char *bar = strchr(line, '|');             // ⑦
        if (bar) {
            *bar = '\0';
            printf("%2d. %-20s | %s", idx++, line, bar + 1);
        }
    }
    fclose(fp);
    return 0;
}
```

| Mã  | Giải thích                                                                                   |
|-----|----------------------------------------------------------------------------------------------|
| ①   | `typedef struct { … } Product;` – định nghĩa kiểu `Product` với 2 chuỗi.                    |
| ②   | Nhập `n`, số lượng sản phẩm, kiểm tra tương tự Câu 1.                                        |
| ③   | `strcspn` tìm vị trí `\n`, thay bằng `\0` để loại newline.                                 |
| ④   | `fopen("danhsach.txt", "w")` – mở file để ghi mới (xóa cũ).                                  |
| ⑤   | `fprintf` ghi lần lượt `ten|ma` mỗi dòng.                                                     |
| ⑥   | `fgets` đọc từng dòng từ file.                                                              |
| ⑦   | `strchr(line, '|')` tìm dấu phân tách, tách tên và mã.                                       |

---

### Câu 6: Menu gọi các hàm

- **Menu**: dùng `printf` để in các lựa chọn.  
- **Đọc lựa chọn**: `scanf("%d", &choice);`.  
- **Điều khiển**: `switch(choice)` để gọi `cau1()` … `cau5()` hoặc thoát.  
- **Vòng lặp**: `do { … } while(choice != 0);` cho phép lặp lại menu ít nhất một lần.

---

## Định nghĩa và giải thích `#define`

```c
#define MAX_N    50
#define MAX_STR  100
#define MAX_PROD 30
```

| Thành phần        | Ý nghĩa                                                         |
|-------------------|-----------------------------------------------------------------|
| `#`               | Chỉ thị tiền xử lý (preprocessor directive).                   |
| `define`          | Định nghĩa macro hằng bằng văn bản, không tạo biến runtime.     |
| `MAX_N`,…         | Tên macro (viết in hoa theo quy ước).                          |
| `50`, `100`, `30` | Giá trị được thay thế trực tiếp trong code.                    |

**Lợi ích**:  
- Giúp tránh “magic numbers”, dễ sửa đổi.  
- Không chiếm bộ nhớ runtime.  
- Phù hợp khai báo kích thước mảng tĩnh trong C89.

---

## Checklist nộp bài

- [ ] Đã include đủ thư viện (`stdio.h`, `string.h`, `ctype.h`).  
- [ ] Đã khai báo prototype/hàm trước `main`.  
- [ ] Biên dịch `gcc -Wall` không còn lỗi/cảnh báo.  
- [ ] Test các giá trị biên (n=1, n=50, chuỗi rỗng).  
- [ ] File `danhsach.txt` được sinh đúng thư mục.  
- [ ] Thêm comment đầu file (họ tên, lớp).  

Chúc bạn hoàn thành xuất sắc bài kiểm tra lập trình C!
