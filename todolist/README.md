▶ [Tugas 4](README.tugas-4.md) • [Tugas 5](README.tugas-5.md) • **[Tugas 6](README.md)**

# Tugas 6: JavaScript dan AJAX

[![Status deployment](https://img.shields.io/github/workflow/status/HansTM/pbp-tugas/Deployment?logo=github-actions&logoColor=white)](https://github.com/HansTM/pbp-tugas/actions/workflows/deployment.yml)
[![Aplikasi Heroku](https://img.shields.io/badge/heroku-hanstm--pbp--tugas-blue?logo=heroku&logoColor=white)](https://hanstm-pbp-tugas.herokuapp.com/todolist)
[![Tugas 6](https://img.shields.io/badge/assignment-Tugas%206-blue)](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-6)

Selamat datang! Repositori ini digunakan untuk [Tugas 6](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-6) dalam mata kuliah Pemrograman Berbasis Platform. 

Aplikasi Heroku: https://hanstm-pbp-tugas.herokuapp.com/todolist

## Routing

- [/](https://hanstm-pbp-tugas.herokuapp.com/todolist): Halaman utama, berisi *to-do list*.
- [/create-task](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk membuat task baru.
- [/login](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk masuk ke dalam akun.
- [/register](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk mendaftar akun baru.

## Checklist

- [ ] Mengubah tugas 4 yang telah dibuat sebelumnya menjadi menggunakan AJAX.
  - [ ] AJAX GET
    - [ ] Buatlah _view_ baru yang mengembalikan seluruh data task dalam bentuk JSON.
    - [ ] Buatlah _path_ `/todolist/json` yang mengarah ke _view_ yang baru kamu buat.
    - [ ] Lakukan pengambilan task menggunakan AJAX GET.
  - [ ] AJAX POST
    - [ ] Buatlah sebuah tombol `Add Task` yang membuka sebuah modal dengan form untuk menambahkan task.
    - [ ] Buatlah _view_ baru untuk menambahkan task baru ke dalam _database_.
    - [ ] Buatlah _path_ `/todolist/add` yang mengarah ke _view_ yang baru kamu buat.
    - [ ] Hubungkan form yang telah kamu buat di dalam modal kamu ke _path_ `/todolist/add`
    - [ ] Tutup modal setelah penambahan task telah berhasil dilakukan.
    - [ ] Lakukan _refresh_ pada halaman utama secara asinkronus untuk menampilkan _list_ terbaru tanpa _reload_ seluruh _page_.
### Bonus

- [ ] Menambahkan fungsionalitas hapus dengan menggunakan AJAX DELETE.
  - [ ] Buatlah kolom baru pada task dengan tombol Hapus.
  - [ ] Buatlah _view_ baru yang menghapus task dengan ID tertentu.
  - [ ] Buatlah _path_ `/todolist/delete/{id}` yang menerima ID dari _path_ dan meneruskannya kepada _view_.
  - [ ] Buatlah fungsi JavaScript yang memanggil _endpoint_ penghapusan task.
  - [ ] Lakukan _refresh_ pada halaman utama secara asinkronus untuk menampilkan _list_ terbaru tanpa _reload_ seluruh _page_.

## Jawaban

- Jelaskan perbedaan antara _asynchronous programming_ dengan _synchronous programming_.
- Dalam penerapan JavaScript dan AJAX, terdapat penerapan paradigma _Event-Driven Programming_. Jelaskan maksud dari paradigma tersebut dan sebutkan salah satu contoh penerapannya pada tugas ini.
- Jelaskan penerapan _asynchronous programming_ pada AJAX.
- Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.
