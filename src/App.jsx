import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black" >
      <Navbar />
      <Hero />
    </main>
    
  )
}

export default App