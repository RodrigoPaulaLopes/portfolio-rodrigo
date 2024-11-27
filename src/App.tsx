import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"

function App() {


  return (

    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>

  )
}

export default App
