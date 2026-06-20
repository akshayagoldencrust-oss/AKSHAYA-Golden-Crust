import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Quote, Globe, ShieldCheck, Award, Package, Truck, Settings, Shield, ChevronLeft, ChevronRight, Star } from 'lucide-react';
const heroSlides = [
  { image: '/hero-collage.jpg' },
  { image: '/slide-oils.jpg' },
  { image: '/slide-chillies.jpg' },
  { image: '/slide-rice.jpg' },
  { image: '/slide-minerals.jpg' }
];

const testimonials = [
  {
    quote: "Akshaya Golden Crust has been our primary oil supplier for over five years. Their consistency in volume, custom shipping schedules, and strict FSSAI quality documentation has made them an invaluable partner for our retail brand.",
    author: "Dietrich Vance",
    role: "Director of Procurement, EuroFoods Hamburg"
  },
  {
    quote: "Trading with Akshaya gives us the peace of mind that shipping containers will arrive on schedule. Their team handles export documentation flawlessly, which is a rare find in bulk agriculture logistics.",
    author: "Sanjay Singhania",
    role: "Managing Director, Global Agri-Corp Dubai"
  },
  {
    quote: "Their entry into mineral trading and logistics integration has saved us significant overhead. A truly professional, customer-first trading partner with two decades of deep industry heritage.",
    author: "Raymond Chen",
    role: "VP Supply Chain, Asia-Pacific Resources Singapore"
  },
  {
    quote: "The quality of their Guntur dry red chillies is unmatched. Perfect moisture levels, vibrant color, and consistent heat value. Highly recommended for premium spice blends.",
    author: "Sarah Mitchell",
    role: "Head of Sourcing, SpiceWorld UK"
  },
  {
    quote: "Excellent communication and transparent pricing. Their basmati rice exports always arrive on time with immaculate packaging that preserves the aroma beautifully.",
    author: "Ahmed Al-Fayed",
    role: "Chief Operations Officer, Gulf Grocers Co."
  }
];

const processSteps = [
  { title: "Sourcing", desc: "Selecting high-grade growers, refiners, and sustainable raw mineral locations." },
  { title: "Quality Inspection", desc: "Rigorous testing and laboratory checks to exceed international food safety benchmarks." },
  { title: "Packaging", desc: "Hygienic, premium retail and bulk container packing designed for long sea voyages." },
  { title: "Documentation", desc: "Handling complex customs, IEC certificates, and bulk billing transparently." },
  { title: "Shipping", desc: "Securing space with tier-1 shipping lines for temperature-controlled transit." },
  { title: "Global Delivery", desc: "Real-time tracking and delivery right to your ports or logistics depots." }
];

const catalogData = [
  {
    id: 1,
    badgeLabel: "COOKING OILS",
    exportOnly: true,
    title: "Refined Sunflower Oil",
    desc: "Light, odorless, and high in Vitamin E. Meticulously winterized and dewaxed to maintain clarity even at lower temperatures.",
    image: "/Oil.png",
  },
  {
    id: 4,
    badgeLabel: "PREMIUM RICE",
    exportOnly: true,
    title: "Traditional Basmati Rice",
    desc: "Authentic extra-long grain traditional basmati. Carefully aged to ensure maximum elongation, fluffy texture, and rich natural aroma.",
    image: "/Basmathi Rice.png",
  },
  {
    id: 7,
    badgeLabel: "DRY RED CHILLIES",
    exportOnly: true,
    title: "Stemless Dry Red Chillies",
    desc: "Sun-dried red chillies with vibrant color and robust heat levels. Fully sortexed to remove stems, dust, and immature pods.",
    image: "/Red Chilli.png",
  }
];

const tickerItems = [
  "🌿 PREMIUM COOKING OILS & OLEINS",
  "🌶️ GUNTUR DRY RED CHILLIES",
  "🌾 BULK RICE EXPORTS (BASMATI & NON-BASMATI)",
  "💎 INDUSTRIAL MINING MINERALS & RAW ORES",
  "🚢 LOGISTICS INTEGRATION & CONTAINER SHIPPING",
  "📜 FSSAI LICENSED • IEC CERTIFIED • GST REGISTERED",
  "🤝 TWO DECADES OF TRUSTED COMMODITY TRADE HERITAGE"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Hero Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const productSlides = [
    { image: '/Our Services/OIL.jpg', name: 'Premium Cooking Oils' },
    { image: '/Our Services/Red Chilli.png', name: 'Guntur Dry Red Chillies' },
    { image: '/Our Services/Basumati rice.jpg', name: 'Bulk Basmati Rice' },
    { image: '/Our Services/Mining.jpg', name: 'Industrial Minerals' },
    { image: '/Our Services/Export logistics.jpg', name: 'Logistics Shipping' }
  ];

  const sliderRef = React.useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-[400px] md:min-h-[450px] lg:min-h-0 lg:aspect-[16/9] lg:h-auto flex items-end overflow-hidden bg-brand-navy">

        {/* Background Images Crossfade Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-top sm:bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
          </AnimatePresence>
        </div>

        {/* Premium Dark Gradient Overlay to ensure text readability - only on first slide */}
        {currentSlide === 0 && (
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 via-[45%] to-transparent z-10" />
        )}
        {/* Ambient darken overlays on slides 2, 3, 4 */}
        {currentSlide !== 0 && (
          <div className="absolute inset-0 bg-black/20 z-10" />
        )}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Hero Content Wrapper (Visible only on the first slide with a smooth transition) */}
        <AnimatePresence>
          {currentSlide === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center lg:justify-start pt-12 sm:pt-16 lg:pt-32 pb-16 lg:pb-12 text-white"
            >
              <div className="max-w-3xl flex flex-col items-start">

                {/* Tagline & Decorative Divider Line (Reduced Font Size) */}
                <div className="flex items-center gap-3 w-full mb-3 sm:mb-5 max-w-xl">
                  <span className="text-white/95 font-subheading text-[7px] sm:text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap">
                    Rooted in Experience. Driven by Passion.
                  </span>
                  <div className="h-[1px] bg-brand-gold/45 flex-grow" />
                </div>

                {/* Main Luxury Serif Headline (Reduced Font Size) */}
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif tracking-tight leading-[1.1] uppercase mb-3 md:mb-6">
                  <span className="text-white block font-medium">Delighting</span>
                  <span className="text-brand-gold block mt-1 lg:mt-1.5 font-semibold">Your Kitchen.</span>
                </h1>

                {/* Sub-description Paragraph (Reduced Size) */}
                <p className="text-[9px] sm:text-xs md:text-sm text-white/85 font-body leading-relaxed max-w-[280px] sm:max-w-lg mb-5 md:mb-8 line-clamp-3 sm:line-clamp-none">
                  Global import-export and trading partner specializing in premium cooking oils, rice, dry red chillies and mining minerals. With 20+ years of expertise, we deliver quality, reliability and excellence across the world.
                </p>

                {/* 4 Outline Icons Row (Reduced Dimensions) */}
                <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-xl mb-8 border-t border-white/10 pt-6 w-full">
                  {/* Item 1: 20+ Years Experience */}
                  <div className="flex flex-col items-start text-left">
                    <div className="text-brand-gold mb-2">
                      <svg className="w-6 h-6 stroke-[1.2] fill-none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeDasharray="3 3" />
                        <path d="M12 7.5l1.2 2.5h2.8l-2.2 1.8.8 2.7-2.6-1.7-2.6 1.7.8-2.7-2.2-1.8h2.8z" fill="currentColor" fillOpacity="0.2" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-bold text-brand-gold tracking-tight leading-none mb-1">20+</span>
                    <span className="text-[9px] md:text-[10px] text-white/70 font-subheading uppercase tracking-wider leading-tight">
                      Years<br />Experience
                    </span>
                  </div>

                  {/* Item 2: Global Trading Network */}
                  <div className="flex flex-col items-start text-left">
                    <div className="text-brand-gold mb-2">
                      <svg className="w-6 h-6 stroke-[1.2] fill-none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 1 0 20M12 2a14.5 14.5 0 0 0 0 20" />
                        <path d="M2 12h20M4.5 6.5h15M4.5 17.5h15" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-bold text-brand-gold tracking-tight leading-none mb-1">Global</span>
                    <span className="text-[9px] md:text-[10px] text-white/70 font-subheading uppercase tracking-wider leading-tight">
                      Trading<br />Network
                    </span>
                  </div>

                  {/* Item 3: 100% Quality Assurance */}
                  <div className="flex flex-col items-start text-left">
                    <div className="text-brand-gold mb-2">
                      <svg className="w-6 h-6 stroke-[1.2] fill-none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.1" />
                        <path d="m9 11.5 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-bold text-brand-gold tracking-tight leading-none mb-1">100%</span>
                    <span className="text-[9px] md:text-[10px] text-white/70 font-subheading uppercase tracking-wider leading-tight">
                      Quality<br />Assurance
                    </span>
                  </div>

                  {/* Item 4: Reliable Bulk Supply */}
                  <div className="flex flex-col items-start text-left">
                    <div className="text-brand-gold mb-2">
                      <svg className="w-6 h-6 stroke-[1.2] fill-none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 22V12M12 12 3 7M12 12l9-5" />
                        <path d="M20.5 6.5 12 2 3.5 6.5M21 16V8a1.5 1.5 0 0 0-.75-1.3L12.75 2.2a1.5 1.5 0 0 0-1.5 0l-7.5 4.5A1.5 1.5 0 0 0 3 8v8c0 .54.3 1.04.75 1.3l7.5 4.5a1.5 1.5 0 0 0 1.5 0l7.5-4.5A1.5 1.5 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base font-bold text-brand-gold tracking-tight leading-none mb-1">Reliable</span>
                    <span className="text-[9px] md:text-[10px] text-white/70 font-subheading uppercase tracking-wider leading-tight">
                      Bulk<br />Supply
                    </span>
                  </div>
                </div>

                {/* Buttons (Reduced Sizes) */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    to="/services"
                    className="btn-shine inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy font-subheading text-[8px] sm:text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-brand-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-luxury"
                  >
                    Explore Services
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded border border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-subheading text-[8px] sm:text-[10px] font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-luxury"
                  >
                    Contact Us
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide Indicators / Navigation Controls */}
        <div className="absolute bottom-4 lg:bottom-12 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 z-30 flex items-center gap-3 sm:gap-4">
          <button
            onClick={prevHeroSlide}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-brand-gold hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${currentSlide === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-white/30'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextHeroSlide}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-brand-gold hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Elegant Bottom Sweeping Double-Wave Divider in Gold */}
        <div className="absolute bottom-0 left-0 w-full z-25 pointer-events-none select-none translate-y-1">
          <svg className="w-full h-28 text-brand-gold fill-none" viewBox="0 0 1440 112" preserveAspectRatio="none">
            <path d="M0,112 C200,60 400,30 650,90 C850,138 1200,120 1440,112" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0,112 C210,75 410,45 660,100 C860,143 1200,125 1440,112" stroke="currentColor" strokeWidth="1" strokeOpacity="0.45" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* 2. Seamless Infinite News Ticker */}
      <div className="relative w-full bg-brand-navy border-y border-brand-gold/30 py-4 overflow-hidden z-30 select-none">
        {/* Shadow Overlay for Premium Smooth Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex gap-16 items-center whitespace-nowrap text-white/90 font-subheading text-[10px] sm:text-xs uppercase tracking-widest font-semibold"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity
            }}
          >
            {/* Set 1 */}
            {tickerItems.map((item, idx) => (
              <span key={`t1-${idx}`} className="flex items-center gap-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#CFAD6C]" />
                {item}
              </span>
            ))}
            {/* Set 2 */}
            {tickerItems.map((item, idx) => (
              <span key={`t2-${idx}`} className="flex items-center gap-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_#CFAD6C]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2.5 Manual Products Slider */}
      <section className="py-12 md:py-16 bg-[#F6F5F2] overflow-hidden relative">
        <div className="w-full mx-auto relative px-0 sm:px-4">
          <style dangerouslySetInnerHTML={{
            __html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {/* Scroll Container */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 sm:px-12 lg:px-20"
          >
            {productSlides.map((slide, idx) => (
              <div
                key={idx}
                className="flex-none w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[380px] snap-center relative rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden shadow-md sm:shadow-lg transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-gold/20 group cursor-pointer"
              >
                <div className="w-full aspect-square relative overflow-hidden bg-white">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-10 pb-6 sm:pb-8">
                    <span className="text-white font-heading font-bold text-xl sm:text-2xl tracking-wide text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                      {slide.name}
                    </span>
                  </div>
                  {/* Subtle inner shadow for premium feel */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.25rem] sm:rounded-[1.5rem] pointer-events-none z-20" />
                </div>
              </div>
            ))}
          </div>

          {/* Manual Navigation Overlay */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 lg:left-8 lg:right-8 flex justify-between pointer-events-none z-30">
            <button
              onClick={scrollLeft}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-navy shadow-xl text-brand-gold hover:bg-brand-navy-light hover:scale-105 flex items-center justify-center transition-all cursor-pointer opacity-90 hover:opacity-100 border border-brand-gold/30"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollRight}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-navy shadow-xl text-brand-gold hover:bg-brand-navy-light hover:scale-105 flex items-center justify-center transition-all cursor-pointer opacity-90 hover:opacity-100 border border-brand-gold/30"
              aria-label="Next product"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Global Process Timeline */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
              Operational Excellence
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight">
              Our Structured Global Process
            </h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 md:gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-brand-gold/30 group-hover:border-brand-gold flex items-center justify-center font-heading font-bold text-base md:text-lg text-brand-navy shadow-md group-hover:shadow-brand-gold/20 transition-all duration-300 mb-4 md:mb-6 bg-radial-gradient">
                    {idx + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-brand-navy text-base tracking-wide mb-3 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-navy/60 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 About Us Overview */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Side: Luxury Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl border border-brand-navy/5 group">
                <img
                  src="/About us/01.jpg"
                  alt="Akshaya Golden Crust"
                  className="w-full h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors duration-500" />
              </div>

              {/* Back Gold Card Deco */}
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border-t-2 border-l-2 border-brand-gold rounded-tl-[2rem] -z-0 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border-b-2 border-r-2 border-brand-gold rounded-br-[2rem] -z-0 pointer-events-none" />

              {/* Float badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-5 left-5 md:-bottom-8 md:left-8 bg-brand-navy text-white px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-brand-gold/30 shadow-2xl z-20 flex items-center gap-3"
              >
                <span className="text-brand-gold text-2xl md:text-3xl font-bold font-heading">20+</span>
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-gold font-bold leading-tight">Years</span>
                  <span className="text-[9px] md:text-[10px] text-white/60 leading-tight mt-0.5">Trading Heritage</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Company Story */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-brand-navy mt-12 lg:mt-0">
              <div>
                <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
                  Our Heritage
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight mb-4">
                  Driven by Passion,<br />Rooted in Experience.
                </h2>
                <div className="w-20 h-1 bg-brand-gold mb-8" />
              </div>

              <p className="text-sm md:text-base leading-relaxed text-brand-navy/80 font-body">
                Welcome to Akshaya Golden Crust, where global trade meets a passion for quality. With over 20 years of proven expertise in the import and export industry, we have built a legacy of trust, reliability, and seamless logistics.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-brand-navy/80 font-body">
                We aren't just moving commodities; we are bridging the gap between world-class producers and your market. Our seasoned team handles everything from bulk trading to meticulous quality assurance, ensuring that every shipment meets the highest international standards.
              </p>

              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-subheading text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 group"
                >
                  Discover Our Story
                  <svg className="w-4 h-4 stroke-current fill-none stroke-[2] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.6 Our Product Catalog (As per design) */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              <span className="text-[10px] font-bold tracking-widest text-[#0B2519]">PREMIUM CROP SELECTION</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#0B2519] mb-4">
              Our Product <span className="text-brand-gold font-serif italic font-normal">Catalog</span>
            </h2>
            
            <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
              Sourced ethically from Indian cultivators, graded, and prepared with compliant configurations for global and domestic markets.
            </p>
          </div>



          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogData.map((item) => (
              <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                {/* Image Area */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 bg-[#0B2519] text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-10">
                    {item.badgeLabel}
                  </div>
                  {item.exportOnly && (
                    <div className="absolute top-4 right-4 bg-[#1F4160] text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 z-10">
                      <Globe className="w-3 h-3" />
                      EXPORT
                    </div>
                  )}
                  {/* Veg Indicator */}
                  <div className="absolute top-14 left-4 bg-white p-1 rounded-sm shadow-sm z-10">
                    <div className="border-[1.5px] border-green-600 p-[2px]">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-[#0B2519] mb-3 group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-auto">
                    {item.desc}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end items-center">
                    <Link to="/products" className="text-[10px] font-bold text-[#0B2519] uppercase tracking-wider flex items-center gap-1 group/btn hover:text-brand-gold transition-colors">
                      DETAILS
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Global Footprint Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10,40 Q30,10 50,40 T90,40" stroke="#0B2519" strokeWidth="0.5" fill="none" strokeDasharray="1,2" />
            <path d="M20,30 Q50,60 80,60" stroke="#0B2519" strokeWidth="0.5" fill="none" strokeDasharray="1,2" />
            <path d="M0,70 Q40,40 100,70" stroke="#0B2519" strokeWidth="0.5" fill="none" strokeDasharray="1,2" />
            <circle cx="20" cy="30" r="0.5" fill="#CFAD6C" />
            <circle cx="50" cy="40" r="0.8" fill="#CFAD6C" />
            <circle cx="70" cy="20" r="0.5" fill="#CFAD6C" />
            <circle cx="80" cy="60" r="1" fill="#CFAD6C" />
            <circle cx="30" cy="70" r="0.5" fill="#CFAD6C" />
            <circle cx="90" cy="40" r="0.6" fill="#CFAD6C" />
            <circle cx="10" cy="40" r="0.6" fill="#CFAD6C" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
              Global Footprint
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight mb-6">
              Exporting Excellence Worldwide
            </h2>
            <p className="text-sm md:text-base text-brand-navy/70 leading-relaxed">
              Our robust supply chain and strategic logistics partnerships enable us to deliver premium agricultural commodities and industrial minerals to diverse markets across the globe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { stat: "20+", label: "Countries Served", desc: "Across 4 Continents" },
              { stat: "5000+", label: "Metric Tons", desc: "Exported Annually" },
              { stat: "100%", label: "Pass Rate", desc: "SGS Quality Inspections" },
              { stat: "24/7", label: "Logistics Tracking", desc: "Real-time updates" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-[2rem] bg-[#FDFBF7] border border-gray-100 hover:border-brand-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-4xl lg:text-5xl font-heading font-bold text-brand-gold mb-3 group-hover:scale-110 transition-transform">{item.stat}</h3>
                <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">{item.label}</h4>
                <p className="text-[10px] text-gray-500 font-body uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonial Section (Google Review Marquee) */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Client Feedback
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight mb-4">
            Trusted by Global Distributors
          </h2>
          <p className="text-brand-navy/60 text-sm md:text-base font-body max-w-2xl mx-auto">
            See what our global distribution partners and premium retailers have to say about our agricultural commodities and logistics.
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden pb-8 pt-4">
          {/* Gradient Edges for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 items-stretch w-max pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[300px] md:w-[380px] shrink-0 bg-white p-8 rounded-[2rem] shadow-sm border border-brand-navy/5 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-[#FABB05] text-[#FABB05]" />
                    ))}
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Review" className="w-5 h-5 opacity-90" />
                </div>
                <p className="text-[13px] md:text-sm text-brand-navy/80 leading-relaxed font-body flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B2519] flex items-center justify-center text-brand-gold font-heading font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-brand-navy text-sm">{testimonial.author}</span>
                    <span className="text-[10px] text-brand-navy/50 uppercase tracking-wider mt-0.5">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Certifications Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Accreditation & Registry
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-navy tracking-tight mb-16">
            Official Corporate Certifications
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {[
              { label: "GST Registered", code: "37ACNFA9200B1ZO", logo: "/gst-logo.png" },
              { label: "Import Export Registry", code: "ACNFA9200B", logo: "/iec-logo.png" },
              { label: "Food Safety Standards Authority", code: "10126004000164", logo: "/fssai-logo.png" },
              { label: "Firm Reg. Certificate", code: "Reg No. 54/2026", logo: "/registry-logo.png" },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-brand-navy/5 bg-slate-50 flex flex-col items-center group hover:border-brand-gold/30 hover:bg-white transition-all duration-300"
              >
                <div className="h-16 w-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img src={badge.logo} alt={badge.label} className="max-h-full max-w-[80%] object-contain mix-blend-multiply" />
                </div>
                <h4 className="font-heading font-semibold text-brand-navy text-xs uppercase tracking-wider mb-2">
                  {badge.label}
                </h4>
                <span className="font-mono text-[10px] text-brand-navy/55 break-all">
                  {badge.code}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/credentials"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-gold hover:text-brand-gold-dark border-b border-brand-gold/30 hover:border-brand-gold transition-all duration-300 pb-1"
            >
              Verify Licensing & Documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Quick Quote / Inquiry Form */}
      <section className="py-16 md:py-24 bg-[#F6F5F2] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 transform -translate-x-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
                Partner With Us
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight mb-6">
                Request a Bulk Quote
              </h2>
              <p className="text-brand-navy/70 text-sm md:text-base leading-relaxed mb-10">
                Ready to secure premium commodities for your supply chain? Fill out the form below with your requirements, and our trading experts will respond within 24 hours with custom pricing and logistics options.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Custom Packaging Solutions</h4>
                    <p className="text-xs text-brand-navy/60">Retail and bulk container options optimized for sea transit</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Global CIF/FOB Delivery</h4>
                    <p className="text-xs text-brand-navy/60">Exclusive partnerships with Tier-1 international shipping lines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 relative">
              <div className="absolute top-0 right-10 w-20 h-1 bg-brand-gold rounded-b-full"></div>
              
              <form action="https://formsubmit.co/akshayagoldencrust@gmail.com" method="POST" className="flex flex-col gap-5 mt-2">
                {/* FormSubmit Config */}
                <input type="hidden" name="_subject" value="New Bulk Quote Request from Website!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.akshayagoldencrust.com/" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-navy uppercase tracking-wider pl-2">Full Name</label>
                    <input type="text" name="name" required placeholder="e.g. John Doe" className="w-full bg-[#FDFBF7] border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-navy uppercase tracking-wider pl-2">Company Name</label>
                    <input type="text" name="company" placeholder="e.g. EuroFoods Ltd." className="w-full bg-[#FDFBF7] border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-brand-navy uppercase tracking-wider pl-2">Email Address</label>
                  <input type="email" name="email" required placeholder="john@eurofoods.com" className="w-full bg-[#FDFBF7] border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy placeholder:text-gray-400" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-navy uppercase tracking-wider pl-2">Product of Interest</label>
                    <select name="product" className="w-full bg-[#FDFBF7] border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy appearance-none cursor-pointer">
                      <option>Refined Sunflower Oil</option>
                      <option>Premium Basmati Rice</option>
                      <option>Dry Red Chillies</option>
                      <option>Industrial Minerals</option>
                      <option>Other / Multiple Items</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-navy uppercase tracking-wider pl-2">Estimated Quantity</label>
                    <input type="text" name="quantity" required placeholder="e.g. 20 MT or 2 FCL" className="w-full bg-[#FDFBF7] border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-navy placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div className="mt-4">
                  <button type="submit" className="w-full py-4 rounded-2xl bg-[#0B2519] text-white font-subheading text-xs font-bold uppercase tracking-widest hover:bg-[#113826] transition-colors shadow-lg hover:shadow-xl shadow-[#0B2519]/20 transform hover:-translate-y-0.5 duration-300">
                    Request Custom Pricing
                  </button>
                  <p className="text-[9px] text-gray-500 text-center mt-4 font-body uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Your business information is secure & strictly confidential
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section 
        className="py-24 text-white relative overflow-hidden border-t border-brand-gold/20"
        style={{
          backgroundImage: 'url("/Our Services/Export logistics.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(11,37,25,0.7))]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading tracking-tight mb-6">
            Secure Premium Commodities for Your Supply Chain
          </h2>
          <p className="text-white/70 max-w-2xl text-sm md:text-base mb-10 leading-relaxed font-body">
            Get competitive pricing, customized logistics solutions, and strict quality assurance
            backed by 20+ years of trade heritage.
          </p>
          <Link
            to="/contact"
            className="btn-shine px-10 py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy font-subheading text-xs font-bold uppercase tracking-widest hover:scale-105 transition-luxury shadow-lg shadow-brand-gold/20"
          >
            Initiate Bulk Trading Call
          </Link>
        </div>
      </section>
    </div>
  );
}
