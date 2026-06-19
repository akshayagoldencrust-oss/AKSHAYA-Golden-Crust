import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Droplet, Wheat, Globe, Container, Construction, ShieldCheck, CheckCircle, Scale, Clock, BadgeDollarSign } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    num: "01",
    title: "Cooking Oil Import & Export",
    tagline: "High-grade Sunflower, Olive & Vegetable Oils",
    desc: "We source premium crude and refined vegetable oils directly from leading mills and sustainable growers across Europe, South America, and Asia. Our processes ensure strict compliance with global food grade standards (FSSAI, ISO).",
    image: "/Our Services/OIL.jpg",
    icon: Droplet,
    points: ["Premium Sunflower Oil", "Pure Olive & Pomace Oil", "High-yield Soybean Oil", "FSSAI Food Quality Inspections"]
  },
  {
    id: 2,
    num: "02",
    title: "Premium Rice Sourcing",
    tagline: "Fine-grained Basmati & Non-Basmati Grains",
    desc: "Sourcing premium aged grains directly from agricultural hubs. We specialize in bulk milling, packaging, and exporting basmati and long-grain white rice that retains natural aroma, length, and taste for worldwide tables.",
    image: "/Our Services/Basumati rice.jpg",
    icon: Wheat,
    points: ["Aged Traditional Basmati", "Long Grain White Export Rice", "Moisture-controlled Milling", "Custom Bulk Packaging (Burlap/Poly)"]
  },
  {
    id: 3,
    num: "03",
    title: "Global Commodity Trading",
    tagline: "High-volume commodity brokerage & market hedging",
    desc: "Navigating high-volume commodity trades requires deep logistics integration. We handle international brokerages, volume risk hedging, custom shipments, and distribution channels for global retailers.",
    image: "/Our Services/04.jpg",
    icon: Globe,
    points: ["Volume Commodity Trading", "Custom Clearance Management", "Global Price Risk Hedging", "Wholesale Distribution Channels"]
  },
  {
    id: 4,
    num: "04",
    title: "End-to-End Logistics",
    tagline: "Multimodal Shipping & Freight Optimization",
    desc: "From ports of loading to ports of discharge, our freight teams optimize container spacing, manage documentation, and secure slots with top shipping lines. We keep your cargo safe, dry, and on schedule.",
    image: "/Our Services/Export logistics.jpg",
    icon: Container,
    points: ["Tier-1 Shipping Line Agreements", "Temperature-controlled Containers", "Real-time Supply Chain Tracking", "Rapid Customs Clearance Documentation"]
  },
  {
    id: 5,
    num: "05",
    title: "Mining Minerals",
    tagline: "Industrial Minerals Sourcing & Exporting",
    desc: "In addition to staple foods, we deal in industrial minerals. We partner with mining operators to manage logistics, export documentation, and loading of raw industrial minerals for international buyers.",
    image: "/Our Services/Mining.jpg",
    icon: Construction,
    points: ["Raw Industrial Minerals", "Bulk Load Vessel Management", "Mineral Quality Lab Tests", "Environmental Regulation Compliance"]
  }
];

export default function Services() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Our Operations
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-brand-navy tracking-tight">
            Specialized Services
          </h1>
          <p className="text-base text-brand-navy/60 font-body mt-4 leading-relaxed">
            Integrating sourcing, quality assurance, documentation, and maritime shipping globally.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Services List - Premium Alternating Layout & Cards */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Image Area with luxury hover zoom */}
                <div className={`lg:col-span-6 relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group ${isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] md:h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gold Border Overlay on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
                  <div className="absolute top-6 right-6 bg-brand-navy/85 backdrop-blur-md border border-brand-gold/25 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-gold font-heading font-bold text-lg">
                    {service.num}
                  </div>
                </div>

                {/* Content Area */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold font-subheading">
                        {service.tagline}
                      </span>
                      <h2 className="font-heading font-bold text-2xl lg:text-3xl text-brand-navy tracking-wide -mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-brand-navy/70 font-body">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex gap-3 items-center text-xs text-brand-navy/80 font-heading font-semibold">
                        <ShieldCheck className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white hover:bg-brand-navy-light font-subheading text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-luxury"
                    >
                      Inquire About This Service
                      <ArrowUpRight className="h-4 w-4 text-brand-gold" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Guarantees Grid */}
        <div className="mt-32 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy">
              Our Service Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <CheckCircle className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">100% Quality Assured</h3>
              <p className="text-sm text-brand-navy/60 leading-relaxed font-body">
                Every shipment undergoes rigorous third-party laboratory testing to ensure strict compliance with FSSAI, ISO, and international food safety standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <Scale className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">Seamless Customs</h3>
              <p className="text-sm text-brand-navy/60 leading-relaxed font-body">
                We handle complex IEC documentation, phytosanitary certificates, and port clearance procedures so your cargo never faces unexpected delays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <Clock className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">On-Time Delivery</h3>
              <p className="text-sm text-brand-navy/60 leading-relaxed font-body">
                Leveraging multimodal logistics and tier-1 shipping partnerships, we optimize routes to ensure predictable, timely delivery globally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-colors">
                <BadgeDollarSign className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">Transparent Pricing</h3>
              <p className="text-sm text-brand-navy/60 leading-relaxed font-body">
                Clear, upfront CIF/FOB pricing models with zero hidden fees. We utilize volume hedging to protect you from market volatility.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-32 relative overflow-hidden rounded-3xl bg-brand-navy">
          <div className="absolute inset-0 bg-[url('/Our%20Services/Export%20logistics.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10 px-6 py-20 md:py-24 lg:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Ready to Secure Your Supply Chain?
              </h2>
              <p className="text-lg text-white/80 font-body mb-0">
                Partner with Akshaya Golden Crust for reliable, high-volume commodity sourcing and end-to-end global logistics.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-gold text-brand-navy font-subheading text-sm font-bold uppercase tracking-wider hover:bg-white transition-luxury shadow-xl hover:shadow-brand-gold/30"
              >
                Request a Custom Quote
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
