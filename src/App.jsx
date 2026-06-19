import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Credentials from './pages/Credentials';
import Contact from './pages/Contact';

// Scroll to top and update SEO title/meta on route change
function PageWrapper({ children, title, description }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title || "Akshaya Golden Crust | Premium Global Trading";
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "Akshaya Golden Crust is a premium international import-export and bulk trading company specializing in cooking oils, basmati rice, dry red chillies, and minerals.";
  }, [location, title, description]);

  return children;
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-brand-navy">
      <Navbar />
      {/* Main Content Area */}
      <main className={`flex-grow ${isHome ? '' : 'pt-[73px] lg:pt-[80px]'}`}>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper
                title="Akshaya Golden Crust | Global Food & Mineral Trading"
                description="20+ years of trade excellence. Sourcing and exporting premium sunflower and olive oils, high-grade basmati rice, dry red chillies, and raw minerals."
              >
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper
                title="About Us | Akshaya Golden Crust Heritage & Mission"
                description="Learn about our 20+ years history in global supply chains, led by Managing Partner Sathi Venkata Reddy. Quality assurance and trusted trade."
              >
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper
                title="Our Services | Akshaya Golden Crust Supply Chains"
                description="Explore our specialized services including cooking oil import/export, rice sourcing, bulk trading, end-to-end logistics, and mining mineral operations."
              >
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/products"
            element={
              <PageWrapper
                title="Products | Premium Cooking Oils, Rice & Minerals"
                description="Browse our commodity catalog: high-grade sunflower, olive, and soybean oils; basmati and export quality rice; dry red chillies; raw minerals."
              >
                <Products />
              </PageWrapper>
            }
          />
          <Route
            path="/credentials"
            element={
              <PageWrapper
                title="Corporate Credentials & Certifications | Akshaya"
                description="Official registration documents including FSSAI License, IEC Code, GST Registration, and download links for the official corporate brochure."
              >
                <Credentials />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper
                title="Contact Us | Reach Akshaya Golden Crust Global Offices"
                description="Get in touch with Akshaya Golden Crust. Registered office details, phone, email, contact form, and interactive map locations."
              >
                <Contact />
              </PageWrapper>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
