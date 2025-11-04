// src/Sections/Experience.jsx

//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

// --- KOMPONEN KARTU STATS (Sidebar Kanan) ---
const StatsCard = ({ roles }) => (
    <div className="relative p-4 bg-black/50 border pixel-border-box pixel-border-hover hover:scale-105 ">
        <h3 className="text-lg font-semibold text-cyan-400 font-pixel-title text-center mb-4">
            CAREER STATS
        </h3>
        <ul className="space-y-2 text-lg text-gray-300 font-pixel-body">
            {roles.map((role, index) => (
                <li key={index} className="flex items-center gap-2">
                    <span className="text-cyan-400 font-pixel-title text-sm">▶</span>
                    {role}
                </li>
            ))}
        </ul>
    </div>
)

// --- KOMPONEN ITEM LOG (List Kiri) ---
const ExperienceLogItem = ({ role, company, duration, description, isFirst }) => (
 <motion.div
  className={`relative p-4 ${isFirst ? 'border-t-0' : 'border-t'} border-cyan-400/30`}
  initial={{ opacity: 0, x: -20 }} 
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
 >
  <h4 className="text-xl font-bold text-cyan-400 font-pixel-title mb-1">{role}</h4>
  <p className="mb-4 text-md text-gray-400 font-pixel-body">{company} | {duration}</p>
    
  <ul className="list-none text-gray-300 font-pixel-body space-y-2 pl-4">
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
 const experiences = [
  {
   role: 'IoT System Developer (Intern)',
   company: 'Future Tech Solutions',
   duration: 'Jan 2024 - Jul 2024',
   description: [
    'Developed a real-time monitoring dashboard using React and Firebase.',
    'Optimized data transmission protocol on ESP32 microcontrollers, reducing power consumption by 20%.',
    'Integrated environmental sensors into the existing IoT network for data collection.',
   ],
  },
  {
   role: 'Web Developer Freelancer',
   company: 'Client Projects',
   duration: '2023 - Sekarang',
   description: [
    'Built and deployed responsive landing pages using Laravel and Tailwind CSS.',
    'Managed version control (Git) and deployment workflows for client websites.',
   ],
  },
    {
      role: 'Computer Engineering Student',
      company: 'University of Malang',
      duration: '2022 - Sekarang',
      description: [
        'Focused on Embedded Systems, Data Structures, and AI/ML principles.',
        'Active member of the Robotics Club and IoT Research Group.',
      ],
    },
 ]

  const roles = experiences.map(exp => exp.role);

 return (
    // ✅ MODIFIED: Wrapper luar DIHAPUS. Padding disesuaikan.
  <motion.section
   id={id}
   className="relative px-0 py-12 scroll-mt-24" // Padding disesuaikan
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.8 }}
   viewport={{ once: true }}
  >
    <div className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-auto bg-white/10 pixel-border-box">
   <div className="relative z-10">
    <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl font-pixel-title">
     My Experience
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-2 bg-black/50 border pixel-border-box ">
                {experiences.map((exp, index) => (
                    <ExperienceLogItem 
                        key={index} 
                        {...exp} 
                        isFirst={index === 0} 
                    />
                ))}
            </div>

            <div className="md:col-span-1">
                <StatsCard roles={roles} />
            </div>

    </div>
   </div>
   </div>
  </motion.section>
 )
}