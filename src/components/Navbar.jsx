import React from 'react';
import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // On first load, set theme from localStorage or system
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0e1628]/95 text-white backdrop-blur-lg px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#" className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 tracking-wide">
      <img src={logo} alt="Logo" className="h-10 sm:h-10 lg:h-18" />

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-10 text-sm sm:text-base lg:text-lg font-medium">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">Projects</a>
        
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">Contact</a>

          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="text-slate-300 hover:text-cyan-400 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-slate-300 hover:text-cyan-400 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1628] border-t border-slate-700 py-4 space-y-2 px-4 sm:px-6">
          <a href="#about" className="block text-base text-slate-300 hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="block text-base text-slate-300 hover:text-cyan-400 transition">Projects</a>
          
          <a href="#contact" className="block text-base text-slate-300 hover:text-cyan-400 transition">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
