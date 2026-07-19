// src/data/devlogPosts.js
// Entri devlog disimpan sebagai array sederhana dulu (bukan file Markdown),
// sesuai kesepakatan awal. Dua entri di bawah ini adalah PLACEHOLDER —
// tulisan draf berdasarkan proyek yang sudah ada di situs, silakan diedit
// atau diganti dengan tulisan Anda sendiri kapan saja.

export const devlogPosts = [
  {
    slug: 'membangun-secret-level',
    title: 'Membangun Secret Level: Game Tersembunyi di Portofolio Ini',
    date: '2026-07-13',
    excerpt:
      'Catatan singkat soal kenapa dan bagaimana saya menyelipkan mini-game bergaya Space Invaders di dalam situs portofolio ini, lengkap dengan Kaboom.js.',
    tags: ['Web Dev', 'React', 'Game Dev'],
    content: [
      'Salah satu bagian paling menyenangkan dari membangun ulang portofolio ini adalah section "Secret Level" — mini-game sederhana bergaya Space Invaders yang bisa dimainkan langsung di browser.',
      'Game ini dibangun dengan Kaboom.js, sebuah library game engine ringan berbasis JavaScript. Karena library ini cukup besar dan cuma relevan untuk pengunjung desktop, saya memuatnya secara dynamic import — jadi pengunjung mobile sama sekali tidak mengunduhnya, dan halaman utama tetap ringan.',
      'Tantangan terbesarnya justru bukan di logika game-nya, tapi di detail kecil: Kaboom secara default mencuri fokus keyboard begitu game siap, yang bikin browser otomatis scroll ke section itu setiap kali halaman dibuka. Butuh sedikit riset untuk sadar ini soal `canvas.focus()` bawaan library, bukan bug di kode sendiri.',
      '(Tulisan ini masih draf — ceritakan versi lengkapnya di sini: apa yang bikin Anda kepikiran nambahin easter egg ini, dan apa rencana selanjutnya untuk Secret Level.)',
    ],
  },
  {
    slug: 'sistem-alignment-esp32',
    title: 'Dari Sensor ke Layar: Sistem Alignment Kendaraan Berbasis ESP32',
    date: '2026-07-13',
    excerpt:
      'Sekilas proses membangun sistem simulasi toe & camber kendaraan menggunakan ESP32, ADS1115, dan MPU6050 — proyek IoT yang jadi bagian dari Mission Log saya.',
    tags: ['IoT', 'ESP32', 'Embedded'],
    content: [
      'Salah satu proyek yang paling banyak mengajarkan saya soal integrasi hardware dan software adalah sistem simulasi alignment kendaraan (toe & camber) berbasis ESP32.',
      'Sistem ini memakai sensor ADS1115 (ADC presisi tinggi) dan MPU6050 (accelerometer + gyroscope) untuk membaca data orientasi, lalu mengirimkannya secara real-time ke aplikasi web berbasis React dan Firebase untuk dipantau dan divisualisasikan.',
      'Bagian yang paling menantang adalah menjaga integrasi sensor tetap stabil dan hemat daya sambil tetap mengirim data secara wireless tanpa banyak delay — kombinasi antara kerja embedded system dan real-time web yang jarang saya temui bersamaan sebelumnya.',
      '(Tulisan ini masih draf — lengkapi dengan detail teknis lebih spesifik: skema wiring, kendala kalibrasi sensor, atau hasil pengujian yang sudah didapat.)',
    ],
  },
]
