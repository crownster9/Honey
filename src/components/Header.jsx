import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', href: '#honey' },
  { label: 'About', href: '#story' },
  { label: 'Our process', href: '#craft' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">✦</span>
        HIVE &amp; HARVEST
      </a>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} aria-controls="primary-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      <nav id="primary-navigation" className={` opacity-90 w-full site-nav ${isMenuOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
        {links.map(({ label, href }) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
      </nav>
      <a className="header-shop-button" href="#honey" onClick={closeMenu}>Shop Honey</a>
    </header>
  )
}
