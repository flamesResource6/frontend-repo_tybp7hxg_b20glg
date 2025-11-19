import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Prenotazione() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefono: '',
    check_in: '',
    check_out: '',
    ospiti: 2,
    richieste: ''
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/prenotazioni`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          ospiti: Number(form.ospiti)
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Errore durante la prenotazione')
      setResult({ ok: true, id: data.id })
      setForm({ nome: '', email: '', telefono: '', check_in: '', check_out: '', ospiti: 2, richieste: '' })
    } catch (err) {
      setResult({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="prenota" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,115,50,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Prenota il tuo soggiorno
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-3 text-orange-100/90"
          >
            Raccontaci le tue date e preferenze: ti risponderemo con una conferma il prima possibile.
          </motion.p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm text-orange-100 mb-1">Nome e cognome</label>
              <input name="nome" value={form.nome} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Es. Marta Rossi" />
            </div>
            <div>
              <label className="block text-sm text-orange-100 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="tuo@email.it" />
            </div>
            <div>
              <label className="block text-sm text-orange-100 mb-1">Telefono</label>
              <input name="telefono" value={form.telefono} onChange={handleChange} className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Opzionale" />
            </div>
            <div>
              <label className="block text-sm text-orange-100 mb-1">Check-in</label>
              <input type="date" name="check_in" value={form.check_in} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm text-orange-100 mb-1">Check-out</label>
              <input type="date" name="check_out" value={form.check_out} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm text-orange-100 mb-1">Ospiti</label>
              <select name="ospiti" value={form.ospiti} onChange={handleChange} className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                {[...Array(12)].map((_, i) => (
                  <option key={i+1} value={i+1} className="text-slate-900">{i+1}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-orange-100 mb-1">Richieste speciali</label>
              <textarea name="richieste" value={form.richieste} onChange={handleChange} rows="4" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Intolleranze, orari di arrivo, celebrazioni..." />
            </div>

            <div className="sm:col-span-2 mt-2 flex items-center gap-4">
              <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(255,110,0,0.35)] hover:bg-orange-500/90 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? 'Invio in corso...' : 'Invia richiesta'}
              </button>
              <AnimatePresence>
                {result && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`text-sm ${result.ok ? 'text-green-300' : 'text-red-300'}`}
                  >
                    {result.ok ? 'Richiesta inviata! Ti scriveremo a breve.' : `Errore: ${result.message}`}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-transparent p-8 backdrop-blur">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-orange-100"
          >
            <h3 className="text-2xl font-bold text-white">Dettagli utili</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>• Check-in: 15:00 - 20:00 • Check-out: entro le 10:30</li>
              <li>• Parcheggio gratuito • Deposito sci e bike</li>
              <li>• Pet friendly su richiesta • Wi-Fi gratuito</li>
              <li>• Piste da sci di Borno e sentieri a pochi minuti</li>
              <li>• Colazione dolce e salata con prodotti locali</li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              {[
                { k: 'Altitudine', v: '912 m' },
                { k: 'Camere', v: '6 accoglienti' },
                { k: 'Stagione', v: 'Tutto l\'anno' },
                { k: 'Lingue', v: 'IT • EN' },
              ].map((x, i) => (
                <motion.div
                  key={x.k}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-xs text-orange-200/80">{x.k}</div>
                  <div className="text-lg font-semibold text-white">{x.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
