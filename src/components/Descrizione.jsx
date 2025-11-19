import { motion } from 'framer-motion'
import { Mountain, Coffee, Snowflake, Trees } from 'lucide-react'

export default function Descrizione() {
  const items = [
    {
      icon: <Mountain className="w-6 h-6" />, 
      title: 'Tra le Alpi Orobie',
      text: 'Svegliati con il profumo dei boschi di abeti e il silenzio della valle. Siamo a due passi dalle piste da sci e dai sentieri panoramici.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Colazione artigianale',
      text: 'Torte fatte in casa, miele locale e caffè caldo. Ogni mattina, un piccolo rito per iniziare la giornata con energia.'
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: 'Atmosfere d\'inverno',
      text: 'Camere accoglienti con piumoni soffici, legno caldo e luci soffuse: l\'inverno qui è poesia.'
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: 'Estate in natura',
      text: 'Escursioni tra malghe e torrenti, bike park a Borno, tramonti color arancio che tingono le cime.'
    }
  ]

  return (
    <section id="scopri" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,115,50,0.10),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Borno, un incanto tra montagne e leggende
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-4 text-center text-orange-100/90 max-w-3xl mx-auto"
        >
          Il nostro B&B è un nido raccolto nel cuore della Valle Camonica. Tra mulattiere, borghi in pietra e il respiro dei boschi, 
          ti aspetta un\'esperienza fatta di calma, ospitalità sincera e panorami che tolgono il fiato.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition group"
            >
              <div className="text-orange-300 group-hover:scale-110 transition origin-left">{it.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-orange-100/90 text-sm">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
