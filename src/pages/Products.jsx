import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert, Sparkles, Box } from 'lucide-react';

const categories = ["All", "Cooking Oils", "Premium Rice", "Dry Red Chillies", "Mining Minerals"];

const productsList = [
  {
    id: 1,
    category: "Cooking Oils",
    name: "Refined Sunflower Oil",
    grade: "Grade A Refined / Super Olein",
    desc: "Light, odorless, and high in Vitamin E. Meticulously winterized and dewaxed to maintain clarity even at lower temperatures.",
    image: "/Products/Refined Sunflower Oil.png",
    specs: ["Acid Value: < 0.2 mg KOH/g", "Peroxide Value: < 2.0 meq/kg", "Moisture: < 0.05%", "Appearance: Crystal Clear"]
  },
  {
    id: 2,
    category: "Cooking Oils",
    name: "Extra Virgin Olive Oil",
    grade: "Cold Pressed Premium",
    desc: "Cold pressed from carefully harvested Mediterranean olives, delivering a rich fruity aroma and extremely low acidity.",
    image: "/Products/Extra Virgin Olive Oil.png",
    specs: ["Free Acidity: < 0.8%", "Peroxide Value: < 15 meq/kg", "Cold Extraction: Yes", "Vessel type: Dark Glass / Bulk Tins"]
  },
  {
    id: 3,
    category: "Cooking Oils",
    name: "Premium Soybean Oil",
    grade: "Fully Refined / Food Grade",
    desc: "A versatile cooking oil with a high smoke point, ideal for commercial baking, food processing, and bulk restaurant supply.",
    image: "/Products/Premium Soybean Oil.png",
    specs: ["Smoke Point: 238°C", "Phosphorus: < 5 ppm", "Color (Lovibond): < 1.5R", "Shelf Life: 24 Months"]
  },
  {
    id: 4,
    category: "Premium Rice",
    name: "Traditional Basmati Rice",
    grade: "Aged 12-24 Months / Premium",
    desc: "Authentic extra-long grain traditional basmati. Carefully aged to ensure maximum elongation, fluffy texture, and rich natural aroma.",
    image: "/Products/Traditional Basmati Rice.png",
    specs: ["Average Grain Length: 8.3+ mm", "Purity: 95% minimum", "Admixture: < 5%", "Moisture: < 12.5%"]
  },
  {
    id: 5,
    category: "Premium Rice",
    name: "Long Grain White Rice",
    grade: "5% Broken / Double Polished",
    desc: "Double polished and sortexed white grains. Excellent moisture control ensures high volume yield and superb storage durability.",
    image: "/Products/Long Grain White Rice.png",
    specs: ["Broken: < 5%", "Moisture: < 14%", "Damaged Grains: < 1%", "Sortex Cleaned: Yes"]
  },
  {
    id: 6,
    category: "Premium Rice",
    name: "1121 Sella Basmati Rice",
    grade: "Golden / Creamy Sella",
    desc: "Parboiled basmati grain known for its sturdy long size and cooking durability. Perfect for high-volume commercial catering.",
    image: "/Products/1121 Sella Basmati Rice.png",
    specs: ["Grain Length: 8.35+ mm", "Cooking expansion: 2.5x", "Chalky Grains: Nil", "Kett Value: 19-21"]
  },
  {
    id: 7,
    category: "Dry Red Chillies",
    name: "Stemless Dry Red Chillies",
    grade: "Export Quality (Teja / S4 / Byadgi)",
    desc: "Sun-dried red chillies with vibrant color and robust heat levels. Fully sortexed to remove stems, dust, and immature pods.",
    image: "/Red Chilli.png",
    specs: ["ASTA Color Value: 80-120", "Heat Value: 15,000-80,000 SHU", "Moisture: < 11%", "Stemless: Yes (99.5% clean)"]
  },
  {
    id: 8,
    category: "Mining Minerals",
    name: "Industrial Raw Minerals",
    grade: "Bulk Grade Raw Minerals",
    desc: "Consistently graded industrial minerals sourced directly from partner mines. Handled under strict quality inspection protocols.",
    image: "/Products/Industrial Raw Minerals.png",
    specs: ["Purity/Grade: Standard Industrial", "Vessel Loading: Bulk Carrier", "Inspection: SGS Certified", "Origin: Certified Minerals Sites"]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? productsList
    : productsList.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-subheading text-xs font-bold uppercase tracking-widest text-brand-gold block mb-3">
            Commodity Catalog
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-brand-navy tracking-tight">
            Premium Products
          </h1>
          <p className="text-base text-brand-navy/60 font-body mt-4 leading-relaxed">
            Sourced from verified refiners and growers. Packaged to retain nutrient value and aroma.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-subheading text-xs font-bold uppercase tracking-wider transition-luxury ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-lg'
                  : 'bg-white border border-brand-navy/10 text-brand-navy hover:border-brand-gold hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glassmorphism-card rounded-3xl overflow-hidden border border-brand-navy/5 flex flex-col justify-between group hover:border-brand-gold/40 hover:shadow-2xl transition-luxury"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-square bg-slate-200 border-b border-brand-navy/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy font-heading font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {product.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col gap-5 flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-subheading font-bold">
                      {product.grade}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-brand-navy tracking-wide mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-navy/70 leading-relaxed font-body">
                      {product.desc}
                    </p>
                  </div>

                  {/* Specifications List */}
                  <div className="bg-slate-100/50 p-4 rounded-xl border border-brand-navy/5">
                    <span className="text-[9px] uppercase tracking-widest text-brand-navy/40 font-bold block mb-2">
                      Technical Specifications
                    </span>
                    <ul className="flex flex-col gap-1.5 text-[10px] text-brand-navy/75 font-heading font-semibold">
                      {product.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex gap-2 items-center">
                          <Box className="h-3 w-3 text-brand-gold shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-brand-navy/5 bg-slate-50/50">
                  <Link
                    to="/contact"
                    className="btn-shine w-full text-center py-3 rounded-2xl bg-brand-navy group-hover:bg-brand-navy-light text-white font-subheading text-xs font-bold uppercase tracking-wider block transition-colors"
                  >
                    Request Bulk Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state (fallback) */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <ShieldAlert className="h-12 w-12 text-brand-gold/40 mx-auto mb-4" />
            <p className="text-brand-navy/60 font-heading font-bold text-lg">
              No products found in this category.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
