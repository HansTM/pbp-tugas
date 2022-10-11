▶ **[Tugas 4](README.tugas-4.md)** • [Tugas 5](README.tugas-5.md) • [Tugas 6](README.md)

# Tugas 4: Pengimplementasian Form dan Autentikasi Menggunakan Django

[![Status deployment](https://img.shields.io/github/workflow/status/HansTM/pbp-tugas/Deployment?logo=github-actions&logoColor=white)](https://github.com/HansTM/pbp-tugas/actions/workflows/deployment.yml)
[![Aplikasi Heroku](https://img.shields.io/badge/heroku-hanstm--pbp--tugas-blue?logo=heroku&logoColor=white)](https://hanstm-pbp-tugas.herokuapp.com/todolist)
[![Tugas 4](https://img.shields.io/badge/assignment-Tugas%204-blue)](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-4)

Selamat datang! Repositori ini digunakan untuk [Tugas 4](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-4) dalam mata kuliah Pemrograman Berbasis Platform. 

Aplikasi Heroku: https://hanstm-pbp-tugas.herokuapp.com/todolist

## Routing

- [/](https://hanstm-pbp-tugas.herokuapp.com/todolist): Halaman utama, berisi *to-do list*.
- [/create-task](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk membuat task baru.
- [/login](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk masuk ke dalam akun.
- [/register](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk mendaftar akun baru.

## Checklist

- [x] Membuat suatu aplikasi baru bernama `todolist` di proyek tugas Django yang sudah digunakan sebelumnya.
- [x] Menambahkan _path_ `todolist` sehingga pengguna dapat mengakses http://localhost:8000/todolist.
- [x] Membuat sebuah model `Task` yang memiliki atribut sebagai berikut:
  - [x] `user` untuk menghubungkan _task_ dengan pengguna yang membuat _task tersebut_.
  - [x] `date` untuk mendeskripsikan tanggal pembuatan _task_.
  - [x] `title` untuk mendeskripsikan judul _task_.
- [x] `description` untuk mendeskripsikan deskripsi _task_.
- [x] Mengimplementasikan form registrasi, _login_, dan _logout_ agar pengguna dapat menggunakan `todolist` dengan baik.
- [x] Membuat halaman utama `todolist` yang memuat _username_ pengguna, tombol `Tambah Task Baru`, tombol _logout_, serta tabel berisi tanggal pembuatan _task_, judul _task_, dan deskripsi _task_.
- [x] Membuat halaman form untuk pembuatan _task_. Data yang perlu dimasukkan pengguna hanyalah judul _task_ dan deskripsi _task_.
- [x] Membuat _routing_ sehingga beberapa fungsi dapat diakses melalui URL berikut:
  - [x] http://localhost:8000/todolist berisi halaman utama yang memuat tabel _task_.
  - [x] http://localhost:8000/todolist/login berisi form _login_.
  - [x] http://localhost:8000/todolist/register berisi form registrasi akun.
  - [x] http://localhost:8000/todolist/create-task berisi form pembuatan _task_.
  - [x] http://localhost:8000/todolist/logout berisi mekanisme _logout_.
- [x] Melakukan _deployment_ ke Heroku terhadap aplikasi yang sudah kamu buat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
- [x] Membuat **dua** akun pengguna dan **tiga** _dummy data_ menggunakan model `Task` pada akun masing-masing di situs web Heroku.

### Bonus

- [x] Tambahkan atribut `is_finished` pada model `Task` (dengan _default value_ `False`) dan buatlah dua kolom baru pada tabel _task_ yang berisi status penyelesaian _task_ dan tombol untuk mengubah status penyelesaian suatu _task_ menjadi `Selesai` atau `Belum Selesai`.
- [x] Tambahkan kolom baru pada tabel _task_ yang berisi tombol untuk menghapus suatu _task_.

## Jawaban

### Pertanyaan

1. Apa kegunaan `{% csrf_token %}` pada elemen `<form>`? Apa yang terjadi apabila tidak ada potongan kode tersebut pada elemen `<form>`?

`csrf_token` digunakan untuk menangkal *cross-site request forgery*, yang merupakan suatu serangan/*exploit* di mana suatu situs yang berbeda (domain) membuat *request* atau mengirim perintah atas nama pengguna pada suatu situs target dengan peramban web yang dimilikinya. 

Pada konteks situs web dengan *form*, suatu *request* POST dapat dikirim dari mana saja kepada suatu situs dengan *form* tersebut, dan karena bentuk *request*-nya bisa ditebak (seperti apa saja yang dikirim), *request* tersebut dapat melakukan sesuatu yang berhubungan dengan situs tersebut atas nama penggunanya.

Dengan token yang diberikan oleh `csrf_token` (ada alasan kenapa token ini tidak dapat diketahui dari domain mana saja, ada hubungannya dengan teknologi yang ada pada peramban web, seperti CORS), suatu server dapat mengirim suatu *form* yang ia berikan pada saat itu, dan nantinya akan memperoleh *form* yang ia berikan itu sebelumnya. Dalam kata lain, suatu server dapat percaya bahwa request *POST* yang diberikan adalah benar dari form yang ia telah berikan sebelumnya.

Ini adalah salah satu cara untuk menangkal CSRF. Ada banyak lagi cara-cara untuk menangkalnya yang tidak akan dijelaskan pada bagian ini.

2. Apakah kita dapat membuat elemen `<form>` secara manual (tanpa menggunakan _generator_ seperti `{{ form.as_table }}`)? Jelaskan secara gambaran besar bagaimana cara membuat `<form>` secara manual.

Bisa saja.

- Pada templat, buatlah sebuah form yang akan mengirim sebuah *request* POST. Jika mau, gunakan `name` yang sesuai dengan *form* yang didefinisi di `forms.py`.
- Pada `views.py`, tangani *request* POST yang diterima. Jika meggunakan `name` yang sesuai, *form* yang didefinisi di `forms.py` dapat digunakan. Jika tidak, sesuaikan dengan model database yang terdefinisi. Lakukan manipulasi (CRUD) yang diperlukan pada database sesuai dengan parameter yang diberikan pada *request* POST tersebut.

3. Jelaskan proses alur data dari submisi yang dilakukan oleh pengguna melalui HTML *form*, penyimpanan data pada _database_, hingga munculnya data yang telah disimpan pada _template_ HTML.

- View membaca *request* dari client.
- View mendapatkan *parameter* dan *value* dari *request* POST tersebut.
- Database dimanipulasi (CRUD) oleh View sesuai yang diprogram.
- View mengambil data terbaru setelah dimanipulasi untuk *template*.
- View mengembalikan hasil *render* dengan *template* dan *context* yang diberikan.

4. Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.

- Buat aplikasi baru dan tambahkan di `settings.py` (`INSTALLED_APPS`) dalam proyek.
- Buat beberapa *template* HTML sesuai kebutuhan.
- Buat model yang digunakan sesuai dengan data yang ada pada `models.py`.
- Jalankan `python manage.py makemigrations` dan `python manage.py migrate`.
- Buat *form* yang dibutuhkan pada `forms.py`.
- Masukkan *form* di dalam *template* HTML, dengan form buatan tangan atau menggunakan `.as_table` dkk.
- Atur fungsi yang digunakan di `views.py`, bersamaan dengan menambahkan *template* HTML dan *form* yang dibutuhkan.
- Tambah `urlpatterns` yang sesuai di dalam `urls.py`.
- Tambah `urls.py` aplikasi ke dalam `urls.py` proyek.
- *Add*, *commit*, dan *push* perubahan yang ada. GitHub Actions akan men-*deploy* aplikasi ke Heroku
- Tambahkan *test data* yang diperlukan.
