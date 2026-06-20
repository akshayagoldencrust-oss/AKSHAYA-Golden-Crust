import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, X, ChevronDown, Clock, Globe } from 'lucide-react';

const faqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our standard MOQ varies by commodity but is typically one 20ft container (1FCL) to ensure optimal shipping economics and quality control."
  },
  {
    question: "Do you provide samples before bulk orders?",
    answer: "Yes, we provide lab-certified samples for serious buyers. Shipping costs for samples are borne by the buyer and can be adjusted against the final commercial invoice."
  },
  {
    question: "What payment terms do you accept?",
    answer: "We accept 100% Irrevocable LC at sight from top-tier international banks, or Telegraphic Transfer (TT) with a standard advance and balance against scan copies of shipping documents."
  },
  {
    question: "Who handles the customs clearance and shipping?",
    answer: "Our dedicated logistics team handles all pre-shipment inspections, port clearances, and FOB/CIF arrangements. We work closely with tier-1 shipping lines to ensure smooth delivery to your destination port."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        "Full Name": formData.name,
        "Email Address": formData.email,
        "Contact Number": formData.phone,
        "Company Name": formData.company || "Not provided",
        "Inquiry Details": formData.message,
        "_subject": `New Trade Inquiry from ${formData.name} - Akshaya Golden Crust`,
        "_template": "box"
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-brand-navy tracking-tight">
            Contact Our Global Trade Desk
          </h1>
          <p className="text-base text-brand-navy/60 font-body mt-4 leading-relaxed">
            Inquire about pricing, contract terms, shipping container schedules, or supply availabilities.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold font-heading tracking-wide text-brand-navy">
                Trading Office
              </h2>
              <p className="text-xs md:text-sm leading-relaxed text-brand-navy/60 font-body">
                Our logistics and trade desk handles export documentation, port billing, and custom clearing coordination directly from our registered office in Andhra Pradesh, India.
              </p>

              <div className="flex flex-col gap-5 mt-4">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-brand-navy">Registered Address</h4>
                    <p className="text-xs text-brand-navy/70 leading-relaxed font-body mt-1">
                      #2-46-22/1, 1st Floor, Sri Nagar, Ward No. 5, Kakinada - 533003, Andhrapradesh, India.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-brand-navy">Phone Support</h4>
                    <a href="tel:+919666799999" className="text-xs text-brand-navy/70 hover:text-brand-gold leading-relaxed font-body mt-1 block">
                      +91 96667 99999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-brand-navy">General E-mail</h4>
                    <a href="mailto:akshayagoldencrust@gmail.com" className="text-xs text-brand-navy/70 hover:text-brand-gold leading-relaxed font-body mt-1 block break-all">
                      akshayagoldencrust@gmail.com
                    </a>
                  </div>
                </div>

                {/* Global Support */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-brand-navy">Global Support</h4>
                    <p className="text-xs text-brand-navy/70 leading-relaxed font-body mt-1 block">
                      24/7 Logistics Tracking Available
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-brand-navy">Trading Hours</h4>
                    <p className="text-xs text-brand-navy/70 leading-relaxed font-body mt-1 block">
                      Mon - Sat: 09:00 - 18:00 (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed (Styled Iframe) */}
            <div className="w-full h-72 rounded-3xl overflow-hidden shadow-lg border border-brand-navy/10 relative">
              <iframe
                title="Akshaya Golden Crust Office Location Map"
                src="https://maps.google.com/maps?q=Sri%20Nagar,%20Kakinada,%20Andhra%20Pradesh,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glassmorphism-card p-8 md:p-12 rounded-3xl border border-brand-navy/5 shadow-xl flex flex-col gap-8"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold font-subheading">
                  Trading Inquiry Form
                </span>
                <h2 className="text-2xl font-bold font-heading tracking-wide text-brand-navy -mt-1">
                  Request Commodity Quotation
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-heading font-semibold text-xs text-brand-navy/70 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 bg-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-heading font-semibold text-xs text-brand-navy/70 uppercase tracking-wide">
                      E-mail Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 bg-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-heading font-semibold text-xs text-brand-navy/70 uppercase tracking-wide">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 bg-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-heading font-semibold text-xs text-brand-navy/70 uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Agri Import Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 bg-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-heading font-semibold text-xs text-brand-navy/70 uppercase tracking-wide">
                    Trading Specifications / Inquiry *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe your bulk commodity specifications (oil refined level, grain length, container volume, expected port of loading, packaging preference)..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 bg-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300 resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shine w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy font-subheading font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-brand-gold/20 disabled:opacity-50 transition-luxury hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-brand-navy border-t-transparent animate-spin" />
                      Connecting Desk...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
              Pre-Trade Information
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-brand-navy/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-gold/50 shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none text-left"
                >
                  <span className="font-heading font-bold text-brand-navy text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                    <ChevronDown 
                      className={`h-5 w-5 text-brand-gold transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-brand-navy/70 leading-relaxed font-body border-t border-brand-navy/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Success Modal / Popup Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            {/* Background glowing orb */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none"
            />
            
            <motion.div
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 max-w-md w-full shadow-[0_20px_60px_-15px_rgba(207,173,108,0.3)] relative text-center overflow-hidden border border-brand-gold/10"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />

              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-6 right-6 text-brand-navy/30 hover:text-brand-navy hover:rotate-90 transition-all duration-300"
                aria-label="Close success popup"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Animated Checkmark Icon */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                className="w-24 h-24 rounded-full bg-brand-gold/5 flex items-center justify-center mx-auto mb-8 relative"
              >
                {/* Pulsing ring */}
                <motion.div 
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-brand-gold"
                />
                
                <motion.svg
                  className="w-12 h-12 text-brand-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-heading font-bold text-3xl text-brand-navy mb-4">
                  Request Received
                </h3>
                
                <p className="text-sm text-brand-navy/60 leading-relaxed font-body mb-10">
                  Thank you for choosing Akshaya Golden Crust. Your inquiry has been securely routed to our trading desk. A dedicated portfolio manager will reach out to you shortly.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-4 rounded-xl bg-brand-navy text-white hover:bg-brand-gold font-subheading text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-brand-gold/30 transform hover:-translate-y-1"
                >
                  Return to Dashboard
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
