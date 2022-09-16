# Tugas 3: Pengimplementasian Data Delivery Menggunakan Django

[![Status deployment](https://img.shields.io/github/workflow/status/HansTM/pbp-tugas/Deployment?logo=github-actions&logoColor=white)](https://github.com/HansTM/pbp-tugas/actions/workflows/deployment.yml)
[![Aplikasi Heroku](https://img.shields.io/badge/heroku-hanstm--pbp--tugas-blue?logo=heroku&logoColor=white)](https://hanstm-pbp-tugas.herokuapp.com/)
[![Tugas 3](https://img.shields.io/badge/assignment-Tugas%203-blue)](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-3)

Selamat datang! Repositori ini digunakan untuk [Tugas 3](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-3) dalam mata kuliah Pemrograman Berbasis Platform. 

Aplikasi Heroku: https://hanstm-pbp-tugas.herokuapp.com/mywatchlist

## Checklist

- [x] Membuat suatu aplikasi baru bernama `mywatchlist` di proyek Django Tugas 2 pekan lalu
- [x] Menambahkan _path_ `mywatchlist` sehingga pengguna dapat mengakses http://localhost:8000/mywatchlist
- [x] Membuat sebuah model `MyWatchList` yang memiliki atribut sebagai berikut:
    - [x] `watched` untuk mendeskripsikan film tersebut sudah ditonton atau belum
    - [x] `title` untuk mendeskripsikan judul film
    - [x] `rating` untuk mendeskripsikan rating film dalam rentang 1 sampai dengan 5
    - [x] `release_date` untuk mendeskripsikan kapan film dirilis
    - [x] `review` untuk mendeskripsikan _review_ untuk film tersebut
- [x] Menambahkan minimal 10 data untuk objek `MyWatchList` yang sudah dibuat di atas
- [x] Mengimplementasikan sebuah fitur untuk menyajikan data di poin 4 dalam tiga format:
    - [x] HTML
    - [x] XML
    - [x] JSON 
- [x] Membuat _routing_ sehingga data di atas dapat diakses melalui URL:
    - [x] http://localhost:8000/mywatchlist/html untuk mengakses `mywatchlist` dalam format HTML
    - [x] http://localhost:8000/mywatchlist/xml untuk mengakses `mywatchlist` dalam format XML
    - [x] http://localhost:8000/mywatchlist/json untuk mengakses `mywatchlist` dalam format JSON
- [x] Melakukan _deployment_ ke Heroku terhadap aplikasi yang sudah kamu buat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
- [ ] Membuat sebuah `README.md` yang berisi tautan menuju aplikasi Heroku yang sudah kamu _deploy_ serta jawaban dari beberapa pertanyaan berikut:
- [ ] Mengakses tiga URL di poin 6 menggunakan Postman, menangkap _screenshot_, dan menambahkannya ke dalam `README.md`
- [ ] Menambahkan _unit test_ pada `tests.py` untuk menguji bahwa tiga URL di poin 6 dapat mengembalikan respon `HTTP 200 OK`

### Bonus

- [x] Jika jumlah film yang sudah ditonton lebih banyak atau sama dengan jumlah film yang belum ditonton, tampilkan pesan "Selamat, kamu sudah banyak menonton!" dalam bentuk HTML
- [x] Jika jumlah film yang belum ditonton lebih banyak dari jumlah film yang sudah ditonton, tampilkan pesan "Wah, kamu masih sedikit menonton!" dalam bentuk HTML

## Pertanyaan

1. Jelaskan perbedaan antara JSON, XML, dan HTML!

TBA

2. Jelaskan mengapa kita memerlukan _data delivery_ dalam pengimplementasian sebuah platform?

TBA

3. Jelaskan bagaimana cara kamu mengimplementasikan poin 1 sampai dengan 3 di atas.

TBA