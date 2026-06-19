import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const showDarkNavbar = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-luxury glassmorphism-navy bg-brand-navy/95 shadow-xl border-b border-white/5 ${
        isScrolled ? 'py-4' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 group">
          <img
            src="/fevicon.png"
            alt="Akshaya Golden Crust Icon"
            className="h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <img
            src="/Akshaya Golden Crust _ LOGO _ Png - Copy.png"
            alt="Akshaya Golden Crust Text Logo"
            className="h-8 lg:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-subheading text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative py-1 ${
                  isActive ? 'text-brand-gold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {/* Underline Slide Animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                  style={{
                    transformOrigin: 'left',
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="btn-shine inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy font-subheading text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-brand-gold/25 transition-luxury hover:-translate-y-0.5"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-brand-gold p-2 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-brand-navy transition-all duration-500 ease-in-out border-t border-white/5 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-8 py-12 gap-6 h-full justify-between">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-subheading text-xl font-medium tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-brand-gold pl-2 border-l-2 border-brand-gold'
                      : 'text-white/80 pl-0 hover:text-brand-gold hover:pl-2'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mb-12">
            <Link
              to="/contact"
              className="btn-shine w-full text-center py-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy font-subheading font-bold uppercase tracking-wider block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
