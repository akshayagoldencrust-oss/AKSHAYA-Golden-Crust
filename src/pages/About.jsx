import React from 'react';
import { motion } from 'framer-motion';
import { Check, Compass, ShieldAlert, Award, Star, Shield, Leaf, Users, CheckCircle2, Settings, ShieldCheck, Globe2, MapPin } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "20+ Years Heritage", desc: "Over two decades of international trade, navigating customs, cargo logistics, and bulk distribution." },
    { title: "Global Supply Chain Expertise", desc: "Handling everything from source refiners to port warehousing with certified quality audits." },
    { title: "Trusted Import & Export", desc: "Helping global buyers procure staple food commodities and mineral resources transparently." },
    { title: "Sustainable Sourcing", desc: "Developing ethical contracts with farmers, refiners, and raw resource managers worldwide." }
  ];

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Our Legacy
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-brand-navy tracking-tight">
            About Akshaya Golden Crust
          </h1>
          <p className="text-base text-brand-navy/60 font-body mt-4 leading-relaxed">
            Rooted in Experience. Driven by Passion. Delighting Your Kitchen.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Company History Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-28">
          
          {/* Left Side: Luxury Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border border-white/10 group">
              <img
                src="/About us/01.jpg"
                alt="Akshaya Cargo Ship"
                className="w-full h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors" />
            </div>

            {/* Back Gold Card Deco */}
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border-t-2 border-l-2 border-brand-gold rounded-tl-2xl -z-0 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border-b-2 border-r-2 border-brand-gold rounded-br-2xl -z-0 pointer-events-none" />

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
          <div className="lg:col-span-6 flex flex-col gap-6 text-brand-navy">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading tracking-wide">
              Our Journey & Expertise
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-brand-navy/80 font-body">
              Welcome to Akshaya Golden Crust, where global trade meets a passion for quality. With over 20 years of proven expertise in the import and export industry, we have built a legacy of trust, reliability, and seamless logistics.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-brand-navy/80 font-body">
              While our journey began two decades ago navigating the complexities of international trade, our evolution has led us to our truest passion: sourcing and trading the world’s finest cooking oils and premium rice, dry red chilli. Today, we operate as a premier cooking oil trading company and a trusted importer/exporter of staple foods that bring families together.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-brand-navy/80 font-body">
              We aren't just moving commodities; we are bridging the gap between world-class producers and your market. Our seasoned team handles everything from bulk trading to meticulous quality assurance, ensuring that every shipment meets the highest international standards.
            </p>
          </div>
        </div>

        {/* Sathi Venkata Reddy Profile Card */}
        <div className="w-full mb-28">
          <div className="text-center mb-16">
            <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
              Leadership
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold font-heading text-brand-navy tracking-tight">
              Managing Partner
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism-card p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center hover:shadow-2xl transition-luxury"
          >
            {/* Image container */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-gold/30 bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center relative shadow-lg">
                <img
                  src="/About us/02.png"
                  alt="Sathi Venkata Reddy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Gold Accent Ring Decoration */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-gold/40 -m-3 animate-spin" style={{ animationDuration: '30s' }} />
            </div>

            {/* Profile Info */}
            <div className="md:col-span-7 flex flex-col gap-4 text-center md:text-left">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-subheading font-bold">
                Akshaya Leadership
              </span>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-brand-navy tracking-wide">
                Sathi Venkata Reddy
              </h3>
              <p className="text-xs text-brand-gold-dark font-subheading font-semibold uppercase tracking-wider -mt-2">
                Managing Partner, Akshaya Golden Crust
              </p>
              <div className="w-12 h-1 bg-brand-gold mx-auto md:mx-0 my-2" />
              <p className="text-xs md:text-sm leading-relaxed text-brand-navy/70 font-body">
                "Our commitment goes beyond traditional import-export transactions. We strive to establish 
                long-term supply chain partnerships built on strict quality guidelines, logistics safety, 
                and complete transparency. Every commodity that leaves our warehouse represents our brand's honor."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-10 md:p-16 border-2 border-brand-gold bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy-light text-white mb-28 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <Star className="h-10 w-10 text-brand-gold mb-6" />
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-brand-gold uppercase tracking-widest mb-6">
              Our Mission
            </h2>
            <p className="text-base md:text-xl lg:text-2xl font-body italic leading-relaxed text-white/90">
              "To nourish communities across the globe by supplying top-tier cooking oils and rice, leveraging our 20+ years of trade expertise to deliver unparalleled value, reliability, and integrity to our partners."
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glassmorphism-card p-8 rounded-2xl flex gap-5 items-start group hover:-translate-y-1 transition-luxury"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold-dark shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-brand-navy text-lg tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-brand-navy/60 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest pricing, clear communication, and absolute transparency in every deal." },
              { icon: Award, title: "Uncompromising Quality", desc: "Strict adherence to FSSAI standards and international food safety protocols." },
              { icon: Leaf, title: "Sustainability", desc: "Ethical sourcing that supports local farming communities and fair trade." },
              { icon: Users, title: "Customer First", desc: "Customized packaging and logistics solutions tailored to buyer needs." }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-navy/5 text-center flex flex-col items-center group hover:shadow-xl hover:border-brand-gold/30 transition-luxury"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-navy transition-all duration-300">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">{val.title}</h3>
                <p className="text-sm text-brand-navy/60 font-body leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality & Compliance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy text-white rounded-[2.5rem] p-10 md:p-16 mb-28 relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed745eb33?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="md:w-1/2 relative z-10">
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold font-subheading mb-4 block">International Standards</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
              Quality & Compliance Commitment
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-6">
              Exporting agricultural commodities requires rigorous adherence to global safety standards. At Akshaya Golden Crust, our facilities are fully FSSAI licensed, GST registered, and IEC certified.
            </p>
            <p className="text-white/80 font-body leading-relaxed mb-8">
              Every shipment of rice, chillies, and cooking oil undergoes stringent sortexing, cleaning, and laboratory testing to ensure 0% adulteration and 100% buyer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-bold tracking-wider">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-bold tracking-wider">IEC Registered</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-white/5 border border-brand-gold/20 p-6 rounded-2xl backdrop-blur-sm flex flex-col items-center text-center">
              <Settings className="w-10 h-10 text-brand-gold mb-4" />
              <h4 className="font-bold text-lg mb-2">Automated Sortexing</h4>
              <p className="text-xs text-white/60">Advanced machinery removes 99.9% of impurities and broken grains.</p>
            </div>
            <div className="bg-white/5 border border-brand-gold/20 p-6 rounded-2xl backdrop-blur-sm flex flex-col items-center text-center sm:mt-8">
              <ShieldCheck className="w-10 h-10 text-brand-gold mb-4" />
              <h4 className="font-bold text-lg mb-2">Lab Tested</h4>
              <p className="text-xs text-white/60">Rigorous moisture and heat value testing for all spices and oils.</p>
            </div>
          </div>
        </motion.div>

        {/* Global Network */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Globe2 className="w-12 h-12 text-brand-gold mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight">
              Our Global Network
            </h2>
            <p className="text-base text-brand-navy/60 font-body mt-6 leading-relaxed">
              We leverage partnerships with tier-1 shipping lines to ensure safe, temperature-controlled, and timely delivery across continents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: "Middle East", desc: "UAE, Saudi Arabia, Oman" },
              { region: "Southeast Asia", desc: "Singapore, Malaysia, Vietnam" },
              { region: "Europe", desc: "UK, Germany, Netherlands" },
              { region: "North America", desc: "USA, Canada" }
            ].map((area, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl text-center border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-luxury"
              >
                <MapPin className="w-6 h-6 text-brand-gold mx-auto mb-3" />
                <h4 className="font-heading font-bold text-brand-navy text-lg mb-1">{area.region}</h4>
                <p className="text-xs text-brand-navy/60 uppercase tracking-wider">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}
