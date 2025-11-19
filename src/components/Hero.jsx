import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yJBriAlCim5ZFvlc/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for mood */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur text-orange-200 border border-white/20 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              B&B di montagna • Borno, Valle Camonica
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(255,136,0,0.35)]"
            >
              Sotto la Luna d'Arancio, tra le cime di Borno
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="mt-4 text-lg md:text-xl text-orange-100/90"
            >
              Un rifugio intimo, profumato di legno e montagna, dove il tempo rallenta e le stelle sembrano a portata di mano.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#prenota" className="group inline-flex items-center gap-3 rounded-xl bg-orange-500/90 hover:bg-orange-500 text-white px-6 py-3 font-semibold shadow-[0_10px_30px_rgba(255,110,0,0.4)] transition">
                Prenota ora
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#scopri" className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition">
                Scopri di più
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating fireflies */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-orange-300/90 shadow-[0_0_12px_2px_rgba(255,170,90,0.7)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.4, 1],
              scale: [0.6, 1, 0.8, 1],
              x: [0, (Math.random() - 0.5) * 120],
              y: [0, (Math.random() - 0.5) * 160],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </section>
  )
}
