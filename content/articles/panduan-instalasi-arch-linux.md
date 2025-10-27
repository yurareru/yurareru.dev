---
title: Panduan Instalasi Arch Linux
date: 2024-08-05
type: article
tags:
  - linux
class: "img-full"
---

Arch Linux dikenal sebagai distribusi Linux yang sederhana, fleksibel, dan memberikan kebebasan penuh kepada penggunanya. Dibandingkan dengan distribusi lainnya yang lebih user-friendly seperti Ubuntu atau Fedora, Arch Linux sering kali dianggap sebagai pilihan para pengguna Linux yang lebih berpengalaman.

Bagi banyak penggemar Arch Linux, tantangan dalam menginstal dan mengonfigurasi sistem ini menjadi bagian dari daya tariknya. Frasa terkenal "I use Arch btw" sering digunakan dengan bangga oleh mereka yang berhasil menaklukkan proses instalasi manual yang dianggap sulit. Namun, dengan hadirnya script `archinstall`, instalasi Arch Linux kini bisa dilakukan dengan jauh lebih mudah, bahkan oleh pengguna pemula.

Meskipun begitu, para fans fanatik sering kali memandang rendah metode ini karena dianggap tidak menantang dan tidak memungkinkan mereka untuk mengatakan "I use Arch btw" dengan penuh kebanggaan. Atau, saya dan teman-teman saya memanggil mereka dengan sebutan "karbit".

Karena banyak sekali teman saya yang menanyakan kepada saya bagaimana cara menginstal Arch Linux, maka saya akan menuliskan cara untuk menginstal Arch Linux dengan cara lama tanpa menggunakan script `archinstall`.

Pada artikel ini, saya akan memberikan langkah-langkah untuk menginstal Arch Linux yang sangat sederhana di [VirtualBox](https://www.virtualbox.org).

Sebelum memulai instalasi Arch Linux, pastikan kita telah menyiapkan beberapa hal berikut:

1. Ruang disk yang cukup.
2. Koneksi internet yang stabil.
3. Waktu dan kesabaran.

Setelah kita memastikan bahwa kita telah memenuhi semua persyaratan, mari kita mulai langkah-langkah sebagai berikut:

## Langkah 1: Mengunduh ISO Arch Linux

Kita dapat mengunduh ISO Arch Linux dari [situs web resmi](https://archlinux.org/download/).  
Di sini saya akan mengunduh dari server Singapore menggunakan aria2.

![](/articles/panduan-instalasi-arch-linux/01.png)

## Langkah 2: Jalankan VirtualBox dan buat virtual machine baru

Kita juga dapat mengunduh VirtualBox dari [situs web resmi](https://www.virtualbox.org/wiki/Downloads).  
Di sini saya akan menginstalnya menggunakan package manager bawaan dari distro saya.

![](/articles/panduan-instalasi-arch-linux/02.png)

Jalankan VirtualBox sehingga muncul window seperti ini:

![](/articles/panduan-instalasi-arch-linux/03.png)

Untuk membuat Virtual Machine baru, klik tombol **New** di toolbar sehingga muncul popup window. Beri nama virtual machine, misalnya **ArchVM**. Atur folder penyimpanan dan masukkan ISO Arch Linux yang sudah diunduh sebelumnya. Pilih tipe dan versi yang sesuai, lalu klik **Next**.

Atur jumlah RAM dan CPU threads yang ingin kita alokasikan untuk VM ini, lalu aktifkan EFI. Setelah itu, lalu klik **Next**.

![](/articles/panduan-instalasi-arch-linux/05.png)

Buat virtual hard disk baru dengan mengalokasikan sekitar 20GB, lalu klik **Next** dan **Finish**.  

## Langkah 4: Jalankan Virtual Machine

Di jendela utama VirtualBox, pilih VM yang baru saja kita buat. Klik tombol **Start** untuk menjalankan virtual VM.

Setelah VM dimulai, jika kita mengaktifkan EFI, maka kita akan melihat tampilan seperti ini. Pilih opsi paling atas dan tekan Enter, atau tunggu sekitar 15 detik untuk melanjutkan secara otomatis.

![](/articles/panduan-instalasi-arch-linux/06.png)

Setelah berhasil booting, kita akan melihat tampilan seperti ini, tanpa adanya GUI seperti pada instalasi distribusi lain. Hanya ada terminal yang kelihatan sangat menyeramkan.

![](/articles/panduan-instalasi-arch-linux/07.png)

Sebelum memulai proses instalasi, mari kita uji terlebih dahulu apakah koneksi internet kita sudah berfungsi dengan baik.

![](/articles/panduan-instalasi-arch-linux/08.png)

## Langkah 5: Mempartisi disk

Jalankan perintah ``lsblk`` atau ``fdisk -l`` untuk melihat daftar disk dan partisi yang tersedia.

![](/articles/panduan-instalasi-arch-linux/09.png)
![](/articles/panduan-instalasi-arch-linux/10.png)

Tentukan disk yang akan kita partisi, misalnya ``/dev/vda``, ``/dev/sda`` atau ``/dev/nvme0n1``. Disk yang akan saya partisi adalah ``/dev/sda``.

Untuk mempartisi disk, jalankan perintah ``fdisk`` dengan argument disk yang akan dipartisi. Kita dapat mengetik ``m`` dan tekan Enter untuk melihat bantuan tentang perintah yang tersedia.

Untuk membuat GPT partition style, jalankan perintah ``g``. Lalu kita akan membuat partisi baru untuk BOOT dengan cara menjalankan perintah ``n``, untuk nomor partisi dan sektor awal kita biarkan default dengan menekan Enter, dan untuk sektor terakhir kita berikan ``+512M`` untuk membuat partisi ini berukuran 512MB.

![](/articles/panduan-instalasi-arch-linux/11.png)

Selanjutnya, kita akan membuat partisi baru untuk ROOT dengan cara menjalankan perintah ``n``, lalu membiarkan semuanya pada default dengan menekan Enter tiga kali sehingga partisi ROOT ini akan menggunakan seluruh sisa ruang yang tersedia. Lalu jalankan perintah ``w`` untuk write, atau simpan perubahan, pastikan semuanya sudah terkonfirmasi dengan benar.

![](/articles/panduan-instalasi-arch-linux/12.png)

Jalankan perintah ``lsblk`` atau ``fdisk -l`` untuk mengkonfirmasi bahwa disk telah berhasil terpatisi.

![](/articles/panduan-instalasi-arch-linux/13.png)

## Langkah 6: Memformat sistem berkas partisi disk

Selanjutnya, kita akan memformat partisi BOOT dengan sistem berkas tipe FAT32 dengan cara menjalankan perintah ``mkfs.vfat`` atau ``mkfs.fat -F 32``.

![](/articles/panduan-instalasi-arch-linux/14.png)

Lalu kita akan memformat partisi ROOT dengan sistem berkas tipe ext4 dengan cara menjalankan perintah ``mkfs.ext4``.

![](/articles/panduan-instalasi-arch-linux/15.png)

## Langkah 7: Menginstal Arch Linux

Sekarang adalah proses yang paling dinantikan dan menyenangkan. Kita mount terlebih dahulu partisi ROOT kita ke /mnt.

![](/articles/panduan-instalasi-arch-linux/16.png)

Jalankan perintah pacstrap dan install paket yang diperlukan yaitu ``base``, ``linux`` dan ``linux-firmware``. Editor teks seperti ``vim`` atau ``nano``. Pemuat boot yaitu ``GRUB`` dan ``efibootmgr``. Pengelola jaringan yaitu ``networkmanager``. Proses ini akan memakan waktu yang cukup lama tergantung dengan kecepatan internet dan performa dari perangkat keras.

![](/articles/panduan-instalasi-arch-linux/17.png)

#### Langkah 8: Mengkonfigurasi sistem Arch yang telah terpasang

Pertama, kita akan membuat ``fstab`` yang digunakan untuk menentukan bagaimana partisi disk harus dipasang ke dalam sistem berkas.

![](/articles/panduan-instalasi-arch-linux/18.png)

Lalu, kita pindah root ke sistem Arch yang telah terpasang di ``/mnt``. Kita akan sadar kalau tampilannya agak berubah.


![](/articles/panduan-instalasi-arch-linux/19.png)

Selanjutnya kita akan mengatur zona waktu dengan cara membuat symbolic link dari ``/usr/share/zoneinfo/_Wilayah_/_Kota_`` ke /etc/localtime. Dan buat ``/etc/adjtime`` dengan cara menjalankan ``hwclock --systohc``.

![](/articles/panduan-instalasi-arch-linux/20.png)

Setalah itu edit ``/etc/locale.gen`` menggunakan teks editor seperti vim atau nano, dan hilangkan komentar pada ``en_US.UTF-8 UTF-8`` dan locale UTF-8 lainnya yang diperlukan.

![](/articles/panduan-instalasi-arch-linux/21.png)

Untuk menggunakan vim, arahkan kursor ke ``#`` dengan menggunakan hjkl atau arrow keys dan tekan ``x`` untuk menghapus karakter yang ada di kursor. Ketik ``:wq`` untuk write dan quit atau simpan dan keluar.

![](/articles/panduan-instalasi-arch-linux/22.png)

Janlankan ``locale-gen`` untuk membuat locale.

![](/articles/panduan-instalasi-arch-linux/23.png)

Atur locale default untuk sistem dengan menambahkan ``LANG=_locale_`` ke ``/etc/locale.conf``.

![](/articles/panduan-instalasi-arch-linux/24.png)

Selanjutnya kita berikan nama untuk sistem kita dengan memasukkan nama yang kita inginkan ke ``/etc/hostname``.

![](/articles/panduan-instalasi-arch-linux/25.png)

Lalu kita bikin password untuk user root. Saat mengetik password, karakter yang kita ketik tidak akan terlihat di layar, jadi pastikan kita mengetiknya dengan hati-hati.

![](/articles/panduan-instalasi-arch-linux/26.png)

Setelah itu kita akan menyalakan pengelola jaringan.

![](/articles/panduan-instalasi-arch-linux/27.png)

Dan yang terakhir, kita akan memasang pemuat boot.

![](/articles/panduan-instalasi-arch-linux/28.png)

Setelah itu kita akan keluar dari lingkungan arch-chroot, unmount semua partisi, dan menyalakan ulang sistem.

![](/articles/panduan-instalasi-arch-linux/29.png)

Setelah sistem booting dan menampilkan prompt login, kita akan diminta untuk memasukkan nama pengguna. Masukkan root untuk nama pengguna dan masukkan password untuk user root yang telah kita buat sebelumnya.

![](/articles/panduan-instalasi-arch-linux/30.png)

Dengan login sebagai user root, kamu siap untuk melanjutkan konfigurasi lebih lanjut atau mulai menggunakan sistem sesuai kebutuhan.

Selamat! Kamu telah berhasil menyelesaikan instalasi Arch Linux dari awal hingga akhir. Proses ini mungkin terlihat menantang pada awalnya, tetapi dengan langkah-langkah yang teliti dan sabar, kamu sekarang memiliki sistem operasi yang cepat, ringan, dan sepenuhnya disesuaikan dengan kebutuhanmu.

Arch Linux menawarkan fleksibilitas dan kontrol penuh atas sistem, yang membuatnya menjadi pilihan favorit bagi pengguna yang ingin memahami dan mengendalikan setiap aspek dari sistem operasi mereka. Jangan lupa untuk terus belajar dan bereksperimen dengan berbagai konfigurasi dan paket yang tersedia di Arch Linux.

Jika kamu mengalami masalah atau butuh bantuan lebih lanjut, kamu bisa mengunjungi [ArchWiki](https://www.blogger.com/u/2/#) untuk dokumentasi lebih lanjut atau bergabung dalam forum untuk berdiskusi dengan pengguna lain.

Selamat menjelajahi dunia Arch Linux dan terima kasih telah membaca artikel ini.
