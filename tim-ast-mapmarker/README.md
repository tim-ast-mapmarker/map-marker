# Tim AST Map Marker

## 👥 Anggota Kelompok
- Arifa Muthmainnah (2308107010012)
- Shania Rizka Anindia (2308107010024)
- Thahira Riska (2308107010067)

Project peta interaktif menggunakan React.js dan Leaflet.

---

## Day 1 – 23 April 2026  
**Progress by: Arifa Muthmainnah**

- Setup project menggunakan React + Vite
- Install dependency:
  - leaflet
  - react-leaflet
- Berhasil menampilkan peta OpenStreetMap
- Struktur project berhasil dibuat dan dijalankan dengan `npm run dev`


**Progress by: Shania Rizka Anindia**

- Membuat branch feature-shania
- Membuat folder src/components
- Membuat komponen MapView.jsx
- Memisahkan logic peta dari App.jsx (struktur modular)
- Menambahkan styling dasar pada App.css
- Project berhasil dijalankan tanpa error


**Progress by: Thahira Riska**

- Melakukan review dan approval PR Shania
- Merge perubahan ke branch main
- Sinkronisasi repository lokal dengan main
- Membersihkan file default yang tidak digunakan
- Memastikan struktur project lebih rapi

---

## Day 2 – 24 April 2026  
**Progress by: Arifa Muthmainnah**

- Membuat branch `feature-arifa-day2`
- Menambahkan 1 static area (Circle) pada peta
- Lokasi: Universitas Syiah Kuala (Banda Aceh)
- Menambahkan popup informasi lokasi
- Menambahkan legend sebagai keterangan simbol pada peta
- Melakukan testing tampilan dan memastikan tidak ada error
- PR berhasil direview dan merge ke branch `main`


**Progress by: Thahira Riska**

- Membuat branch `feature-thahira-day2`
- Mengimplementasikan multiple marker menggunakan array `locations`
- Menambahkan 4 lokasi di Banda Aceh:
  - Masjid Raya Baiturrahman
  - Museum Tsunami Aceh
  - Taman Sari (Bustanussalatin)
  - (1 lokasi tambahan sesuai revisi tim)
- Setiap marker memiliki popup berisi:
  - Nama lokasi
  - Alamat lengkap
- Tetap mempertahankan area USK menggunakan `Circle`
- Menggunakan metode `.map()` untuk rendering agar scalable
- PR berhasil direview dan merge ke branch `main`

**Progress by: Shania Rizka Anindia**

- Membuat branch `feature-shania-day2`
- Meningkatkan tampilan popup
- Menambahkan class `popup-card`
- Menambahkan styling (shadow, border radius, spacing)
- Membuat tampilan popup lebih rapi dan profesional
- PR berhasil direview dan merge ke branch `main`

---

## Day 3 – 25 April 2026  
**Progress by: Arifa Muthmainnah**

- Membuat branch `feature-arifa-day3`
- Menambahkan 5 lokasi umum baru di Banda Aceh
- Setiap marker memiliki nama dan alamat lengkap
- Popup sudah mengikuti styling terbaru
- Struktur array tetap modular dan rapi
- PR berhasil direview dan merge ke branch `main`


**Progress by: Shania Rizka Anindia**

- Membuat branch `feature-shania-day3`
- Menambahkan kategori pada setiap lokasi:
  - wisata
  - edukasi
  - pemerintahan
  - kesehatan
  - belanja
  - layanan
- Mengimplementasikan custom Leaflet icon berdasarkan kategori
- Membuat variasi warna marker agar lebih mudah dibedakan
- Meningkatkan visual clarity pada peta
- PR berhasil direview dan merge ke branch `main`


**Progress by: Thahira Riska**

- Membuat branch `feature-thahira-day3`
- Memindahkan data marker ke file `locations.json`
- Mengimpor data JSON ke `MapView.jsx`
- Menghilangkan hardcoded data dalam komponen
- Membuat struktur kode lebih terpisah, rapi, dan maintainable
- PR berhasil direview dan merge ke branch `main`

---
---

## Tech Stack
- React.js
- Vite
- Leaflet
- React Leaflet

---

## Cara Menjalankan Project

```bash
npm install
npm run dev