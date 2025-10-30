---
title: Cheatsheet TKA Matematika
date: 2025-10-28
tags:
  - cheatsheet
  - math
type: article
---
## 1. Fundamental Bilangan

### Jenis Bilangan dan Sifat Bilangan
* **Jenis Bilangan:**
    * **Asli:** {1, 2, 3, ...}
    * **Cacah:** {0, 1, 2, ...}
    * **Bulat:** {..., -2, -1, 0, 1, 2, ...}
    * **Rasional:** Dapat dinyatakan $a/b$, $b \neq 0$ (termasuk pecahan, desimal berulang).
    * **Irasional:** Tidak dapat dinyatakan $a/b$ (contoh: $\pi$, $\sqrt{2}$).
    * **Real:** Gabungan Rasional dan Irasional.
* **Sifat Operasi:**
    * **Komutatif (tukar):**
        - $a + b = b + a$
        - $a \times b = b \times a$
    * **Asosiatif (kelompok):** $(a+b)+c = a+(b+c)$
    * **Distributif (sebar):** $a \times (b+c) = (a \times b) + (a \times c)$

### KPK, FPB dan Aplikasinya
* **FPB (Faktor Persekutuan Terbesar):** Ambil semua faktor prima yang **sama** dengan pangkat **terkecil**.
* **KPK (Kelipatan Persekutuan Terkecil):** Ambil **semua** faktor prima dengan pangkat **terbesar**.

### Operasi MTK Dasar (PEMDAS/KuKaBaTaKu)
1.  **Ku**rung (**P**arentheses)
2.  **Pa**ngkat/Akar (**E**xponents/Roots)
3.  **Ka**li / **Ba**gi (**M**ultiplication/**D**ivision) - setara, kerjakan dari kiri.
4.  **Ta**mbah / **Ku**rang (**A**ddition/**S**ubtraction) - setara, kerjakan dari kiri.

### Jenis-jenis Pecahan dan Mengonversi
* **Biasa:** $a/b$
* **Campuran:** $c \dfrac{a}{b} = \dfrac{(c \times b) + a}{b}$
* **Desimal:** 0,5
* **Persen:** 50%
* **Konversi:** $1/2 = 0,5 = 50\%$

---

## 2. Aplikasi Bilangan Real

### Pecahan, Desimal, Persentase
* **Untung/Rugi:**
    - $Untung = HJ - HB$
    - $Rugi = HB - HJ$
* **Persentase Untung:** $\%U = \left( \dfrac{Untung}{HB} \right) \times 100\%$
* **Diskon (Rabat):** $Harga \ Bayar = Harga \ Awal - (\%Diskon \times Harga \ Awal)$

### Akar dan Pangkat (Eksponen)
* $a^m \times a^n = a^{m+n}$
* $a^m \div a^n = a^{m-n}$
* $(a^m)^n = a^{m \times n}$
* $(ab)^n = a^n b^n$
* $a^{-n} = 1/a^n$
* $a^0 = 1$
* $a^{m/n} = \sqrt[n]{a^m}$
* $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$
* $\sqrt{a} + \sqrt{a} = 2\sqrt{a}$ (Hanya bisa jika akarnya sama)
* **Merasionalkan:**
    * $\dfrac{c}{\sqrt{a}} = \dfrac{c}{\sqrt{a}} \times \dfrac{\sqrt{a}}{\sqrt{a}} = \dfrac{c\sqrt{a}}{a}$
    * $\dfrac{c}{a + \sqrt{b}} = \dfrac{c}{a + \sqrt{b}} \times \dfrac{a - \sqrt{b}}{a - \sqrt{b}} = \dfrac{c(a - \sqrt{b})}{a^2 - b}$

### Konsep Perbandingan
* **Senilai:** Jika A naik, B naik. $\dfrac{A_1}{B_1} = \dfrac{A_2}{B_2}$
* **Berbalik Nilai:** Jika A naik, B turun. $A_1 \times B_1 = A_2 \times B_2$

---

## 3. Fundamental Aljabar

### Operasi Aljabar Sederhana
* Hanya bisa dijumlah/dikurang jika **suku sejenis** (variabel dan pangkatnya sama).
    * $3x + 2y - x = (3x - x) + 2y = 2x + 2y$
* Perkalian: $(a+b)(c+d) = ac + ad + bc + bd$

### Penyederhanaan, Faktorisasi, Distribusi
* **Distribusi:** $a(b+c) = ab + ac$
* **Bentuk Kuadrat Sempurna:**
    * $(a+b)^2 = a^2 + 2ab + b^2$
    * $(a-b)^2 = a^2 - 2ab + b^2$
* **Selisih Dua Kuadrat:**
    * $a^2 - b^2 = (a+b)(a-b)$
* **Faktorisasi $ax^2+bx+c$:** Cari dua angka $p$ dan $q$ dimana $p+q = b$ dan $p \times q = ac$.
    * $x^2 + 5x + 6 \rightarrow (x+2)(x+3)$ (karena $2+3=5$ dan $2 \times 3=6$)

---

## 4. Aplikasi Aljabar

### Persamaan dan Pertidaksamaan Aljabar
* **Persamaan:** $ax + b = c \rightarrow ax = c-b \rightarrow x = \dfrac{c-b}{a}$
* **Pertidaksamaan:**
    * Sama seperti persamaan, TAPI...
    * **Tanda ($<, >$) dibalik** jika dikali atau dibagi bilangan **negatif**.
    * Contoh: $-2x < 6 \rightarrow x > -3$
    * **Pertidaksamaan Kuadrat ($ax^2+bx+c > 0$):**
        1.  Faktorkan.
        2.  Cari akar-akarnya (pembuat nol).
        3.  Buat garis bilangan, uji titik untuk menentukan area (+/-).

### SPLDV/SPLTV (Sistem Persamaan Linear)
* **Metode:**
    1.  **Substitusi:** Gantikan satu variabel dengan variabel lain.
    2.  **Eliminasi:** Hilangkan satu variabel dengan menjumlahkan/mengurangkan kedua persamaan.
    3.  **Campuran:** Eliminasi dulu, lalu substitusi.

### Program Linear
1.  **Model Matematika:** Ubah soal cerita menjadi pertidaksamaan (fungsi kendala).
2.  **Fungsi Tujuan:** Tentukan fungsi $f(x,y) = ax+by$ yang akan dimaksimumkan/diminimumkan.
3.  **Gambar DHP:** Gambar grafik pertidaksamaan dan tentukan Daerah Himpunan Penyelesaian.
4.  **Cari Titik Pojok:** Tentukan koordinat titik-titik di sudut DHP.
5.  **Uji Titik:** Masukkan titik pojok ke fungsi tujuan untuk menemukan nilai maks/min.

---

## 5. Aljabar Barisan-Deret

### Barisan-Deret Aritmatika (Pola Tambah/Kurang)
* **Beda (b):** $b = U_n - U_{n-1}$
* **Suku ke-n (Un):** $U_n = a + (n-1)b$
* **Jumlah n Suku (Sn):**
    * $S_n = \dfrac{n}{2} (a + U_n)$
    * $S_n = \dfrac{n}{2} (2a + (n-1)b)$

### Barisan-Deret Geometri (Pola Kali/Bagi)
* **Rasio (r):** $r = U_n / U_{n-1}$
* **Suku ke-n (Un):** $U_n = a \cdot r^{n-1}$
* **Jumlah n Suku (Sn):**
    * $S_n = \dfrac{a(r^n - 1)}{r-1}$ (untuk $r > 1$)
    * $S_n = \dfrac{a(1 - r^n)}{1-r}$ (untuk $r < 1$)

### Deret Tak Hingga (Geometri)
* **Syarat Konvergen (punya jumlah):** $-1 < r < 1$
* **Jumlah (S∞):** $S_{\infty} = \dfrac{a}{1-r}$

### Aritmatika Sosial
* **Diskon:** $Harga \ Bayar = Harga \ Awal \times (100\% - \%Diskon)$
* **Bunga Tunggal:** $Bunga = M_0 \times i \times n$ ($M_0$=Modal, $i$=\%bunga, $n$=waktu)
* **Bunga Majemuk:** $M_n = M_0 (1 + i)^n$

---

## 6. Himpunan dan Fungsi

### Himpunan
* **Gabungan ($\cup$):** Semua anggota A atau B.
* **Irisan ($\cap$):** Anggota yang ada di A dan B.
* **Komplemen ($A^c$):** Semua anggota di luar A.
* **Selisih ($A-B$):** Anggota A yang bukan anggota B.
* $n(A \cup B) = n(A) + n(B) - n(A \cap B)$

### Persamaan Garis Lurus
* **Bentuk:** $y = mx + c$ ($m$ = gradien, $c$ = perpotongan sumbu y)
* **Gradien ($m$):** $m = \dfrac{\Delta y}{\Delta x} = \dfrac{y_2 - y_1}{x_2 - x_1}$
* **Persamaan (lewat 1 titik $(x_1, y_1)$, gradien $m$):** $y - y_1 = m(x - x_1)$
* **Persamaan (lewat 2 titik):** $\dfrac{y - y_1}{y_2 - y_1} = \dfrac{x - x_1}{x_2 - x_1}$
* **Sejajar:** $m_1 = m_2$
* **Tegak Lurus:** $m_1 \times m_2 = -1$

### Fungsi, Relasi, Komposisi, Invers
* **Komposisi:** $(f \circ g)(x) = f(g(x))$ (Masukkan $g(x)$ ke dalam $f(x)$)
* **Invers ($f^{-1}(x)$):** "Kebalikan" dari fungsi.
    * Langkah: $y = f(x) \rightarrow$ Ubah persamaan menjadi $x = ...y \rightarrow$ Ganti $x$ jadi $f^{-1}(x)$ dan $y$ jadi $x$.
    * **Rumus Cepat:** $f(x) = \dfrac{ax+b}{cx+d} \Rightarrow f^{-1}(x) = \dfrac{-dx+b}{cx-a}$

### Persamaan dan Fungsi Kuadrat
* **Bentuk Umum:** $f(x) = ax^2 + bx + c$
* **Akar (Rumus ABC):** $x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$
* **Diskriminan (D):** $D = b^2 - 4ac$
    * $D > 0$: 2 akar real berbeda (memotong 2 titik)
    * $D = 0$: 1 akar real kembar (menyinggung 1 titik)
    * $D < 0$: Akar imajiner (tidak memotong sumbu x / melayang)
* **Sumbu Simetri:** $x_p = -b / 2a$
* **Nilai Puncak (Maks/Min):** $y_p = -D / 4a$
* **Operasi Akar:**
    - $x_1 + x_2 = -b/a$
    - $x_1 \cdot x_2 = c/a$

### Fungsi Rasional
* **Bentuk:** $f(x) = \dfrac{P(x)}{Q(x)}$
* **Asimtot Tegak:** Terjadi saat penyebut $Q(x) = 0$.
* **Asimtot Datar:**
    * $y=0$, jika pangkat $P(x) <$ pangkat $Q(x)$.
    * $y = a/b$ (koefisien pangkat tertinggi), jika pangkat $P(x) = $ pangkat $Q(x)$.

---

## 7. Geometri Sudut

* **Komplemen:** Dua sudut berjumlah $90^\circ$.
* **Suplemen:** Dua sudut berjumlah $180^\circ$.
* **Bertolak Belakang:** Sama besar.
* **Sehadap:** Sama besar (pada garis sejajar).
* **Dalam Berseberangan:** Sama besar (pada garis sejajar).
* **Luar Berseberangan:** Sama besar (pada garis sejajar).
* **Kesejajaran (Thales):** Sisi-sisi yang bersesuaian memiliki perbandingan yang sama. $\dfrac{a}{b} = \dfrac{c}{d}$

---

## 8. Geometri Pengukuran dan Transformasi

### Trigonometri Dasar dan Teori Phytagoras
* **Phytagoras:** $a^2 + b^2 = c^2$ ($c$ = sisi miring)
* **Rasio Trigono (Siku-siku):**
    * $\sin \alpha = \dfrac{\text{depan}}{\text{miring}}$ (de/mi)
    * $\cos \alpha = \dfrac{\text{samping}}{\text{miring}}$ (sa/mi)
    * $\tan \alpha = \dfrac{\text{depan}}{\text{samping}}$ (de/sa)
* **Identitas:**
    - $\sin^2\alpha + \cos^2\alpha = 1$
    - $\tan\alpha = \sin\alpha / \cos\alpha$

### Perbandingan dan Aplikasi Trigonometri
* **Aturan Sinus:** $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$ (Untuk mencari sisi/sudut jika diketahui pasangan sudut-sisi)
* **Aturan Cosinus:** $c^2 = a^2 + b^2 - 2ab \cos C$ (Untuk mencari sisi jika diketahui 2 sisi dan 1 sudut apit, atau mencari sudut jika 3 sisi diketahui)
* **Luas Segitiga:** $L = \dfrac{1}{2}ab \sin C$

### Bangun Datar, Luas dan Keliling
* **Segitiga:**
    - $L = \dfrac{1}{2} a \times t$
    - $K = s_1 + s_2 + s_3$
* **Persegi:**
    - $L = s^2$
    - $K = 4s$
* **Persegi Panjang:**
    - $L = p \times l$
    - $K = 2(p+l)$
* **Jajar Genjang:** $L = a \times t$
* **Trapesium:** $L = \dfrac{1}{2} (jumlah \ sisi \ sejajar) \times t$
* **Lingkaran:**
    - $L = \pi r^2$
    - $K = 2 \pi r$

### Bangun Ruang, Luas dan Volume
* **Kubus:**
    - $V = s^3$
    - $LP = 6s^2$
* **Balok:**
    - $V = p \cdot l \cdot t$
    - $LP = 2(pl + pt + lt)$
* **Tabung:**
    - $V = \pi r^2 t$
    - $LP = 2\pi r(r+t)$
* **Kerucut:**
    - $V = \dfrac{1}{3} \pi r^2 t$
    - $LP = \pi r(r+s)$ ($s$ = garis pelukis)
* **Bola:**
    - $V = \dfrac{4}{3} \pi r^3$
    - $LP = 4 \pi r^2$
* **Prisma:** $V = L_{alas} \times t$
* **Limas:** $V = \dfrac{1}{3} L_{alas} \times t$

### Transformasi Geometri
* **Translasi (Geser) $T(a,b)$:** $P(x,y) \rightarrow P'(x+a, y+b)$
* **Refleksi (Cermin):**
    * Sumbu X: $P(x,y) \rightarrow P'(x, -y)$
    * Sumbu Y: $P(x,y) \rightarrow P'(-x, y)$
    * Garis $y=x$: $P(x,y) \rightarrow P'(y, x)$
    * Garis $y=-x$: $P(x,y) \rightarrow P'(-y, -x)$
* **Rotasi (Putar) [Pusat O(0,0)]:**
    * $+90^\circ$: $P(x,y) \rightarrow P'(-y, x)$
    * $-90^\circ$: $P(x,y) \rightarrow P'(y, -x)$
    * $180^\circ$: $P(x,y) \rightarrow P'(-x, -y)$
* **Dilatasi (Skala) [Pusat O(0,0), faktor $k$]:** $P(x,y) \rightarrow P'(kx, ky)$

---

## 9. Data dan Peluang

### Penyebaran Data/Tendensi Sentral
* **Mean (Rata-rata):** $\bar{x} = \dfrac{\text{Jumlah data}}{\text{Banyak data}} = \dfrac{\Sigma x_i}{n}$
* **Mean (Data Kelompok):** $\bar{x} = \dfrac{\Sigma (f_i \cdot x_i)}{\Sigma f_i}$ ($x_i$ = nilai tengah kelas)
* **Median (Me):** Nilai tengah setelah data diurutkan.
* **Modus (Mo):** Data yang paling sering muncul.
* **Kuartil:** $Q_1$ (Bawah), $Q_2$ (Median), $Q_3$ (Atas).
* **Simpangan Baku:** $\sigma = \sqrt{\dfrac{\Sigma(x_i - \bar{x})^2}{n}}$

### Peluang Dasar dan Pencacahan
* **Ruang Sampel $n(S)$:** Total semua kemungkinan hasil.
* **Peluang Kejadian A, $P(A)$:** $P(A) = \dfrac{n(A)}{n(S)}$
* **Kisaran Peluang:** $0 \le P(A) \le 1$
* **Frekuensi Harapan:** $F_h(A) = P(A) \times N$ ($N$ = jumlah percobaan)
* **Kaidah Pencacahan (Filling Slots):** Kalikan jumlah opsi di setiap slot.

### Peluang Kejadian, Kombinasi, Permutasi
* **Faktorial:** $n! = n \times (n-1) \times ... \times 2 \times 1$
* **Permutasi (Urutan penting):** $P(n, k) = \dfrac{n!}{(n-k)!}$
* **Kombinasi (Urutan tidak penting):** $C(n, k) = \dfrac{n!}{k!(n-k)!}$
* **Kejadian Saling Lepas (A *atau* B):** $P(A \cup B) = P(A) + P(B)$
* **Kejadian Saling Bebas (A *dan* B):** $P(A \cap B) = P(A) \times P(B)$
