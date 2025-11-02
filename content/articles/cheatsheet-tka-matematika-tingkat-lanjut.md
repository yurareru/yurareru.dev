---
title: Cheatsheet TKA Matematika Tingkat Lanjut
date: 2025-10-29
tags:
  - cheatsheet
  - math
type: article
---
## 1. Matriks

### Matriks, Ordo, dan Jenis Matriks
- **Ordo**

    Ukuran matriks (baris $\times$ kolom). $A_{m \times n}$

- **Jenis Matriks**
    - **Persegi**

        Jumlah baris = kolom.

    - **Identitas (I)**

        Diagonal utama 1, lainnya 0.\
        $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$

    - **Nol**

        Semua elemen 0.

    - **Transpose ($A^T$)**

        Baris jadi kolom, kolom jadi baris.

### Operasi Matriks
- **Penjumlahan/Pengurangan**

    Ordo harus sama. Jumlahkan/kurangkan elemen yang seletak.\
    $\begin{pmatrix} a & b \\ c & d \end{pmatrix} + \begin{pmatrix} e & f \\ g & h \end{pmatrix} = \begin{pmatrix} a+e & b+f \\ c+g & d+h \end{pmatrix}$

- **Perkalian Skalar ($k \cdot A$)**

    Kalikan $k$ ke semua elemen.

- **Perkalian Matriks ($A_{m \times n} \cdot B_{n \times p} = C_{m \times p}$)**
    - Syarat

        Kolom A = Baris B.

    - Hasil

        (Baris A) $\times$ (Kolom B).

    - **Sifat**

        $A \cdot B \neq B \cdot A$ (Tidak komutatif)

    - $\small\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} ap+br & aq+bs \\ cp+dr & cq+ds \end{pmatrix}$

### Determinan, Adjoin, Invers Matriks
- **Determinan (det(A) atau |A|)**
    - Ordo 2x2

        $|A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$

    - Ordo 3x3 (Metode Sarrus)

        $|A| = \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix}$

        $\begin{align}\phantom{|A|} = (aei + bfg + cdh) \phantom{-} \\ \phantom{|A| =} - (ceg + afh + bdi)\end{align}$

- **Adjoin (Adj(A))**

    Transpose dari matriks kofaktor.
    - Ordo 2x2

        $\text{adj}(A) = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$

- **Invers Matriks ($A^{-1}$)**
    - $A^{-1} = \dfrac{1}{\det(A)} \cdot \text{adj}(A)$
    - **Syarat punya Invers**

        $\det(A) \neq 0$ (Matriks Singular)

    - **Sifat:**
        - $A \cdot A^{-1} = I$
        - $(AB)^{-1} = B^{-1} A^{-1}$

---

## 2. Suku Banyak (Polinomial)

### Operasi Polinomial
- **Penjumlahan/Pengurangan**

    Jumlahkan/kurangkan koefisien suku yang sejenis (pangkatnya sama).

- **Perkalian**

    Gunakan sifat distributif (kalikan semua suku).

### Pembagian Polinomial
- $P(x) = H(x) \cdot Q(x) + S(x)$
    - $P(x)$ = Yang dibagi
    - $H(x)$ = Pembagi
    - $Q(x)$ = Hasil bagi
    - $S(x)$ = Sisa
- **Metode:**
    1.  **Bagi Kurung (Porogapit)**

        Mirip pembagian biasa.

    2.  **Skema Horner**

        Hanya untuk pembagi linear $x-k$ atau $ax-b$

        - Jika pembagi $x-k$, maka $S = P(k)$.
        - Jika pembagi $ax-b$, maka $S = P(b/a)$.

### Pemfaktoran dan Suku Sisa
- **Teorema Sisa**
    - Sisa pembagian $P(x)$ oleh $(x-k)$ adalah $S = P(k)$.
    - Sisa pembagian $P(x)$ oleh $(ax-b)$ adalah $S = P(b/a)$.
- **Teorema Faktor**

    $(x-k)$ adalah faktor dari $P(x)$ **jika dan hanya jika** $P(k) = 0$ (sisanya 0).

- **Mencari Akar**

    Cari nilai $k$ (faktor dari konstanta) yang membuat $P(k) = 0$.

---

## 3. Fungsi Lanjut

### Domain dan Range Fungsi
- **Domain (Daerah Asal)**

    Nilai $x$ yang boleh dimasukkan.
    - **Polinomial**

        $D_f = \{x \in \mathbb{R}\}$

    - **Rasional $f(x) = \dfrac{P(x)}{Q(x)}$**

        Syarat: Penyebut $Q(x) \neq 0$.

    - **Akar $f(x) = \sqrt{g(x)}$**

        Syarat: Di dalam akar $g(x) \ge 0$.

- **Range (Daerah Hasil)**

    Nilai $y$ yang dihasilkan.

### Grafik Fungsi
- **Polinomial $y = ax^n + ...$**
    Gunakan turunan untuk mencari titik stasioner (maks/min/belok).
- **Rasional $y = \dfrac{P(x)}{Q(x)}$**

    - **Asimtot Tegak**

        Saat $Q(x) = 0$ (penyebut = 0).

    - **Asimtot Datar**

        - $y=0$, jika pangkat $P(x) <$ pangkat $Q(x)$.
        - $y = a/b$ (koefisien pangkat tertinggi), jika pangkat $P(x) =$ pangkat$Q(x)$.

- **Akar $y = \sqrt{x}$**

    Grafik dimulai dari (0,0) dan melengkung ke kanan atas.

- **Eksponen $y = a^x$**

    - Jika $a > 1$: Grafik *naik* monoton (Eksponensial).
    - Jika $0 < a < 1$: Grafik *turun* monoton (Peluruhan).
    - Selalu memotong sumbu y di (0, 1).

- **Logaritma $y = \log_{a} x$**

    - Jika $a > 1$: Grafik *naik* monoton.
    - Selalu memotong sumbu x di (1, 0).

- **Mutlak $y = |x|$**

    Grafik berbentuk V di titik (0,0). Bagian negatif dari grafik dicerminkan ke atas.

- **Trigonometri**

    - $y = \sin x$:  (Nilai maks 1, min -1, Periode $360^\circ$ atau $2\pi$).
    - $y = \cos x$:  (Seperti $\sin x$ tapi digeser. Nilai maks 1, min -1, Periode $360^\circ$ atau $2\pi$).
    - $y = \tan x$:  (Punya asimtot tegak, Periode $180^\circ$ atau $\pi$).

---

## 4. Vektor

### Vektor Dasar, Arah dan Panjang
- **Vektor Posisi**

    $\vec{A} = a_i + a_j + a_k$ atau $\begin{pmatrix} a_i \\ a_j \\ a_k \end{pmatrix}$

- **Vektor antara 2 Titik**

    $\vec{AB} = B - A$

- **Panjang Vektor (Magnitudo)**

    $|\vec{u}| = \sqrt{x^2 + y^2 + z^2}$

- **Vektor Satuan**

    $\hat{u} = \dfrac{\vec{u}}{|\vec{u}|}$ (Panjangnya 1)

### Operasi Vektor
- **Penjumlahan/Pengurangan**

    Jumlahkan/kurangkan komponen yang seletak.

- **Perkalian Skalar (Dot Product)**

    Hasilnya skalar (angka).
    - $\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z$
    - $\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta$
    - Jika $\vec{a} \cdot \vec{b} = 0$, maka $\vec{a} \perp \vec{b}$ (tegak lurus).

- **Perkalian Vektor (Cross Product)**

    Hasilnya vektor (hanya di R³).
    - $\vec{a} \times \vec{b}$

        (Gunakan determinan matriks $i, j, k$).

    - $|\vec{a} \times \vec{b}| = |\vec{a}| |\vec{b}| \sin \theta$
    - Hasil $\vec{a} \times \vec{b}$ tegak lurus terhadap $\vec{a}$ dan $\vec{b}$.

---

## 5. Lingkaran

### Persamaan Lingkaran
- **Pusat (0, 0)**

    $x^2 + y^2 = r^2$

- **Pusat ($a, b$)**

    $(x-a)^2 + (y-b)^2 = r^2$

- **Bentuk Umum**

    $x^2 + y^2 + Ax + By + C = 0$
    - Pusat

        $P = (-\dfrac{A}{2}, -\dfrac{B}{2})$
    - Jari-jari

        $r = \sqrt{(\dfrac{A}{2})^2 + (\dfrac{B}{2})^2 - C}$

### Persamaan Garis Singgung
- **Melalui Titik ($x_1, y_1$) pada Lingkaran**
    - Pusat (0,0)

        $x_1 x + y_1 y = r^2$

    - Pusat (a,b)

        $\small(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$

- **Gradien $m$:**
    - Pusat (0,0)

        $y = mx \pm r \sqrt{m^2 + 1}$

    - Pusat (a,b)

        $y - b = m(x - a) \pm r \sqrt{m^2 + 1}$

### Luas dan Keliling Daerah
- **Luas Lingkaran**

    $L = \pi r^2$

- **Keliling Lingkaran**

    $K = 2 \pi r$

- **Luas Juring**

    $L_j = \dfrac{\theta}{360^\circ} \times \pi r^2$

- **Panjang Busur**

    $P_b = \dfrac{\theta}{360^\circ} \times 2 \pi r$

---

## 6. Transformasi Geometri

### Transformasi Titik, Garis, Bangun Datar

- **Translasi**

    $P(x, y) \to P'(x + a,\, y + b)$  
    Vektor translasi: $\begin{pmatrix} a \\ b \end{pmatrix}$  

- **Refleksi**
    - **Sumbu X**  
    $P(x, y) \to P'(x,\, -y)$\
    Matriks: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$  

    - **Sumbu Y**  
    $P(x, y) \to P'(-x,\, y)$  
    Matriks: $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$  

    - **Titik asal (0,0)**  
    $P(x, y) \to P'(-x,\, -y)$  
    Matriks: $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$  

    - **Garis $y = x$**  
    $P(x, y) \to P'(y,\, x)$  
    Matriks: $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$  

    - **Garis $y = -x$**  
    $P(x, y) \to P'(-y,\, -x)$  
    Matriks: $\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$  

    - **Garis $x = h$**  
    $P(x, y) \to P'(2h - x,\, y)$  

    - **Garis $y = k$**  
    $P(x, y) \to P'(x,\, 2k - y)$  

- **Rotasi**
    - **Titik asal (0,0)**  
    Berlawanan arah jarum jam sejauh $\theta$:  
    Matriks: $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$  

    - **Titik pusat $A(a, b)$**  
    Berlawanan arah jarum jam sejauh $\theta$:  
    Matriks: $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}\begin{pmatrix} x - a \\ y - b \end{pmatrix} + \begin{pmatrix} a \\ b \end{pmatrix}$  

- **Dilatasi**
    - **Titik asal (0,0)**  
    Dengan faktor skala $k$:  
    $P(x, y) \to P'(kx,\, ky)$  
    Matriks: $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$  

    - **Titik pusat $A(a, b)$**  
    Dengan faktor skala $k$:  
    $\small P(x, y) \to P'(a + k(x - a),\, b + k(y - b))$  
    Matriks: $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}\begin{pmatrix} x - a \\ y - b \end{pmatrix} + \begin{pmatrix} a \\ b \end{pmatrix}$  


---

## 7. Limit Fungsi

### Konsep Dasar dan Sifat Limit
- **Konsep**

    $\displaystyle\lim_{x \to c} f(x) = L$ berarti "Jika $x$ mendekati $c$, maka $f(x)$ mendekati $L$".

- Limit ada jika $\displaystyle\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$ (Limit kiri = Limit kanan).

- **Sifat**
    - $\displaystyle\lim_{x \to c} k = k$
    - $\displaystyle\lim_{x \to c} x = c$
    - $\displaystyle\lim_{x \to c} k \cdot f(x) = k \cdot \lim_{x \to c} f(x)$
    - $\displaystyle\lim_{x \to c} (f(x) \pm g(x)) = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)$
    - $\displaystyle\lim_{x \to c} (f(x) \cdot g(x)) = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)$
    - $\displaystyle\lim_{x \to c} \left( \dfrac{f(x)}{g(x)} \right) = \dfrac{\displaystyle\lim_{x \to c} f(x)}{\displaystyle\lim_{x \to c} g(x)}$  , dengan $\displaystyle\lim_{x \to c} g(x) \neq 0$
    - $\displaystyle\lim_{x \to c} \bigg(f(x)\bigg)^n = \bigg(\lim_{x \to c} f(x)\bigg)^n$
    - $\displaystyle\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to c} f(x)}$  , dengan $\displaystyle\lim_{x \to c} f(x) \ge 0$ untuk $n$ genap

### Limit Aljabar
- **Metode**
    1.  **Substitusi Langsung**

        Masukkan nilai $x=c$.
    2.  Jika hasilnya $\dfrac{0}{0}$ (Bentuk Tak Tentu), gunakan:
        - **Faktorisasi:** Coret faktor yang sama.
        - **Kali Sekawan:** Jika ada bentuk akar.
    3.  Jika hasilnya $\dfrac{a}{0}$ ($a \neq 0$): Hasilnya $\infty$ atau $-\infty$.
    4.  Jika hasilnya $\dfrac{a}{\infty}$: Hasilnya 0.

### Limit Trigonometri
- **Bentuk Dasar ($x \to 0$)**
    - $\displaystyle\lim_{x \to 0} \dfrac{\sin x}{x} = 1$
    - $\displaystyle\lim_{x \to 0} \dfrac{\tan x}{x} = 1$
    - $\displaystyle\lim_{x \to 0} \dfrac{\sin ax}{bx} = \dfrac{a}{b}$
    - $\displaystyle\lim_{x \to 0} \dfrac{\tan ax}{bx} = \dfrac{a}{b}$
    - $\displaystyle\lim_{x \to 0} \dfrac{ax}{\sin bx} = \dfrac{a}{b}$
    - $\displaystyle\lim_{x \to 0} \dfrac{ax}{\tan bx} = \dfrac{a}{b}$
    - $\displaystyle\lim_{x \to 0} \dfrac{1-\cos x}{x} = 0$
### Limit Mendekati Tak Hingga ($\displaystyle\lim_{x \to \infty}$)
- **Bentuk Pecahan $f(x) = \dfrac{ax^m + ...}{px^n + ...}$**
    - Lihat pangkat tertinggi ($m$ di atas, $n$ di bawah).
    - Jika $m < n$: Hasilnya **0**.
    - Jika $m = n$: Hasilnya **$\dfrac{a}{p}$** (koefisien pangkat tertinggi).
    - Jika $m > n$: Hasilnya **$\infty$** atau **$-\infty$**.
- **Bentuk $\sqrt{A} - \sqrt{B}$:**
    - Kalikan dengan sekawan $\dfrac{\sqrt{A} + \sqrt{B}}{\sqrt{A} + \sqrt{B}}$.
    - **Rumus Cepat**

        $\displaystyle\lim_{x \to \infty} (\sqrt{ax^2+bx+c} - \sqrt{px^2+qx+r})$
        - Jika $a > p$: Hasilnya $\infty$
        - Jika $a < p$: Hasilnya $-\infty$
        - Jika $a = p$: Hasilnya $\dfrac{b-q}{2\sqrt{a}}$
