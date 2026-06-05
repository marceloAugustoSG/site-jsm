import SeoSchema from './components/SeoSchema'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
