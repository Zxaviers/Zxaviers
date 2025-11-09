// src/Sections/Experience.jsx
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useTransform, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react' // Import useRef dan useEffect

// ✅ KOMPONEN "DUMB" UNTUK ANGKA (Logika sudah benar)
function AnimatedNumber({ motionValue }) {
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  return <motion.span>{rounded}</motion.span>;
}

// ✅ KOMPONEN "PINTAR" STAT ITEM (Logika sudah benar)
const StatItem = ({ label, value, valueColor = 'text-white', isAnimated = false }) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useSpring(0, {
    damping: 100,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value); 
    }
  }, [isInView, value, motionValue]);

  return (
    <li ref={ref} className="flex items-center justify-between text-lg text-gray-300 md:text-xl font-pixel-body">
      <span className="text-gray-400">{label}:</span>
      <span className={`${valueColor} font-pixel-title text-sm`}>
        {isAnimated ? <AnimatedNumber motionValue={motionValue} /> : value}
      </span>
    </li>
  );
}

// Komponen StatsCard (Tidak berubah)
const StatsCard = () => (
    <div className="relative p-4 border bg-black/50 pixel-border-box pixel-border-hover hover:scale-105 ">
        <h3 className="mb-4 text-lg font-semibold text-center text-cyan-400 font-pixel-title">
            AGENT STATUS
        </h3>
        <ul className="space-y-3">
            <StatItem label="Level" value={20} valueColor="text-cyan-400" isAnimated />
            <StatItem label="Class" value="Engineer" />
            <StatItem label="Planet" value="Earth" />
            <StatItem label="Focus" value="IoT & Web" />
            <StatItem label="Status" value="Online" valueColor="text-green-400" />
        </ul>
    </div>
)

// ✅ --- KOMPONEN BARU UNTUK MENGISI RUANG KOSONG ---
const ActiveObjectiveCard = () => (
  <div className="relative p-4 mt-8 border bg-black/50 pixel-border-box pixel-border-hover">
    <h3 className="mb-4 text-lg font-semibold text-center text-cyan-400 font-pixel-title">
      ACTIVE OBJECTIVE
    </h3>
    {/* Ganti teks ini dengan apa yang sedang Anda pelajari! */}
    <p className="text-lg text-center text-white/90 font-pixel-body md:text-xl">
      Currently mastering web development with React and expanding IOT knowledge.
    </p>
  </div>
)
// ✅ --- AKHIR KOMPONEN BARU ---


// Komponen Log Item (Tidak berubah)
const ExperienceLogItem = ({ role, company, duration, description, isFirst }) => (
 <motion.div
  className={`relative p-4 ${isFirst ? 'border-t-0' : 'border-t'} border-cyan-400/30`}
  initial={{ opacity: 0, x: -20 }} 
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
 >
  <h4 className="mb-1 text-xl font-bold text-cyan-400 font-pixel-title">{role}</h4>
  <p className="mb-4 text-lg text-gray-400 text-md font-pixel-body md:text-xl">{company} | {duration}</p>
    
  <ul className="pl-4 space-y-2 text-lg text-gray-300 list-none font-pixel-body md:text-xl">
   {description.map((item, index) => (
    <li key={index} className="flex items-start gap-2">
            <span className="text-cyan-400 font-pixel-title text-sm mt-0.5"></span>
            {item}
        </li>
   ))}
  </ul>
 </motion.div>
)


// --- KOMPONEN UTAMA EXPERIENCE ---
export default function Experience({ id }) {
 // Data experiences (Tidak berubah)
 const experiences = [
  {
   role: 'IoT & Automation Developer (Student Project)',
   company: 'University of Brawijaya',
   duration: '2024 - Now',
   description: [
    'Designed an IoT-based vehicle alignment system using ESP32, ADS1115, and MPU6050 sensors for toe and camber simulation.',
    'Implemented real-time data monitoring and visualization using React and Firebase.',
    'Focused on power-efficient sensor integration and wireless data acquisition.',
   ],
  },
  {
   role: 'Web Developer',
   company: 'Freelance & Personal Projects',
   duration: '2023 - Now',
   description: [
    'Built and deployed responsive websites using React, Tailwind CSS, and Netlify Hosting.',
   'Developed the website zxaviers.site and pcb-custom-malang.web.app for personal and client showcase.',
   'Managed version control and CI/CD pipelines using GitHub and Vercel.'
   ],
  },
    {
      role: 'Computer Engineering Student',
      company: 'University of Malang',
      duration: '2024 - Now',
      description: [
        'Concentrating on Embedded Systems, AI/ML, and IoT Integration.',
        'Active in faculty events as Staff Perkap (PKKMB FILKOM 2025) and Staff PR (Scholarship Festival 2025).',
        'GPA: 3.73 at the end of Semester 2.',
      ],
    },
 ]


 return (
  <motion.section
   id={id} 
   // ✅ DIPERBARUI: Mengubah px-0 menjadi px-6
   className="relative px-6 py-12 scroll-mt-24"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.8 }}
   viewport={{ once: true }}
  >
    <div className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-auto bg-white/10 pixel-border-box">
   <div className="relative z-10">
    <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl font-pixel-title">
     Mission Log 
    </h2>
    
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* KOLOM KIRI (LOG) */}
            <div className="border md:col-span-2 bg-black/50 pixel-border-box ">
                {experiences.map((exp, index) => (
                    <ExperienceLogItem 
                        key={index} 
                        {...exp} 
                        isFirst={index === 0} 
                    />
                ))}
            </div>

            {/* KOLOM KANAN (STATS & OBJECTIVE) */}
            <div className="md:col-span-1">
                <StatsCard />
                
                {/* ✅ KARTU BARU DITAMBAHKAN DI SINI */}
                <ActiveObjectiveCard />
            </div>

    </div>
   </div>
   </div>
  </motion.section>
 )
}