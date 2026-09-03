import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import NewsTicker from './components/NewsTicker'
import Gallery from './components/Gallery'
import Cart from './components/Cart'
import About from './components/About'
import Craft from './components/Craft'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const addToCart = () => setCartCount((count) => count + 1)
  return (
    <main>
      <Header />
      <Hero cartCount={cartCount} onAddToCart={addToCart} />
      <NewsTicker />
      <Gallery onAddToCart={addToCart} />
      <Cart cartCount={cartCount} />
      <About />
      <Craft />
      <Contact />
      <Footer />
    </main>
  )
}
