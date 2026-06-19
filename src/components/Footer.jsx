import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcon = ({ name, className }) => {
  switch (name) {
    case 'Facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case 'Twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      );
    case 'Instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'Linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/80 border-t border-brand-gold/10">
      {/* Top Banner: Global Trade Trust */}
      <div className="border-b border-brand-gold/10 bg-brand-navy/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8 py-5 md:py-8">
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-4 justify-start">
              <CheckCircle className="h-6 w-6 text-brand-gold shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-base">FSSAI Certified</h4>
                <p className="text-xs text-white/60">Lic. No. 10126004000164</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-start">
              <ShieldCheck className="h-6 w-6 text-brand-gold shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-base">Import Export Registry</h4>
                <p className="text-xs text-white/60">IEC code: ACNFA9200B</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-start">
              <Award className="h-6 w-6 text-brand-gold shrink-0" />
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-base">GST Registered</h4>
                <p className="text-xs text-white/60">GSTIN: 37ACNFA9200B1ZO</p>
              </div>
            </div>
          </div>

          {/* Mobile Auto-Scrolling Marquee */}
          <div className="md:hidden relative flex w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-8 items-center w-max pl-4 pr-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 12,
                repeat: Infinity
              }}
            >
              {[1, 2].map((_, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  <div className="flex items-center gap-3 shrink-0">
                    <CheckCircle className="h-5 w-5 text-brand-gold shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-white tracking-wide text-[11px] uppercase whitespace-nowrap">FSSAI Certified</h4>
                      <p className="text-[9px] text-white/60 whitespace-nowrap">Lic. No. 10126004000164</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <ShieldCheck className="h-5 w-5 text-brand-gold shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-white tracking-wide text-[11px] uppercase whitespace-nowrap">Import Export Registry</h4>
                      <p className="text-[9px] text-white/60 whitespace-nowrap">IEC code: ACNFA9200B</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Award className="h-5 w-5 text-brand-gold shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-white tracking-wide text-[11px] uppercase whitespace-nowrap">GST Registered</h4>
                      <p className="text-[9px] text-white/60 whitespace-nowrap">GSTIN: 37ACNFA9200B1ZO</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Block */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 self-start">
            <img
              src="/Akshaya Golden Crust _ LOGO _ Png.png"
              alt="Akshaya Golden Crust"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg lg:text-xl tracking-wider text-brand-gold">
                AKSHAYA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-white/80 font-subheading -mt-1 uppercase">
                Golden Crust
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-white/60">
            Connecting global markets with premium quality cooking oils, grains, and raw minerals.
            Leveraging 20+ years of trade heritage and reliability.
          </p>
          <div className="flex gap-4">
            {/* Social Icons */}
            {[
              { name: 'Facebook', href: "https://facebook.com" },
              { name: 'Linkedin', href: "https://linkedin.com" },
              { name: 'Twitter', href: "https://twitter.com" },
              { name: 'Instagram', href: "https://instagram.com" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-white/60"
              >
                <SocialIcon name={social.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-brand-gold/15 inline-block">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-gold transition-colors">Our Services</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link>
            </li>
            <li>
              <Link to="/credentials" className="hover:text-brand-gold transition-colors">Credentials</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services & Commodities */}
        <div>
          <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-brand-gold/15 inline-block">
            Commodities
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li className="hover:text-white transition-colors">Sunflower & Olive Oils</li>
            <li className="hover:text-white transition-colors">Premium Basmati Grains</li>
            <li className="hover:text-white transition-colors">Dry Red Chillies</li>
            <li className="hover:text-white transition-colors">Raw Mining Minerals</li>
            <li className="hover:text-white transition-colors">Global Logistics Networks</li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-heading text-white font-semibold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-brand-gold/15 inline-block">
            Registered Office
          </h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed text-white/60">
                #2-46-22/1, 1st Floor, Sri Nagar, Ward No. 5, Kakinada - 533003, Andhrapradesh, India.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="h-4 w-4 text-brand-gold shrink-0" />
              <a href="tel:+919666799999" className="hover:text-brand-gold text-white/60 transition-colors">
                +91 96667 99999
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="h-4 w-4 text-brand-gold shrink-0" />
              <a href="mailto:akshayagoldencrust@gmail.com" className="hover:text-brand-gold text-white/60 transition-colors break-all">
                akshayagoldencrust@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-navy/90 border-t border-white/5 py-6 text-center text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>
            © {currentYear} Akshaya Golden Crust. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/credentials" className="hover:text-brand-gold">IEC Registry</Link>
            <Link to="/credentials" className="hover:text-brand-gold">FSSAI License</Link>
            <a href="/Broucher.pdf" target="_blank" className="hover:text-brand-gold" rel="noreferrer">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
