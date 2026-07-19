// src/data/projects.js
// Data proyek dipusatkan di sini supaya bisa dipakai oleh grid "Discovered
// Artifacts" (Projects.jsx) maupun halaman case study (ProjectDetail.jsx).

import preview1 from '../assets/Preview1.png'
import preview2 from '../assets/Preview2.png'

export const projects = [
  {
    slug: 'pcb-custom-malang',
    title: 'Artifact 1',
    desc: 'PCB Custom Malang',
    preview: preview1,
    link: 'https://pcb-custom-malang.web.app/',
    techStack: ['React', 'Tailwind CSS', 'Netlify', 'Vercel'],
    problem:
      'PCB Custom Malang butuh kehadiran online untuk menampilkan layanan pembuatan PCB custom mereka ke calon klien, tanpa harus bergantung pada komunikasi manual satu-per-satu.',
    solution:
      'Dibangun sebagai situs showcase responsif menggunakan React dan Tailwind CSS, di-hosting di Netlify dengan pipeline CI/CD lewat GitHub dan Vercel untuk deployment yang cepat dan konsisten.',
    learnings:
      'Pengalaman pertama menangani proyek client-facing dari awal sampai deploy — mulai dari memahami kebutuhan bisnis klien, menerjemahkannya ke struktur halaman yang jelas, sampai mengatur alur deployment otomatis.',
  },
  {
    slug: 'bootstrap-portfolio',
    title: 'Artifact 2',
    desc: 'Bootstrap  Portfolio',
    preview: preview2,
    link: 'https://zxaviers.github.io/Personal/',
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    problem:
      'Sebelum situs React/Tailwind ini ada, saya butuh portofolio online sederhana untuk mulai menampilkan diri dan proyek-proyek awal saat masih belajar web development.',
    solution:
      'Portofolio pertama dibangun dengan HTML, CSS, dan Bootstrap, di-deploy lewat GitHub Pages — fokus ke fundamental: layout responsif, struktur konten yang rapi, dan proses deploy sederhana tanpa tooling build yang rumit.',
    learnings:
      'Titik awal untuk memahami dasar-dasar pengembangan web sebelum pindah ke framework modern seperti React — jadi pengingat seberapa jauh sudah berkembang sejak proyek ini dibuat.',
  },
  {
    title: 'Artifact 3',
    desc: 'Coming Soon...',
    comingSoon: true,
  },
]
