import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, Shield, FileCheck, Building, HelpCircle } from 'lucide-react';

const credentialsList = [
  {
    title: "Food Safety Standards Authority (FSSAI)",
    authority: "Ministry of Health & Family Welfare, Govt. of India",
    license: "10126004000164",
    type: "Category: Food Business Operator (FBO) - Importer/Exporter",
    desc: "Guarantees that all edible oils, rice varieties, and dry red chillies sourced and traded by Akshaya Golden Crust comply with global hygiene, processing, and moisture control regulations.",
    icon: FileCheck
  },
  {
    title: "Import Export Code (IEC)",
    authority: "Directorate General of Foreign Trade (DGFT), Govt. of India",
    license: "ACNFA9200B",
    type: "Status: Active Global Trading Registry",
    desc: "The primary registry allowing Akshaya Golden Crust to legally engage in bulk customs clearance, deep-sea shipping cargo logistics, and international trade transaction processing.",
    icon: Shield
  },
  {
    title: "Goods & Services Tax (GSTIN)",
    authority: "Department of Revenue, Ministry of Finance, Govt. of India",
    license: "37ACNFA9200B1ZO",
    type: "Taxation Code: Registered GST Network",
    desc: "Ensures compliance with all domestic and international tax structures, billing declarations, customs tariffs, and fiscal transaction transparency.",
    icon: CheckCircle
  },
  {
    title: "Firm Registration Certificate",
    authority: "Registrar of Firms, Govt. of Andhra Pradesh",
    license: "Firm Regd. No: 54/2026",
    type: "Legal Entity Status: Registered Corporate Firm",
    desc: "The fundamental corporate registration validating the governance structure, partner deeds, and operational boundaries of Akshaya Golden Crust as a certified business entity.",
    icon: Building
  }
];

export default function Credentials() {
  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Compliance & Legitimacy
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-brand-navy tracking-tight">
            Corporate Credentials
          </h1>
          <p className="text-base text-brand-navy/60 font-body mt-4 leading-relaxed">
            Akshaya Golden Crust operates under full regulatory compliance, ensuring secure and legal transactions.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Brochure Download Banner (Premium Callout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism-card-dark bg-brand-navy p-8 md:p-12 rounded-3xl mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-gold/20 shadow-2xl relative overflow-hidden"
        >
          {/* Deco glow */}
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-2xl" />
          
          <div className="flex items-center gap-6 text-center md:text-left relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 mx-auto md:mx-0">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-white tracking-wide">
                Download Official Brochure
              </h2>
              <p className="text-xs text-white/60 font-body mt-1 max-w-lg leading-relaxed">
                Get the offline corporate profile containing details on our supply networks, cargo ports, packing designs, and mining services.
              </p>
            </div>
          </div>

          <a
            href="/Broucher.pdf"
            download="Akshaya_Golden_Crust_Brochure.pdf"
            className="btn-shine px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy font-subheading text-xs font-bold uppercase tracking-widest flex items-center gap-3 relative z-10 shrink-0 shadow-lg shadow-brand-gold/25"
          >
            Download PDF Brochure
            <Download className="h-4.5 w-4.5" />
          </a>
        </motion.div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {credentialsList.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glassmorphism-card p-8 rounded-3xl border border-brand-navy/5 flex flex-col justify-between group hover:border-brand-gold/30 hover:shadow-2xl transition-luxury"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold-dark group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-heading font-bold text-[10px] text-brand-gold-dark uppercase tracking-widest bg-brand-gold/15 px-3 py-1 rounded-full">
                      Compliance ID
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-navy/40 font-bold block">
                      {cred.authority}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-brand-navy tracking-wide mb-1">
                      {cred.title}
                    </h3>
                    <span className="text-xs text-brand-navy/60 font-subheading font-medium tracking-wide block mb-3">
                      {cred.type}
                    </span>
                    <p className="text-xs md:text-sm text-brand-navy/70 leading-relaxed font-body">
                      {cred.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-brand-navy/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-brand-navy/40 font-bold">
                    Official Registry License
                  </span>
                  <span className="font-mono text-xs md:text-sm font-semibold text-brand-navy select-all">
                    {cred.license}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory FAQ note */}
        <div className="glassmorphism-card p-6 rounded-2xl max-w-3xl mx-auto flex gap-4 items-start border border-brand-navy/5 bg-slate-100/50">
          <HelpCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed text-brand-navy/60 font-body">
            <strong>Registration Verification Note:</strong> All tax numbers, FSSAI licenses, and DGFT Import Export Codes listed above are active. If you require audited fiscal declarations, trade references, or certified banking coordinates, please send a query through our encrypted contact page.
          </div>
        </div>

      </div>
    </div>
  );
}
