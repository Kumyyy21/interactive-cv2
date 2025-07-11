// === FILE: backend/data.js ===
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika',
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMK 1 Muhammadiyah Yogyakarta',
    major: 'MIPA',
  }
];

const skills = [
  { name: 'Vue.js', level: 'pemula' },
  { name: 'JavaScript', level: 'pemula' },
  { name: 'Tailwind CSS', level: 'pemula' },
  { name: 'Node.js', level: 'pemula' },
  { name: 'Express.js', level: 'pemula' },
  { name: 'PostgreSQL', level: 'pemula' },
  { name: 'Git & GitHub', level: 'pemula' },
  { name: 'HTML5 & CSS3', level: 'pemula' },
];

const projects = [
  {
    title: 'Maha Parfume',
    image: 'https://via.placeholder.com/500x300?text=Proyek+1',
    description: 'sebuah website yang mempermudah untuk membeli parfume secara online',
    tech: ['React', 'Express.js', 'MongoDB'],
    link: '#',
  },
{
    "title": "Portofolio Interaktif",
    "description": "Desain dan implementasi situs web portofolio pribadi yang interaktif dan responsif.",
    "tech": ["Vue.js", "Tailwind CSS", "JavaScript"],
    "link": "https://github.com/kumyyy21/interactive-cv"
  },

  {
    title: "CCNA: Introduction to Networks",
    description: "Kursus dasar Cisco yang mengenalkan konsep jaringan komputer dan konfigurasi sederhana menggunakan Cisco Packet Tracer.",
    image: "/ccna-introduction-to-networks (1).png", // Jalur yang benar setelah dipindahkan ke folder public
    tech: ["Cisco Packet Tracer"],
    link: "https://www.credly.com/badges/01a07f95-cc68-451d-9ca8-649344b8034f/public_url"
  }
];

module.exports = { educationHistory, skills, projects };