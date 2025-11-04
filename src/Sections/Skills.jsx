// src/Sections/Skills.jsx

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function SkillCard({ title, skills, id }) {
  return (
    <motion.div
      id={id}
      className="p-6 transition-all duration-300 shadow-xl bg-white/10 pixel-border-box pixel-border-hover scroll-mt-24 hover:scale-105" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
       
        
        {/* ✅ NEW: Status Bar / Title Box inspired by Raid Party */}
        <div className="mb-4 p-2 ">
            <h3 className="text-l font-semibold text-cyan-400 font-pixel-title text-center "> 
                {title}
            </h3>
        </div>
        
        <ul className="space-y-2 text-lg text-gray-300 font-pixel-body">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              {/* ✅ MODIFIED: Use a subtle pixel character instead of circle */}
              <span className="text-cyan-400 font-pixel-title text-sm">▶</span>
              {skill}
            </li>
          ))}
        </ul>
      
    </motion.div>
  )
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-7xl bg-white/10 pixel-border-box">
        
        {/* WRAPPER UTAMA UNTUK KONTEN SECTION */}
        <div className="relative z-20"> 
          <motion.div
            className="relative mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white font-pixel-title">
              Skills & Technologies
            </h2>

            <p className="max-w-2xl mx-auto mt-8 text-xl text-white/90 font-pixel-body">
              Combining hardware and software — I build IoT systems, connected
              devices, and modern web applications with a focus on clean design,
              real-time data, and responsive interfaces.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              title="🌐 Web Development"
              skills={[
                'React ',
                'Laravel / PHP',
                'Tailwind CSS / Bootstrap',
                'Firebase',
              ]}
            />

            <SkillCard
              title="⚙️ IoT & Embedded Systems"
              skills={[
                'Arduino / ESP32',
                'Sensor Integration',
                'C / C++ Programming',
              ]}
            />

            <SkillCard
              title="🧰 Tools & Workflow"
              skills={[
                'VS Code / Git',
                'Adobe Photoshop',
                'Blender (Basic)',
                '3D Modeling (Basic)',
              ]}
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}