---

````markdown
# NextSkill Backend - Express & Supabase Web Blog Article CRUD

**Repository**: https://github.com/fathirVII/Nextskill-backend-express-and-supabase-web-blog-article-curd

---

## 📘 Deskripsi

Proyek ini adalah backend sederhana menggunakan **Express.js** dan **Supabase** (PostgreSQL) untuk fitur **CRUD artikel blog** (Create, Read, Update, Delete). Cocok untuk latihan full‑stack development di kategori artikel berbasis web.

---

## 🧩 Fitur

- **Create**: Tambah artikel baru dengan judul, konten, author, dan kategori (enum: `DIY`, `Tutorial`, `Recipes`, `News`).
- **Read**: Ambil semua artikel atau cari berdasarkan `id`.
- **Update**: Edit artikel exist berdasarkan ID.
- **Delete**: Hapus artikel berdasarkan ID.
- **Validasi**: Validasi input pada `category` agar sesuai nilai enum.
- **Error Handling**: Middleware untuk tingkatan error global dan pengecekan rute tidak ditemukan (404).

---

## 🛠️ Teknologi yang Digunakan

| Teknologi            | Deskripsi |
|----------------------|-----------|
| Node.js & Express.js | Framework backend utama |
| Supabase             | Database PostgreSQL dan API client |
| dotenv               | Manajemen konfigurasi environment |
| CORS                 | Konfigurasi akses antara origin |
| Nodemon (dev)        | Auto-reload server selama development |

---

## 🔧 Instalasi & Konfigurasi

1. **Clone repo**:
   ```bash
   git clone https://github.com/fathirVII/Nextskill-backend-express-and-supabase-web-blog-article-curd.git
   cd Nextskill-backend-express-and-supabase-web-blog-article-curd
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Buat file environment**:

   ```bash
   cp .env.example .env
   ```

   Lalu isi:

   ```
   SUPABASE_URL=https://...
   SUPABASE_KEY=...
   PORT=3000
   ```

4. **Jalankan server**:

   ```bash
   npm run dev
   ```

   atau:

   ```bash
   node server.js
   ```

---

## 🚀 Endpoints API

Base URL: `http://localhost:3000/api/articles`

| Endpoint | Method | Deskripsi                     |
| -------- | ------ | ----------------------------- |
| `/`      | GET    | Ambil semua artikel           |
| `/:id`   | GET    | Ambil artikel berdasarkan ID  |
| `/`      | POST   | Buat artikel baru             |
| `/:id`   | PUT    | Update artikel berdasarkan ID |
| `/:id`   | DELETE | Hapus artikel berdasarkan ID  |

Contoh payload `POST /api/articles`:

```json
{
  "title": "Contoh Artikel",
  "content": "Isi artikel di sini...",
  "author": "Nama Penulis",
  "category": "DIY"
}
```

---

## ✅ Validasi `category`

Perlu dipastikan bahwa `category` adalah salah satu dari nilai yang valid:

* `DIY`
* `Tutorial`
* `Recipes`
* `News`

Jika tidak valid, server akan menolak dengan HTTP **400 Bad Request** dan pesan kesalahan.

---

## ⚙️ Struktur Proyek

```
├── controller/         # Handler logika CRUD
├── router/             # Definisi route & linking URL
├── utils/db.js         # Inisialisasi Supabase client
├── middlewares/        # Error handler 404 & global error
├── server.js           # Entry point utama
├── .env.example        # Template konfigurasi
└── package.json
```

---

## 📌 Catatan

* Pastikan kamu telah membuat tipe enum `article_category` di Supabase:

  ```sql
  CREATE TYPE article_category AS ENUM ('DIY','Tutorial','Recipes','News');
  ```

* Frontend (React/Vue) bisa memanfaatkan API ini untuk membuat front-end yang interaktif.

---

## 🔜 Rencana Pengembangan Selanjutnya

* Tambahkan **user authentication** (JWT)
* Implement **pagination** & **filtering** untuk list artikel
* Tambahkan kolom **image URL** atau **file upload**
* Buat endpoint khusus **tag** atau **Kategori dinamis**

---


