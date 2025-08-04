'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-black text-white w-full py-20 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {/* Logo and Description */}
        <section>
          <Link href="/" className="flex items-center group">
            <div>
              <Image
                src="/VAULT-removebg-preview.png"
                alt="Vault Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Vault is your trusted partner for industry-focused software solutions, tailored to drive innovation and growth.
          </p>
        </section>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: 'SAAS', path: '/industries/saas' },
              { label: 'Retail/Ecommerce', path: '/industries/retail' },
              { label: 'Fintech', path: '/industries/fintech' },
              { label: 'Healthcare', path: '/industries/healthcare' },
              { label: 'Education', path: '/industries/education' },
              { label: 'Logistics', path: '/industries/logistics' },
              { label: 'Esports/Gaming', path: '/industries/esports' },
              { label: 'Real Estate', path: '/industries/real-estate' },
              { label: 'Automobile', path: '/industries/automobile' },
              { label: 'Manufacturing', path: '/industries/manufacturing' },
              { label: 'Banking', path: '/industries/banking' },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Information */}
        <nav aria-label="Information">
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">About Us</Link></li>
            <li><Link href="/" className="hover:text-white">Terms of Use</Link></li>
            <li><Link href="/" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Email: <a href="mailto:contact@vault.com" className="hover:text-white">contact@vault.com</a></li>
            <li>Phone: <a href="tel:+2348000000000" className="hover:text-white">+234 800 000 0000</a></li>
            <li>Address: 123 Vault Street, Lagos, Nigeria</li>
            <li>Support: <a href="mailto:support@vault.com" className="hover:text-white">support@vault.com</a></li>
          </ul>
        </address>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Vault. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
