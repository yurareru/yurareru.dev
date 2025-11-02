---
title: Cheatsheet TKA Fisika
date: 2025-10-30
tags:
  - cheatsheet
  - physic
type: article
---
##  1. Kinematika

### Besaran, Satuan dan Vektor

- **Besaran Pokok**

    - Panjang ($\text{m}$)
    - Massa ($\text{kg}$)
    - Waktu ($\text{s}$)
    - Suhu ($\text{K}$)
    - Kuat Arus ($\text{A}$)
    - Intensitas Cahaya ($\text{cd}$)
    - Jumlah Zat ($\text{mol}$)
    
- **Besaran Turunan**

    Diturunkan dari besaran pokok (contoh: Kecepatan $\text{m/s}$, Gaya $\text{N}$).
    
- **Vektor**
    
    - Resultan 2 Vektor

        $R = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos \theta}$
        
    - Komponen Vektor 

        - $F_x = F \cos \theta$
        - $F_y = F \sin \theta$
        
    - Perkalian Titik (Dot)

        $\vec{A} \cdot \vec{B} = AB \cos \theta$\
        (Hasil Skalar)
        
    - Perkalian Silang (Cross)

        $|\vec{A} \times \vec{B}| = AB \sin \theta$\
        (Hasil Vektor)
        

### Pengukuran Alat dan Angka Penting

- **Jangka Sorong**

    Ketelitian 0,1 mm (atau 0,05 mm).
    
- **Mikrometer Sekrup**

    Ketelitian 0,01 mm.
    
- **Aturan Angka Penting (AP)**
    
    - **Penjumlahan/Pengurangan**

        Hasilnya hanya boleh punya 1 angka taksiran (angka desimal paling sedikit).
        
    - **Perkalian/Pembagian**

        Hasilnya mengikuti jumlah AP yang paling sedikit.
        

### Jarak, Perpindahan, Kecepatan, Kelajuan

- **Jarak**

    Panjang total lintasan (Skalar).
    
- **Perpindahan ($\Delta x$)**

    Perubahan posisi (Vektor). $\Delta x = x_{akhir} - x_{awal}$
    
- **Kelajuan Rata-rata**

    $\bar{v} = \dfrac{\text{Jarak total}}{\text{Waktu total}}$
    
- **Kecepatan Rata-rata**

    $\bar{v} = \dfrac{\Delta x}{\Delta t} = \dfrac{x_2 - x_1}{t_2 - t_1}$
    

### GLB dan GLBB

- **GLB (Gerak Lurus Beraturan)**

    Kecepatan konstan ($v = \text{konstan}$, $a = 0$).
    
    - $s = v \cdot t$
        
- **GLBB (Gerak Lurus Berubah Beraturan)**

    Percepatan konstan ($a = \text{konstan}$).
    
    - $v_t = v_0 + a \cdot t$
        
    - $s = v_0 \cdot t + \dfrac{1}{2} a \cdot t^2$
        
    - $v_t^2 = v_0^2 + 2 \cdot a \cdot s$
        
    - (Gunakan $a = +g$ untuk GJB/Gerak Vertikal ke Bawah, dan $a = -g$ untuk Gerak Vertikal ke Atas).
        

### Gerak Parabola dan Gerak Melingkar BB

- **Gerak Parabola (Peluru)**
    
    - Sumbu-X (GLB)
        - $v_x = v_0 \cos \alpha$
        - $x = (v_0 \cos \alpha) \cdot t$
        
    - Sumbu-Y (GLBB)
        - $v_y = (v_0 \sin \alpha) - g \cdot t$
        - $y = (v_0 \sin \alpha) \cdot t - \dfrac{1}{2} g \cdot t^2$
        
    - Titik Tertinggi ($y_{max}$)
        - $t_p = \dfrac{v_0 \sin \alpha}{g}$
        - $y_{max} = \dfrac{v_0^2 \sin^2 \alpha}{2g}$
        
    - Jarak Terjauh ($x_{max}$)
        - $t_{total} = 2 t_p$
        - $x_{max} = \dfrac{v_0^2 \sin(2\alpha)}{g}$
        
- **Gerak Melingkar Beraturan (GMB)**
    
    - Hubungan
        - $v = \omega R$
        - $\omega = \dfrac{2\pi}{T} = 2\pi f$
        
    - Percepatan Sentripetal (arah ke pusat)

        $a_s = \dfrac{v^2}{R} = \omega^2 R$
        
    - Gaya Sentripetal

        $F_s = m \cdot a_s = m \dfrac{v^2}{R}$
        

---

## 2. Dinamika

### Konsep Gaya dan Jenis Gaya

- **Gaya ($\text{F}$)** $\text{Newton}$
    
- **Gaya Berat ($\text{w}$)**
    
    $w = m \cdot g$\
    (selalu ke bawah)
    
- **Gaya Normal ($\text{N}$)**

    Gaya kontak tegak lurus bidang.
    
- **Gaya Gesek ($\text{f}$)**
    
    - Statis (diam)

        $f_s \le \mu_s \cdot N$
        
    - Kinetis (gerak)

        $f_k = \mu_k \cdot N$
        

### Hukum Newton 1, 2, 3 dan Aplikasinya

- **Hukum I Newton (Inersia)**

    Jika benda diam/GLB, maka $\Sigma F = 0$.
    
- **Hukum II Newton**

    $\Sigma F = m \cdot a$\
    (Jika ada resultan gaya, benda dipercepat).
    
- **Hukum III Newton (Aksi-Reaksi)**

    $F_{\text{aksi}} = -F_{\text{reaksi}}$\
    (Beda benda, sama besar, berlawanan arah).
    

### Momentum, Impuls, dan Kekekalan Momentum

- **Momentum ($\text{p}$)** $\text{kg m/s}$

    $p = m \cdot v$\
    (Ukuran "kesulitan" menghentikan benda).
    
- **Impuls (I)** $\text{Ns}$

    $I = F \cdot \Delta t$\
    (Gaya yang bekerja dalam selang waktu).
    
- **Hubungan Impuls-Momentum**

    $I = \Delta p = p_{akhir} - p_{awal}$
    
- **Hukum Kekekalan Momentum** (Terjadi saat tumbukan)
    
    - $p_{\text{awal}} = p_{\text{akhir}}$
        
    - $m_1 v_1 + m_2 v_2 = m_1 v'_1 + m_2 v'_2$
        
- **Koefisien Restitusi (e)**

    $e = - \dfrac{v'_2 - v'_1}{v_2 - v_1}$
    
    - $e = 1$: Lenting Sempurna.
    - $e = 0$: Tidak Lenting.
    - $0 < e < 1$: Lenting Sebagian.
        

### Momen Gaya dan Momen Inersia

- **Momen Gaya / Torsi ($\tau$)** $\text{Nm}$

    Penyebab benda berotasi.
    
    - $\tau = F \cdot r \cdot \sin \theta$\
    (di mana $r \sin \theta = d$, lengan momen)
        
    - $\tau = F \cdot d$\
    (Arah: kaidah tangan kanan)
        
- **Momen Inersia (I)** $\text{kg m}^2$

    Kelembaman rotasi (analog massa).
    
    - Partikel

        $I = m \cdot R^2$
        
    - Benda Tegar

        $I = k \cdot m \cdot R^2$

- **Keseimbangan Benda Tegar**

    $\Sigma F_x = 0$\
    $\Sigma F_y = 0$\
    $\Sigma \tau = 0$
    

### Hukum Newton tentang Rotasi

- **Hukum II Newton (Rotasi)**

    $\Sigma \tau = I \cdot \alpha$\
    (analog $\Sigma F = m \cdot a$)
    
- **Energi Kinetik Rotasi**

    $E_{k, rot} = \dfrac{1}{2} I \omega^2$
    
- **Energi Kinetik Total (Menggelinding)**

    $E_{k, tot} = E_{k, trans} + E_{k, rot} = \dfrac{1}{2} m v^2 + \dfrac{1}{2} I \omega^2$
    
- **Momentum Sudut (L)**

    $L = I \cdot \omega$
    
- **Kekekalan Momentum Sudut**
    
    $L_{\text{awal}} = L_{\text{akhir}}\rightarrow I_1 \omega_1 = I_2 \omega_2$
    

---

## 3. Fluida

### Fluida Statis: Tekanan Fluida, Pascal, Archimedes

- **Massa Jenis**

    $\rho = m / V$ [kg/m³]
    
- **Tekanan**

    $P = F / A$ [Pa atau N/m²]
    
- **Tekanan Hidrostatis**

    $P_h = \rho \cdot g \cdot h$\
    (h = kedalaman dari permukaan)
    
- **Hukum Pascal**

    Tekanan di ruang tertutup diteruskan ke segala arah sama besar.
    
    - $\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}$\
    (Prinsip dongkrak hidrolik)
        
- **Hukum Archimedes (Gaya Apung, $F_A$):**
    
    - $F_A = \rho_{cair} \cdot g \cdot V_{celup}$
        
    - Terapung:
        - $\rho_{benda} < \rho_{cair}$
        - Melayang: $\rho_{benda} = \rho_{cair}$
        - Tenggelam: $\rho_{benda} > \rho_{cair}$
        

### Fluida Dinamis: Hukum Kontinuitas, Bernoulli

- **Debit (Q)**

    $Q = \dfrac{V}{t} = A \cdot v$ [m³/s]
    
- **Hukum Kontinuitas**

    $Q_1 = Q_2 \rightarrow A_1 v_1 = A_2 v_2$\
    (Di tempat sempit, fluida lebih cepat).
    
- **Hukum Bernoulli** (Kekekalan energi fluida)
    
    $P_1 + \dfrac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \dfrac{1}{2}\rho v_2^2 + \rho g h_2$
        
- Aplikasi:
    
    - **Teorema Torricelli (Tangki bocor)**

        $v = \sqrt{2 g h}$\
        ($h$ = kedalaman lubang dari permukaan)
        
    - **Venturimeter / Gaya Angkat Sayap Pesawat**

        Di mana $v$ cepat ($v \uparrow$), tekanan $P$ kecil ($P \downarrow$).
        

---

## 4. Gelombang

### Gelombang Bunyi, Sumber, Intensitas

- **Cepat Rambat Bunyi (v)**

    Tergantung medium.
    
    - Dawai/Senar

        $v = \sqrt{\dfrac{F}{\mu}}$\
        (Hukum Melde, $\mu = m/L$)
        
- **Intensitas Bunyi (I)**

    $I = \dfrac{P}{A} = \dfrac{P}{4\pi r^2}$ [W/m²]
    
- **Taraf Intensitas (TI)**

    $TI = 10 \log \left(\dfrac{I}{I_0}\right)$ [dB]
    
    - ($I_0 = 10^{-12}$ W/m², ambang pendengaran)
        
- **Efek Doppler** (Perubahan frekuensi karena gerak relatif)
    
    - $f_p = \left( \dfrac{v \pm v_p}{v \pm v_s} \right) f_s$
        
    - Aturan $\pm$: P (Pendengar), S (Sumber).

        $v_p$ (+ jika P mendekati S)\
        $v_s$ (+ jika S menjauhi P)
        

### Optik Geometri: Cermin, Lensa, Alat Optik

- **Hubungan Fokus (f), Jarak Benda (s), Jarak Bayangan (s')**
    
    - $\dfrac{1}{f} = \dfrac{1}{s} + \dfrac{1}{s'}$
        
    - Perbesaran

        $M = \left| \dfrac{s'}{s} \right| = \left| \dfrac{h'}{h} \right|$
        
- **Aturan Tanda Fokus (f)**
    
    - Positif (+)

        Cermin Cekung, Lensa Cembung (Konvergen)
        
    - Negatif (-)

        Cermin Cembung, Lensa Cekung (Divergen)
        
- **Aturan Tanda Bayangan (s'):**
    
    - Positif (+)

        Nyata, Terbalik (di belakang lensa, di depan cermin)
        
    - Negatif (-)

        Maya, Tegak (di depan lensa, di belakang cermin)
        
- **Kekuatan Lensa (P)** 

    $P = \dfrac{1}{f}$\
    ($f$ dalam meter) [Dioptri]
    
- **Alat Optik**
    
    - **Lup**
        - $M_{akom \ max} = \dfrac{S_n}{f} + 1$
        - $M_{tidak \ akom} = \dfrac{S_n}{f}$\
            ($S_n = 25$ cm)
        
    - **Mikroskop**
        - $M_{total} = M_{ob} \cdot M_{ok}$
        - Panjang $d = s'_{ob} + s_{ok}$
        

### Sifat Cahaya dan Gelombang Elektromagnet

- **Pembiasan (Refraksi)**

    Hukum Snellius $n_1 \sin i = n_2 \sin r$
    
- **Indeks Bias (n)**

    $n = c / v$ ($c$ = cepat rambat cahaya di vakum $\approx 3 \times 10^8$ m/s)
    
- **Spektrum Gelombang EM (dari $\lambda$ terbesar / $f$ terkecil)**
    
    - Radio - Mikro - Infra Merah - Cahaya Tampak (MeJiKuHiBiNiU) - UV - Sinar-X - Sinar Gamma
        
- **Energi Foton**

    $E = h \cdot f = h \cdot \dfrac{c}{\lambda}$\
    ($h$ = Konstanta Planck)
    

---

## 5. Kalor

### Kalor, Perubahan Suhu dan Wujud Zat

- **Kalor (Q)**

    Energi panas [Joule atau kalori]
    
- **Kalor u/ Perubahan Suhu**

    $Q = m \cdot c \cdot \Delta T$\
    ($c$ = kalor jenis)
    
- **Kalor u/ Perubahan Wujud**
    
    - Melebur/Membeku

        $Q = m \cdot L$ ($L$ = kalor lebur/beku)
        
    - Menguap/Mengembun

        $Q = m \cdot U$ ($U$ = kalor uap/embun)
        

### Pemuaian, Perpindahan Kalor, Pencampuran Zat

- **Pemuaian**
    
    - Panjang

        $\Delta L = L_0 \cdot \alpha \cdot \Delta T$
        
    - Luas

        $\Delta A = A_0 \cdot \beta \cdot \Delta T$ ($\beta = 2\alpha$)
        
    - Volume

        $\Delta V = V_0 \cdot \gamma \cdot \Delta T$ ($\gamma = 3\alpha$)
        
- **Perpindahan Kalor**
    
    - **Konduksi (Hantaran)**

        $H = \dfrac{Q}{t} = \dfrac{k A \Delta T}{L}$ (pada zat padat)
        
    - **Konveksi (Aliran)**

        $H = h A \Delta T$ (pada fluida)
        
    - **Radiasi (Pancaran)** 

        $P = \dfrac{Q}{t} = e \sigma A T^4$ ($T$ dalam Kelvin)
        
- **Asas Black (Pencampuran)**

    $Q_{\text{lepas}} = Q_{\text{terima}}$
    
    - $m_1 c_1 (T_1 - T_a) = m_2 c_2 (T_a - T_2)$ (Jika $T_1 > T_2$)
        

### Pemanasan Global, Efek Rumah Kaca

- **Efek Rumah Kaca**

    Gas CO₂, CH₄, dll. memerangkap radiasi infra merah (panas) di atmosfer, menyebabkan suhu Bumi naik.
    

### Hukum-hukum, Persamaan Gas Ideal

- **Hukum Boyle-Gay Lussac**

    $\dfrac{P_1 V_1}{T_1} = \dfrac{P_2 V_2}{T_2}$ ($T$ dalam Kelvin)
    
- **Persamaan Gas Ideal**
    
    - $P V = n R T$ ($n$ = jumlah mol, $R = 8,314$ J/mol·K)
        
    - $P V = N k T$ ($N$ = jumlah partikel, $k = 1,38 \times 10^{-23}$ J/K)
        
- **Energi Kinetik Rata-rata Gas**

    $\bar{E_k} = \dfrac{f}{2} k T$ ($f$ = derajat kebebasan)
    
- **Energi Dalam (U)**

    $U = N \cdot \bar{E_k} = \dfrac{f}{2} n R T$
    

### 4 Proses Termodinamika dan Mesin Kalor

- **Hukum I Termodinamika**

    $\Delta U = Q - W$
    
    - $\Delta U$ = Perubahan energi dalam
        
    - $Q$ = Kalor (+ jika terima, - jika lepas)
        
    - $W$ = Usaha (+ jika sistem melakukan usaha, - jika dikenai usaha)
        
- **Proses Termo**
    
    1. **Isotermik** ($T$ konstan)

        $\Delta U = 0 \rightarrow Q = W$. Usaha $W = nRT \ln(V_2/V_1)$
        
    2. **Isokhorik** ($V$ konstan)

        $W = 0 \rightarrow \Delta U = Q$
        
    3. **Isobarik** ($P$ konstan)

        Usaha $W = P \cdot \Delta V$. $\Delta U = Q - P\Delta V$
        
    4. **Adiabatik** ($Q = 0$)

        $\Delta U = -W$. Berlaku $P_1 V_1^{\gamma} = P_2 V_2^{\gamma}$
        
- **Mesin Kalor (Carnot)**
    
    - Usaha

        $W = Q_H - Q_L$ ($Q_H$ = kalor serap, $Q_L$ = kalor buang)
        
    - Efisiensi ($\eta$)

        $\eta = \dfrac{W}{Q_H} = 1 - \dfrac{Q_L}{Q_H}$
        
    - Efisiensi Ideal (Carnot)

        $\eta_{ideal} = 1 - \dfrac{T_L}{T_H}$ ($T$ dalam Kelvin)
        

---

##  6. Fisika Listrik

### Listrik Statis: Muatan, Medan, Potensial Listrik

- **Hukum Coulomb (Gaya)**

    $F = k \dfrac{|q_1 q_2|}{r^2}$ ($k = 9 \times 10^9$ N·m²/C²)
    
- **Medan Listrik (E)**

    $E = \dfrac{F}{q} = k \dfrac{|Q|}{r^2}$ (Arah: keluar dari +, masuk ke -)
    
- **Potensial Listrik (V)**

    $V = k \dfrac{Q}{r}$ (Skalar, tanda $Q$ dimasukkan)
    
- **Energi Potensial Listrik ($E_p$)**

    $E_p = q \cdot V = k \dfrac{q_1 q_2}{r}$
    
- **Kapasitor (Keping Sejajar)**

    $C = \dfrac{Q}{V} = \epsilon_0 \dfrac{A}{d}$
    
- **Energi Kapasitor**

    $W = \dfrac{1}{2} Q V = \dfrac{1}{2} C V^2 = \dfrac{1}{2} \dfrac{Q^2}{C}$
    

### Listrik Dinamis: Hukum Ohm dan Kirchoff

- **Arus Listrik (I)**

    $I = Q / t$ [Ampere, A]
    
- **Hukum Ohm**

    $V = I \cdot R$
    
- **Hambatan (R)**

    $R = \rho \dfrac{L}{A}$ ($\rho$ = hambat jenis)
    
- **Hukum I Kirchoff (Arus)**

    $\Sigma I_{\text{masuk}} = \Sigma I_{\text{keluar}}$ (di titik cabang)
    
- **Hukum II Kirchoff (Tegangan)**

    $\Sigma \epsilon + \Sigma (I \cdot R) = 0$ (dalam 1 loop tertutup)
    

### Rangkaian Seri, Paralel, Campuran

- **Rangkaian Seri**
    
    - $R_s = R_1 + R_2 + ...$ (Hambatan)
        
    - $\dfrac{1}{C_s} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + ...$ (Kapasitor)
        
    - Arus ($I$) sama, Tegangan ($V$) terbagi.
        
- **Rangkaian Paralel**
    
    - $\dfrac{1}{R_p} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + ...$ (Hambatan)
        
    - $C_p = C_1 + C_2 + ...$ (Kapasitor)
        
    - Tegangan ($V$) sama, Arus ($I$) terbagi.
        

### Menghitung Daya Listrik

- **Daya Listrik (P)** [Watt, W]
    
    - $P = V \cdot I$
        
    - $P = I^2 \cdot R$
        
    - $P = \dfrac{V^2}{R}$
        
- **Energi Listrik (W)** [Joule, J]
    
    - $W = P \cdot t = V \cdot I \cdot t$
        
    - (Dalam kWh: $W = (P \text{ dalam kW}) \cdot (t \text{ dalam jam})$)
