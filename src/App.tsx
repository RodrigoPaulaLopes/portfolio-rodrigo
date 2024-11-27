import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {


  return (

    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>

  )
}

export default App
