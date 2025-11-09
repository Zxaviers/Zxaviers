// src/Sections/Skills.jsx
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'

/* =================================
  DATA BARU UNTUK SKILL TREE
  =================================
*/
const SKILL_DATA = {
  web: {
    title: '🌐 Web Development',
    skills: [
      { id: 'react', name: 'React', description: 'Building reactive UIs for web applications.', level: 'Proficient', icon: '⚛️', row: 1, col: 2 },
      { id: 'tailwind', name: 'Tailwind', description: 'Rapid styling with utility-first CSS.', level: 'Proficient', icon: '🍃', row: 2, col: 1 },
      { id: 'laravel', name: 'Laravel', description: 'Server-side logic with PHP framework.', level: 'Familiar', icon: '🐘', row: 2, col: 3 },
      { id: 'firebase', name: 'Firebase', description: 'Real-time DB, Auth, & Hosting.', level: 'Familiar', icon: '🔥', row: 3, col: 2 },
    ]
  },
  iot: {
    title: '⚙️ IoT & Embedded',
    skills: [
      { id: 'cpp', name: 'C/C++', description: 'Low-level, high-performance programming.', level: 'Proficient', icon: '💻', row: 1, col: 2 },
      { id: 'esp32', name: 'ESP32', description: 'Microcontroller programming.', level: 'Proficient', icon: '🤖', row: 2, col: 1 },
      { id: 'sensors', name: 'Sensors', description: 'Data acquisition and integration.', level: 'Familiar', icon: '🌡️', row: 2, col: 3 },
      { id: 'arduino', name: 'Arduino', description: 'Microcontroller programming.', level: 'Proficient', icon: '📟', row: 3, col: 2 },
    ]
  },
  tools: {
    title: '🧰 Tools & Workflow',
    skills: [
      // ✅ REVISI LAYOUT 'TOOLS' AGAR KONSISTEN (POLA DIAMOND)
      { id: 'git', name: 'Git/VS Code', description: 'Version control & code editing.', level: 'Proficient', icon: '🛠️', row: 1, col: 2 },
      { id: 'ps', name: 'Photoshop', description: 'Pixel art & asset creation.', level: 'Familiar', icon: '🎨', row: 2, col: 1 },
      { id: 'blender', name: 'Blender', description: '3D modeling basics.', level: 'Basic', icon: '🧊', row: 2, col: 3 },
      { id: 'linux', name: 'Linux', description: 'Server management & OS.', level: 'Familiar', icon: '🐧', row: 3, col: 2 },
    ]
  },
};
// Kunci-kunci data (untuk mapping)
const skillCategories = ['web', 'iot', 'tools'];

/* =================================
  KOMPONEN: SkillNode
  =================================
*/
function SkillNode({ skill, onSelect, isSelected }) {
  return (
    <motion.button
      className={`skill-node pixel-border-box pixel-hover-cyan ${isSelected ? 'selected' : ''}`}
      data-level={skill.level}
      style={{
        '--row': skill.row,
        '--col': skill.col,
      }}
      onClick={() => onSelect(skill)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {skill.icon}
    </motion.button>
  );
}

/* =================================
  KOMPONEN: SkillDescription
  =================================
*/
function SkillDescription({ skill }) {
  if (!skill) {
    return (
      <div className="h-full p-4 pixel-border-box" style={{ "--pixel-border-color": "#475569", "--pixel-bg-color": "#0F172A" }}>
        <h4 className="mb-2 text-lg font-bold text-gray-400 font-pixel-title">
          {'> SELECT SKILL'}
        </h4>
          <p className="text-lg text-gray-500 font-pixel-body md:text-xl">
            Select a node on the left to view its details.
          </p>
      </div>
    );
  }

  return (
    <motion.div
      key={skill.id} 
      className="h-full p-4 pixel-border-box"
      style={{ "--pixel-border-color": "#22d3ee", "--pixel-bg-color": "#0F172A" }}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="mb-2 text-xl font-bold text-cyan-400 font-pixel-title">
        {skill.name.toUpperCase()}
      </h4>
      <span 
        className="px-2 py-1 text-xs text-black bg-cyan-400 font-pixel-body"
      >
        Level: {skill.level}
      </span>
      <p className="mt-6 text-lg text-white/90 font-pixel-body md:text-xl">
        {skill.description}
      </p>
    </motion.div>
  );
}


/* =================================
  KOMPONEN UTAMA: Skills
  =================================
*/
export default function Skills({ id }) {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const currentSkillData = SKILL_DATA[activeTab];

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setSelectedSkill(null); 
  };

  return (
    <motion.section
      id={id} 
      className="relative px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white font-pixel-title">
          Skill Tree
        </h2>
      </motion.div>

      <div className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-7xl bg-white/10 pixel-border-box">

        {/* TAB HEADER */}
        {/* ✅ DIPERBARUI: Menambahkan justify-center */}
        <div className="flex flex-wrap justify-center mb-4 border-b pixel-border-box border-white/10">
          {skillCategories.map((key) => (
            <button
              key={key}
              className={`skill-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => handleTabClick(key)}
            >
              {SKILL_DATA[key].title}
            </button>
          ))}
        </div>

        {/* MAIN UI (Grid Kiri, Deskripsi Kanan) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Panel Kiri: Grid Pohon Skill */}
          <div className="md:col-span-2">
            <div className="skill-tree-grid">
            
              {/* ✅ GARIS PENGHUBUNG (BARU) */}
              {/* Garis Vertikal (dari atas ke bawah, di kolom tengah) */}
              <div 
                className="skill-line-v"
                style={{
                  '--col': 2,
                  '--row-start': 1,
                  '--row-end': 4, // Span 3 baris (1 ke 4)
                }}
              ></div>
              {/* Garis Horizontal (dari kiri ke kanan, di baris tengah) */}
              <div 
                className="skill-line-h"
                style={{
                  '--row': 2,
                  '--col-start': 1,
                  '--col-end': 4, // Span 3 kolom (1 ke 4)
                }}
              ></div>

              {/* MAP UNTUK NODE SKILL (Tetap sama) */}
              {currentSkillData.skills.map((skill) => (
                <SkillNode
                  key={skill.id}
                  skill={skill}
                  onSelect={setSelectedSkill}
                  isSelected={selectedSkill?.id === skill.id}
                />
              ))}
            </div>
          </div>

          {/* Panel Kanan: Deskripsi Skill */}
          <div className="md:col-span-1">
            <SkillDescription skill={selectedSkill} />
          </div>

        </div>
      </div>
    </motion.section>
  )
}