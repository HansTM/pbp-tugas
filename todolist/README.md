# Tugas 5: Pengimplementasian Form dan Autentikasi Menggunakan Django

[![Status deployment](https://img.shields.io/github/workflow/status/HansTM/pbp-tugas/Deployment?logo=github-actions&logoColor=white)](https://github.com/HansTM/pbp-tugas/actions/workflows/deployment.yml)
[![Aplikasi Heroku](https://img.shields.io/badge/heroku-hanstm--pbp--tugas-blue?logo=heroku&logoColor=white)](https://hanstm-pbp-tugas.herokuapp.com/todolist)
[![Tugas 5](https://img.shields.io/badge/assignment-Tugas%205-blue)](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-5)

Selamat datang! Repositori ini digunakan untuk [Tugas 5](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-5) dalam mata kuliah Pemrograman Berbasis Platform. 

Aplikasi Heroku: https://hanstm-pbp-tugas.herokuapp.com/todolist

## Routing

- [/](https://hanstm-pbp-tugas.herokuapp.com/todolist): Halaman utama, berisi *to-do list*.
- [/create-task](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk membuat task baru.
- [/login](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk masuk ke dalam akun.
- [/register](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk mendaftar akun baru.

## Checklist

- [x] Kustomisasi templat HTML yang telah dibuat pada [Tugas 4](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-4) dengan menggunakan CSS atau CSS _framework_ (seperti Bootstrap, Tailwind, Bulma) dengan ketentuan sebagai berikut:
   - [x] Kustomisasi templat untuk halaman _login_, _register_, dan _create-task_ semenarik mungkin.
   - [x] Kustomisasi halaman utama _todo list_ menggunakan _cards_. (Satu _card_ mengandung satu _task_).
- [x] Membuat keempat halaman yang dikustomisasi menjadi _responsive_.

### Bonus

- [x] Menambahkan efek ketika melakukan _hover_ pada _cards_ di halaman utama _todolist_.

## Jawaban

1. Apa perbedaan dari Inline, Internal, dan External CSS? Apa saja kelebihan dan kekurangan dari masing-masing _style_?

- **External CSS** dibuat di sebuah file `.css` baru, lalu digunakan dengan menambahkan elemen `<link>` ke dalam suatu halaman.
  
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
  ```
  
  External CSS memudahkan kita untuk menggunakan suatu *stylesheet* dengan satu sumber yang sama. Ini membuat gaya dalam semua (atau sebagian besar) halaman di suatu situs/bagian dapat menjadi konsisten, sekaligus dapat mengurangi jumlah/ukuran *request*, karena (a) suatu *stylesheet* dapat di-*cache* dan (b) kita tidak perlu menyalin isi *stylesheet*-nya dalam halaman-halaman yang kita miliki. 

  Kekurangannya adalah *style* yang terdefinisi dapat saja teralu umum, sehingga diperlukan pengaturan-pengaturan tambahan (dalam external, internal, atau inline CSS) untuk menyesuaikan gayanya jika diperlukan.

- **Internal CSS** dibuat di dalam sebuah elemen `<style>`, sehingga hanya berlaku pada satu halaman yang dibuat.
  
  ```html
  <style>
    .p { margin-bottom: 1rem }
  </style>
  ```

  Internal CSS dapat digunakan untuk membuat gaya semua elemen pada suatu halaman menjadi konsisten. Namun, jika ada yang menginginkan semua halaman memiliki gaya yang sama, isi yang sama itu perlu disalin ke dalam semua halaman yang diperlukan, yang akan menambah ukuran *request*-nya. Jikalau begitu, mending menggunakan external CSS. 

- **Inline CSS** dibuat di dalam properti `style=""` dalam sebuah elemen, sehingga hanya berlakuk pada elemen yang dimaksud.
  
  ```html
  <p style="margin-bottom: 1rem"></p>
  ```

  Inline CSS dapat digunakan untuk mengatur gaya dalam suatu elemen. Pastinya pengaturan dengan cara ini lumayan terbatas, sehingga untuk mengubah gaya secara serentak, lebih baik menggunakan cara lain.

2. Jelaskan tag HTML5 yang kamu ketahui.

Ada banyak tag HTML5 yang tersedia. Beberapa elemen yang sering saya pakai adalah sebagai berikut.

- `<p>`, untuk suatu teks paragraf. Walaupun begitu, elemen-elemen lain seperti foto dapat juga ditambahkan.
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, untuk judul/subjudul (*heading*).
- `<a>`, untuk membuat *link* dari suatu URL, yang biasanya sebuah halaman lain.
- `<div>`, untuk digunakan untuk isi bagian web (*content division*).
- `<span>`, untuk digunakan untuk membagi bagian dalam suatu tulisan (*content span*). Serupa dengan `<div>`, namun `<span>` adalah elemen *inline*, dan `<div>` adalah elemen tingkat *block*.
- `<table>` (tabel keseluruhan), `<tr>` (baris/*row*), `<th>` (kepala/*head*), `<td>` (data), untuk membuat sebuah tabel.
- `<main>`, untuk bagian utama dalam suatu halamn
- `<article>`, untuk bagian halaman yang dapat berdiri sendiri, seperti sebuah postingan blog, atau postingan forum, dan lain-lain.
- `<aside>`, untuk bagian halaman web yang hanya sedikit berkaitan pada konten utama suatu halaman.
- `<header>`, untuk bagian kepala pada suatu halaman.
- `<footer>`, untuk bagian kaki pada suatu halaman.
- `<nav>`, untuk bagian navigasi pada suatu halaman.
- `<ul>` dan `<ol>`, untuk daftar tak terurut (unordered) dan daftar terurut (ordered). `<li>` digunakan untuk tiap butir pada daftar.
- `<head>`, untuk menyimpan identitas, informasi, atau metadata dari suatu halaman.
- `<link>`, untuk menghubungan suatu sumber daya, seperti *stylesheet*.
- `<meta>`, untuk metadata suatu halaman.
- `<script>`, untuk menjalankan *script* yang dibutuhkan.
- `<title>`, untuk memberi judul pada suatu halaman. Ini yang muncul pada nama *tab* atau *window* saat dibuka.
- `<style>`, untuk memberikan gaya CSS secara *internal* (internal CSS).

3. Jelaskan tipe-tipe CSS selector yang kamu ketahui.

Ada banyak *CSS selector* yang tersedia. Beberapa yang sering saya pakai adalah sebagai berikut.

- *Universal selector*, yang akan memilih semua elemen.  
  Contohnya adalah `*`,  yang akan memilih semua elemen.
- *Type selector*, yang akan memili semua elemen dengan tipe/nama node yang sama.  
  Contohnya adalah `p`, yang akan memilih semua elemen `<p>`.
- *Class selector*, yang akan memilih semua elemen dengan kelas (*class*) yang sesuai, yang dibuat properti `class` di suatu elemen.  
  Contohnya adalah `.red`, yang akan memilih semua elemen dengan kelas `red`.
- *ID selector*, yang akan memilih semua elemen dengan ID yang sesuai, yang dibuat dari properti `id` di suatu elemen.  
  Contohnya adalah `#header`, yang akan memilih semua elemen dengan ID `header`. Idealnya, satu ID hanya ada pada satu elemen.
- *Attribute selector*, yang akan memilih semua elemen yang memiliki suatu atribut (dengan value yang sesuai, jika perlu).  
  Contohnya adalah `[disabled]`, yang akan memilih semua elemen dengan atribut `disabled`.
- *Selector list*, yang akan menggabungkan beberapa elemen untuk satu aturan.  
  Contohnya adalah `div, p`, yang akan memilih semua elemen `<div>` dan `<p>`.
- *Descendant combinator*, yang akan memilih elemen yang merupakan keturunan oleh (atau di dalam) elemen pertamanya.  
  Contohnya adalah `div p`, yang akan memilih semua elemen `<p>` yang di dalam elemen `<div>`.
- *Child combinator*, yang akan memilih leemen yang merupakan keturunan langsung/anak dari suatu elemen.
  Contohnya adalah `div > p`, hang akan memilih semua elemen `<p>` yang merupakan anak dari elemen `<div>`

4. Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.

- Implementasi [Tailwind CSS](https://tailwindcss.com/) di Django menggunakan [Django-Tailwind](https://django-tailwind.readthedocs.io/en/latest/installation.html). Hapus juga *stylesheet* yang lama agar tidak mengganggu implementasi Tailwind CSS tersebut.
- Rombak semua template untuk penggayaan.
  - Buat form secara manual, dibanding menggunakan `.as_table`.
  - Ubah tiap butir pada to-do list agar membentuk kartu-kartu.
  - Pisahkan navbar agar sama di beberapa halaman.
  - Percantik halaman dengan warna, *spacing* (*margin*/*padding*), animasi, border, dsb dengan menggunakan kelas-kelas yang ditawarkan oleh Tailwind CSS.
- Atur Django-Tailwind agar dapat mem-*build* Tailwind CSS saat *deployment*. ([referensi](https://www.khanna.law/blog/deploying-django-tailwind-to-heroku))