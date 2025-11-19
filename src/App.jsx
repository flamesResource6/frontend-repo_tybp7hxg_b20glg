import Hero from './components/Hero'
import Descrizione from './components/Descrizione'
import Prenotazione from './components/Prenotazione'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Descrizione />
      <Prenotazione />
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 py-10 text-center text-orange-100/80">
          © {new Date().getFullYear()} B&B Luna d'Arancio • Borno, Italia — Tutti i diritti riservati
        </div>
      </footer>
    </div>
  )
}

export default App
