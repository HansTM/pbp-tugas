▶ [Tugas 4](README.tugas-4.md) • [Tugas 5](README.tugas-5.md) • **[Tugas 6](README.md)**

# Tugas 6: JavaScript dan AJAX

[![Status deployment](https://img.shields.io/github/workflow/status/HansTM/pbp-tugas/Deployment?logo=github-actions&logoColor=white)](https://github.com/HansTM/pbp-tugas/actions/workflows/deployment.yml)
[![Aplikasi Heroku](https://img.shields.io/badge/heroku-hanstm--pbp--tugas-blue?logo=heroku&logoColor=white)](https://hanstm-pbp-tugas.herokuapp.com/todolist)
[![Tugas 6](https://img.shields.io/badge/assignment-Tugas%206-blue)](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-6)

Selamat datang! Repositori ini digunakan untuk [Tugas 6](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-6) dalam mata kuliah Pemrograman Berbasis Platform. 

Aplikasi Heroku: https://hanstm-pbp-tugas.herokuapp.com/todolist

## Routing

- [/](https://hanstm-pbp-tugas.herokuapp.com/todolist): Halaman utama, berisi *to-do list*.
- [/login](https://hanstm-pbp-tugas.herokuapp.com/todolist/login): Untuk masuk ke dalam akun.
- [/register](https://hanstm-pbp-tugas.herokuapp.com/todolist/register): Untuk mendaftar akun baru.
- [/create-task](https://hanstm-pbp-tugas.herokuapp.com/todolist/create-task): Untuk membuat task baru. (usang karena AJAX)
- [/old](https://hanstm-pbp-tugas.herokuapp.com/todolist/old): Halaman utama lama, menggunakan templat Django. (usang karena AJAX)

## Checklist

- [x] Mengubah tugas 4 yang telah dibuat sebelumnya menjadi menggunakan AJAX.
  - [x] AJAX GET
    - [x] Buatlah _view_ baru yang mengembalikan seluruh data task dalam bentuk JSON.
    - [x] Buatlah _path_ `/todolist/json` yang mengarah ke _view_ yang baru kamu buat.
    - [x] Lakukan pengambilan task menggunakan AJAX GET.
  - [x] AJAX POST
    - [x] Buatlah sebuah tombol `Add Task` yang membuka sebuah modal dengan form untuk menambahkan task.
    - [x] Buatlah _view_ baru untuk menambahkan task baru ke dalam _database_.
    - [x] Buatlah _path_ `/todolist/add` yang mengarah ke _view_ yang baru kamu buat.
    - [x] Hubungkan form yang telah kamu buat di dalam modal kamu ke _path_ `/todolist/add`
    - [x] Tutup modal setelah penambahan task telah berhasil dilakukan.
    - [x] Lakukan _refresh_ pada halaman utama secara asinkronus untuk menampilkan _list_ terbaru tanpa _reload_ seluruh _page_.
### Bonus

- [x] Menambahkan fungsionalitas hapus dengan menggunakan AJAX DELETE.
  - [x] Buatlah kolom baru pada task dengan tombol Hapus.
  - [x] Buatlah _view_ baru yang menghapus task dengan ID tertentu.
  - [x] Buatlah _path_ `/todolist/delete/{id}` yang menerima ID dari _path_ dan meneruskannya kepada _view_.
  - [x] Buatlah fungsi JavaScript yang memanggil _endpoint_ penghapusan task.
  - [x] Lakukan _refresh_ pada halaman utama secara asinkronus untuk menampilkan _list_ terbaru tanpa _reload_ seluruh _page_.

## Jawaban

- Jelaskan perbedaan antara _asynchronous programming_ dengan _synchronous programming_.

*Synchronous programming* adalah suatu paradigma saat hanya satu program yang dapat berjalan pada suatu waktu, sehingga program lainnya perlu menunggu program sebelumnya selesai sebelum dapat menjalankannya. 

*Asynchronous programming* adalah suatu paradigma saat beberapa program dapat berjalan sekaligus, tanpa menunggu program lain untuk selesai. 

- Dalam penerapan JavaScript dan AJAX, terdapat penerapan paradigma _Event-Driven Programming_. Jelaskan maksud dari paradigma tersebut dan sebutkan salah satu contoh penerapannya pada tugas ini.

*Event-driven programming* adalah suatu paradigma saat program berjalan pada suatu *event*, atau dalam kata lain, suatu program bereaksi terhadap suatu *event*.

Contoh sederhananya adalah *event* klik pada saat tombol buka modal tambah diklik, dengan reaksi membuka modal yang berkaitan. 

```js
addOpenModalNavEl.addEventListener("click", event => {
	openModal()
})
```

- Jelaskan penerapan _asynchronous programming_ pada AJAX.

Kita tahu bahwa terdapat beberapa kasus ketika program membutuhkan waktu untuk memproses suatu bagian kode kita, salah satunya untuk mendapatkan data dengan menggunakan AJAX. Kita jugatahu bahwa meminta data dari web tidak secepat perhitungan-perhitungan yang dapat kita lakukan di komputer kita, lantaran pasti ada suatu jeda pada *client* dengan *server*. Bisa saja sang *engine* menghentikan programnya sembari menunggu *request* AJAX-nya selesai, namun ini dapat menganggu, apalagi jika permintaaannya membutuhkan waktu yang lebih lama. 

Dengan begitu, di JavaScript, paradigma *asynchronous programming* dapat digunakan. Pada JavaScript, biasanya akan ada sebuah *function* yang diberikan kepada suatu bagian kode untuk dijalankan ketika semuanya selesai. *Function* ini biasa disebut dengan *callback* (*function*). 

Contohnya ini, saat `$.getJSON()` digunakan untuk mengambil suatu data.

```js
$.getJSON("test.json", data => {
  console.log("Inilah caranya-- maksud saya, callbacknya!")
  // Lakukan hal lain dengan datanya...
})
```

Terdapat juga cara lain untuk meng-*handle* bagian-bagian kode yang perlu ditunggu ini, dengan [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Prinsipnya hal ini sama dengan cara sebelumnya, namun Promise telah terstandardisasi, yang memudahkan kita untuk membuat *callback* yang dibutuhkan. 

Contohnya, saat [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) digunakan, API tersebut akan mengeluarkan sebuah Promise yang dapat kita berikan *callback* yang diperlukan.

```js
fetch("test.json")
  // Ubah hasil menjadi JSON. 
  // request.json() juga menghasilkan sebuah Promise!
  .then(request => request.json())
  // Callback untuk datanya.
  .then(data => {
      console.log("Inilah caranya-- maksud saya, callbacknya!")
    // Lakukan hal lain dengan datanya...
  })
```

- Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.

1. Implementasi `views.py` (dan `urls.py`) yang dibutuhkan untuk setiap panggilan AJAX yang akan dilakukan (get JSON, add, done, undone, delete).
2. Ambil daftar dari server dengan AJAX, lalu munculkan ke layar, dibandingkan dengan menggunakan *templates* Django. Buat juga sehingga daftar diambil di setiap perubahan/interaksi yang berkaitan.
3. Ubah form sehingga form-form tersebut mengirim sebuah *request* dengan JavaScript, yang tidak akan membutuhkan *refresh*. Jangan lupa mengambil daftar dari server dengan AJAX.
4. Ubah bagian-bagian yang relevan yang berkaitan dengan data todo list, sehingga program menggunakan AJAX dibandingkan dengan menggunakan *templates* Django.
5. Untuk Tailwind CSS: Implementasi modal dari awal, lalu pindahkan form dari `create-task.html` ke dalam modal tersebut.