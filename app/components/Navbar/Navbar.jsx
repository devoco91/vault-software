'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0
            setIsScrolled(scrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown)
    }

    const handleMouseLeave = () => {
        setOpenDropdown(null)
    }

    const toggleMobileDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        setOpenDropdown(null)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setOpenDropdown(null)
    }

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between '>
                {/* Logo - Left side */}
                <Link href="/" className="flex items-center group">
                    <div className="relative overflow-hidden rounded-lg  transition-all duration-300 group-hover:bg-white/10">
                        <img
                            src="/VAULT-removebg-preview.png"
                            alt="Vault Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'h-16 w-auto' : 'h-20 w-auto'
                                } group-hover:scale-105 filter brightness-0 invert`}
                        />
                    </div>
                </Link>

                {/* Desktop Nav-links - Center */}
                <nav className='hidden lg:flex flex-1 justify-center'>
                    <ul className='flex items-center space-x-8'>
                        <li>
                            <Link href="/" className='relative text-white hover:text-blue-600 transition-colors before:content-[""] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/services" className='relative text-white hover:text-blue-600 transition-colors before:content-[""] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full'>
                                Services
                            </Link>
                        </li>

                        <li className="relative group"
                            onMouseEnter={() => handleMouseEnter('industries')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className='relative flex items-center space-x-1 text-white hover:text-blue-600 transition-colors before:content-[""] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full cursor-pointer'>
                                Industries
                                <svg className='w-4 h-4 transition-transform duration-200' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                </svg>
                            </span>

                            <div className={`absolute top-full left-0 mt-1 bg-black border border-gray-700 shadow-lg rounded-md py-2 w-56 z-50 transition-all duration-300 transform ${openDropdown === 'industries'
                                ? 'opacity-100 translate-y-0 visible'
                                : 'opacity-0 -translate-y-2 invisible'
                                }`}>
                                <Link href="/industries/saas" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>SAAS</Link>
                                <Link href="/industries/ecommerce" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Retail/Ecommerce</Link>
                                <Link href="/industries/fintech" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Fintech</Link>
                                <Link href="/industries/healthcare" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Healthcare</Link>
                                <Link href="/industries/education" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Education</Link>
                                <Link href="/industries/logistics" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Logistics</Link>
                                <Link href="/industries/real-estate" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Real Estate</Link>
                                <Link href="/industries/banking" className='block px-4 py-2 hover:bg-gray-800 text-white hover:text-blue-400 transition-colors'>Banking</Link>
                            </div>
                        </li>

                        <li>
                            <Link href="/company" className='relative text-white hover:text-blue-600 transition-colors before:content-[""] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full'>
                                Company
                            </Link>
                        </li>

                        <li>
                            <Link href="/casestudies" className='relative text-white hover:text-blue-600 transition-colors before:content-[""] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full'>
                                Case Studies
                            </Link>
                        </li>

                    </ul>
                </nav>

                {/* Desktop CTA button - Right side */}
                <Link href="/getIntouch" className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Get In Touch
                </Link>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-white p-2"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 transform ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0 visible max-h-screen'
                : 'opacity-0 -translate-y-4 invisible max-h-0 overflow-hidden'
                }`}>
                <div className="px-4 py-4 space-y-4">
                    <Link
                        href="/"
                        className="block text-white hover:text-blue-600 transition-colors py-2"
                        onClick={closeMobileMenu}
                    >
                        Home
                    </Link>

                    <li>
                        <Link href="/services" className='relative text-white hover:text-blue-600 transition-colors before:content-[""] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full'>
                            Services
                        </Link>
                    </li>

                    {/* Industries Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleMobileDropdown('industries')}
                            className="flex items-center justify-between w-full text-white hover:text-blue-600 transition-colors py-2"
                        >
                            Industries
                            <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'industries' ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                        </button>
                        <div className={`pl-4 space-y-2 mt-2 transition-all duration-300 overflow-hidden ${openDropdown === 'industries' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <Link href="/industries/saas" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>SAAS</Link>
                            <Link href="/industries/retail" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>Retail/Ecommerce</Link>
                            <Link href="/industries/fintech" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>Fintech</Link>
                            <Link href="/industries/healthcare" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>HealthCare</Link>
                            <Link href="/industries/education" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>Education</Link>
                            <Link href="/industries/logistics" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>Logistics</Link>
                            <Link href="/industries/real-estate" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>Real Estate</Link>
                            <Link href="/industries/banking" className="block text-gray-300 hover:text-white py-1 transition-colors" onClick={closeMobileMenu}>Banking</Link>
                        </div>
                    </div>

                    <Link
                        href="/company"
                        className="block text-white hover:text-blue-600 transition-colors py-2"
                        onClick={closeMobileMenu}
                    >
                        Company
                    </Link>

                    <Link
                        href="/case-studies"
                        className="block text-white hover:text-blue-600 transition-colors py-2"
                        onClick={closeMobileMenu}
                    >
                        Case Studies
                    </Link>


                    {/* Mobile CTA button */}
                    <Link
                        href="/getIntouch"
                        className="block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center mt-4"
                        onClick={closeMobileMenu}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar