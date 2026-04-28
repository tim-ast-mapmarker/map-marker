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

## Day 4 – 26 April 2026  
**Tema: Interaktif Map Feature**

**Progress by: Arifa Muthmainnah**

- Menambahkan fitur klik pada peta untuk menambahkan marker baru
- Marker yang ditambahkan tersimpan dalam state (dynamic marker)
- Menambahkan 5 marker tambahan dengan kategori acak:
  - MAN 1 Banda Aceh (Edukasi)
  - Suzuya Mall Banda Aceh (Belanja)
  - RSU Cempaka Lima (Kesehatan)
  - Kantor DPRK Banda Aceh (Pemerintahan)
  - Museum Aceh (Wisata)
- Menambahkan simbol lingkaran area pada legend untuk USK agar konsisten dengan tampilan peta


**Progress by: Shania Rizka Anindia**

- Membuat UI Button Panel untuk kontrol interaktif
- Menambahkan tombol Clear Marker
- Menyempurnakan tata letak panel agar tidak menutupi peta
- Styling konsisten dengan legend dan popup


**Progress by: Thahira Riska**

- Menambahkan fitur delete marker per item
- Menambahkan tombol "Hapus Marker" pada popup marker hasil klik
- Menggunakan metode filtering state untuk menghapus marker tertentu
- Menambahkan styling tombol delete agar user-friendly
- Melakukan review dan approval PR fitur interaktif

---

## Day 5 – 27 April 2026
**Tema: Filtering & UI Enhancement**

**Progress by: Arifa Muthmainnah**

- Membuat branch feature-arifa-day5
- Menambahkan fitur filter kategori marker
- Membuat dropdown "Filter Kategori"
- Mengimplementasikan filtering menggunakan state activeCategory
- Marker (static & dynamic) hanya tampil sesuai kategori yang dipilih
- Menambahkan opsi "Semua Kategori"
- Melakukan testing agar filter bekerja realtime tanpa reload
- PR berhasil direview dan merge ke branch main

**Progress by: Shania Rizka Anindia**

- Membuat branch feature-shania-day5
- Mendesain ulang tampilan panel kontrol (map-controls)
- Menambahkan styling modern (blur, shadow, spacing, rounded corner)
- Mengatur ulang posisi tombol agar tidak menutupi zoom control
- Menyelaraskan warna tombol dengan tema aplikasi
- Menambahkan marker counter (Total Marker)
- PR berhasil direview dan merge ke branch main

**Progress by: Thahira Riska**

- Membuat branch feature-thahira-day5
- Menambahkan fitur toggle Area USK (show/hide Circle)
- Menggunakan state showUSK
- Memastikan legend tetap sinkron dengan tampilan peta
- Refactoring minor untuk meningkatkan readability kode
- Melakukan review dan approval PR tim
- Merge ke branch main

---

## Day 6 – 28 April 2026
**Tema: Edit Marker & Improvement Stability**

**Progress by: Arifa Muthmainnah**

- Membuat branch feature-arifa-day6
- Menambahkan fitur edit marker untuk dynamic marker
- Mengganti sistem prompt menjadi form input di dalam popup
    - Menambahkan input:
    - Nama tempat
    - Alamat
    - Kategori (dropdown)
- Menambahkan tombol "Save"
- State langsung ter-update tanpa refresh
PR berhasil direview dan merge ke branch main

Progress by: Shania Rizka Anindia

- Membuat branch feature-shania-day6
- Menyempurnakan styling form dalam popup
- Menambahkan focus state dan border highlight
- Menyempurnakan hover effect tombol
- Menyesuaikan warna dropdown agar konsisten dengan tema
- Memastikan UI tetap responsif PR berhasil direview dan merge ke branch main

Progress by: Thahira Riska

- Membuat branch feature-thahira-day6
- Memperbaiki bug delete marker agar re-render konsisten
- Menambahkan mekanisme force re-render pada state update
- Memastikan popup tertutup otomatis setelah marker dihapus
- Cleanup kode yang tidak digunakan
- Final testing seluruh fitur:
- Add marker
    - Edit marker
    - Delete marker
   - Delete all marker
    - Filter kategori
    - Toggle Area USK
- Melakukan final review & approval PR
- Merge ke branch main

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