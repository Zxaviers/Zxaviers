// src/components/SecretGame.jsx

import { useEffect, useRef, useState } from 'react' // ✅ Import useState
import kaboom from 'kaboom'
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

// 1. Impor aset roket Anda
import playerSprite from '../assets/rocketSatu.png' 

// Impor aset musuh (planet-planet)
import enemySprite1 from '../assets/planetBiru.png'
import enemySprite2 from '../assets/planetMerah.png'
import enemySprite3 from '../assets/planetUnik.png'

// ✅ Hook sederhana untuk mendeteksi perangkat seluler (berdasarkan lebar viewport)
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};


export default function SecretGame({ id }) {
  const canvasRef = useRef(null)
  const isMobile = useIsMobile(); // ✅ Gunakan hook

  useEffect(() => {
    // ✅ Jangan jalankan game di seluler
    if (isMobile) return; 

    // Flag untuk mencegah double-initialization
    let k = null;

    if (canvasRef.current) {
      k = kaboom({
        global: false, 
        canvas: canvasRef.current, 
        width: 800, 
        height: 600, 
        background: [0, 0, 0], 
      })

      // ----- MULAI LOGIKA GAME -----

      k.loadSprite("player", playerSprite);
      k.loadSprite("enemy1", enemySprite1);
      k.loadSprite("enemy2", enemySprite2);
      k.loadSprite("enemy3", enemySprite3);
      const enemySprites = ["enemy1", "enemy2", "enemy3"];

      // Definisikan pola-pola formasi
      const patterns = [
        [1, 3, 5],       // "V" shape
        [5, 3, 1],       // Piramida "mengerucut"
        [3, 5, 3],       // Diamond
        [1, 3, 5, 3, 1], // Diamond besar
        [4, 4, 4],       // Kotak
        [1, 2, 3, 2, 1],
      ];

      // ===== SCENE START (BARU) =====
      k.scene("start", () => {
          k.add([
              k.text("SECRET LEVEL", { size: 64, font: "sans-serif" }),
              k.pos(k.width() / 2, k.height() / 2 - 80),
              k.anchor("center"),
          ]);
          k.add([
              k.text("Press SPACE to Start", { size: 24, font: "sans-serif" }),
              k.pos(k.width() / 2, k.height() / 2 + 20),
              k.anchor("center"),
          ]);
          k.add([
              k.text("Use Arrows to Move, SPACE to Shoot", { size: 16, font: "sans-serif" }),
              k.pos(k.width() / 2, k.height() / 2 + 80),
              k.anchor("center"),
          ]);

          k.onKeyPress("space", () => {
              k.go("main");
          });
      });
      
      

      // ===== SCENE UTAMA (GAME) =====
      k.scene("main", () => {
        let difficulty = {
            speed: 50,
            spawnRate: 10,
            pattern: k.choose(patterns)
        };

        let score = 0;
        const scoreLabel = k.add([
            k.text("Score: 0", { size: 24, font: "sans-serif" }),
            k.pos(20, 20),
            k.fixed(),
        ]);

        const player = k.add([
          k.sprite("player"),
          k.pos(k.width() / 2, k.height() - 64), 
          k.anchor("center"), 
          k.scale(0.4), 
          k.rotate(-61), 
          k.area(), 
          "player", 
        ])

        // ✅ 1. GERAKAN PEMAIN DIPERBAIKI (Mengembalikan kode aman Anda)
        k.onKeyDown("left", () => {
            // Cek jika pemain masih ada DAN di dalam batas
            if (player.exists() && player.pos.x > 40) { 
                player.move(-350, 0) 
            }
        })
        k.onKeyDown("right", () => {
            // Cek jika pemain masih ada DAN di dalam batas
            if (player.exists() && player.pos.x < k.width() - 40) { 
                player.move(350, 0)
            }
        })


        // Tembak (Spasi)
        k.onKeyPress("space", () => {
          k.add([
            k.rect(4, 12), 
            k.pos(player.pos.x, player.pos.y - 70), 
            k.anchor("center"), 
            k.color(0, 255, 255), 
            k.move(90, -900), 
            k.area(), 
            k.offscreen({ destroy: true }),
            "bullet", 
          ])
        })
        
        // FUNGSI SPAWN FORMASI (Diperbarui)
        function spawnWave(pattern, spacingX, spacingY, startY) {
            const rows = pattern.length;
            for (let r = 0; r < rows; r++) {
                const cols = pattern[r]; 
                const gridWidth = (cols - 1) * spacingX;
                const startX = (k.width() - gridWidth) / 2;

                for (let c = 0; c < cols; c++) {
                    const x = startX + c * spacingX;
                    const y = startY + r * spacingY;
                    
                    k.add([
                        k.sprite(k.choose(enemySprites)),
                        k.pos(x, y),
                        k.anchor("center"),
                        k.scale(0.4), 
                        k.move(90, difficulty.speed), // Bergerak lurus ke bawah
                        k.area(),
                        k.offscreen({ destroy: true }), 
                        "enemy",
                    ]);
                }
            }
        }
        
        // LOGIKA SPAWN MUSUH
        const spawnLoop = k.loop(difficulty.spawnRate, () => { 
            spawnWave(difficulty.pattern, 90, 65, -100); 
            difficulty.pattern = k.choose(patterns);
        });

        // LOGIKA TABRAKAN (Dengan Level Up)
        k.onCollide("bullet", "enemy", (bullet, enemy) => {
            k.destroy(bullet); 
            k.destroy(enemy); 
            k.addKaboom(bullet.pos); 
            score += 10;
            scoreLabel.text = "Score: " + score;

            if (score > 0 && score % 100 === 0) {
                k.shake(8);
                difficulty.speed += 20; 
                if (difficulty.spawnRate > 3) {
                    difficulty.spawnRate -= 1.5; 
                    spawnLoop.time = difficulty.spawnRate; 
                }
            }
        });
//eslint-disable-next-line no-unused-vars
        k.onCollide("player", "enemy", (player, enemy) => {
            k.shake(12);
            k.destroy(player);
            spawnLoop.cancel(); 
            k.go("gameover", { finalScore: score }); 
        });

        
      });

      // ===== SCENE GAME OVER =====
      k.scene("gameover", ({ finalScore }) => {
          k.add([
              k.text("GAME OVER", { size: 64, font: "sans-serif" }),
              k.pos(k.width() / 2, k.height() / 2 - 80),
              k.anchor("center"),
          ]);
          k.add([
              k.text("Score: " + finalScore, { size: 40, font: "sans-serif" }),
              k.pos(k.width() / 2, k.height() / 2),
              k.anchor("center"),
          ]);
          k.add([
              k.text("Press SPACE to Replay", { size: 24, font: "sans-serif" }),
              k.pos(k.width() / 2, k.height() / 2 + 80),
              k.anchor("center"),
          ]);

          k.onKeyPress("space", () => {
              k.go("start"); 
          });
      });

      // Mulai game di scene "start"
      k.go("start");
      
      // ----- AKHIR LOGIKA GAME -----
    }

    // ✅ 2. CLEANUP DIPERBAIKI
    return () => {
        if (k && typeof k.destroy === 'function') {
            // k.destroy(); // Ini bisa menyebabkan error jika konteks sudah hilang
        }
    }
  }, [isMobile]) // ✅ Tambahkan isMobile sebagai dependensi

  return (
    <motion.section
      id={id}
      className="relative px-6 py-20 text-center scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-max bg-white/10 pixel-border-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-8 text-3xl font-bold text-center text-white md:text-4xl font-pixel-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Secret Level
        </motion.h2>
        
        {/* ✅ Render Canvas atau Pesan Mobile */}
        {isMobile ? (
          <div 
            className="flex items-center justify-center p-4 text-center bg-black/50"
            // Atur ukuran agar konsisten dengan canvas, tapi responsif
            style={{ width: '800px', height: '600px', maxWidth: '100%', minHeight: '300px' }} 
          >
            <p className="text-xl text-cyan-400 font-pixel-body md:text-2xl">
              This secret level can only be played on a desktop.
            </p>
          </div>
        ) : (
          <canvas 
            ref={canvasRef} 
            className="max-w-full mx-auto border-4 border-cyan-600/50" // ✅ max-w-full
            style={{ imageRendering: 'pixelated' }} 
          ></canvas>
        )}

      </motion.div>
    </motion.section>
  )
}