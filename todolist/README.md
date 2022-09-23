# Tugas 4: Pengimplementasian Form dan Autentikasi Menggunakan Django

[![Status deployment](https://img.shields.io/github/workflow/status/HansTM/pbp-tugas/Deployment?logo=github-actions&logoColor=white)](https://github.com/HansTM/pbp-tugas/actions/workflows/deployment.yml)
[![Aplikasi Heroku](https://img.shields.io/badge/heroku-hanstm--pbp--tugas-blue?logo=heroku&logoColor=white)](https://hanstm-pbp-tugas.herokuapp.com/todolist)
[![Tugas 3](https://img.shields.io/badge/assignment-Tugas%204-blue)](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-4)

Selamat datang! Repositori ini digunakan untuk [Tugas 4](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-4) dalam mata kuliah Pemrograman Berbasis Platform. 

Aplikasi Heroku: https://hanstm-pbp-tugas.herokuapp.com/todolist

## Routing

TODO

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
- [ ] Membuat **dua** akun pengguna dan **tiga** _dummy data_ menggunakan model `Task` pada akun masing-masing di situs web Heroku.

### Bonus

- [ ] Tambahkan atribut `is_finished` pada model `Task` (dengan _default value_ `False`) dan buatlah dua kolom baru pada tabel _task_ yang berisi status penyelesaian _task_ dan tombol untuk mengubah status penyelesaian suatu _task_ menjadi `Selesai` atau `Belum Selesai`.
- [ ] Tambahkan kolom baru pada tabel _task_ yang berisi tombol untuk menghapus suatu _task_.

## Jawaban

### Pertanyaan

1. Apa kegunaan `{% csrf_token %}` pada elemen `<form>`? Apa yang terjadi apabila tidak ada potongan kode tersebut pada elemen `<form>`?
2. Apakah kita dapat membuat elemen `<form>` secara manual (tanpa menggunakan _generator_ seperti `{{ form.as_table }}`)? Jelaskan secara gambaran besar bagaimana cara membuat `<form>` secara manual.
3. Jelaskan proses alur data dari submisi yang dilakukan oleh pengguna melalui HTML form, penyimpanan data pada _database_, hingga munculnya data yang telah disimpan pada _template_ HTML.
4. Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.
