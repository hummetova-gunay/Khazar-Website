
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, X, Instagram, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Khazar', path: '/about' },
    { name: 'History', path: '/history' },
    { name: 'Symbols', path: '/symbols' },
    { name: 'Admissions', path: '#' },
    { name: 'Research', path: '#' },
    { name: 'Contact', path: '#' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-khazar-maroon text-khazar-cream py-4 shadow-2xl' : 'bg-transparent text-khazar-cream py-8'}`}>
        <div className="max-w-8xl mx-auto px-10 flex justify-between items-center">
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="flex items-center gap-3 uppercase tracking-widest font-bold text-sm hover:opacity-70 transition-opacity"
          >
            <Menu size={28} /> <span className="hidden md:block">Menu</span>
          </button>
          
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-soria text-2xl lg:text-4xl font-bold tracking-tighter">
            KHAZAR UNIVERSITY
          </Link>

          <div className="flex items-center gap-6">
             <button className="hidden md:block uppercase tracking-widest font-bold text-sm border-b border-transparent hover:border-current transition-all pb-1">Apply Now</button>
             <button className="p-2 hover:bg-white/10 rounded-none transition-colors">
                <Search size={24} />
             </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 z-[60] bg-khazar-dark transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col p-10">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-khazar-cream p-4 hover:rotate-180 transition-transform duration-500">
              <X size={48} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center items-center gap-4 lg:gap-8">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.path !== '#') navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="text-khazar-cream font-soria text-4xl lg:text-7xl font-bold hover:text-khazar-gold hover:italic transition-all duration-300 transform hover:scale-110 tracking-tighter"
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="text-center text-khazar-cream/40 text-xs tracking-widest uppercase pb-10">
            © 1991 — 2024 Khazar University
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-khazar-dark text-khazar-cream pt-32 pb-12 px-10">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
        <div className="space-y-8">
          <h2 className="font-soria text-4xl font-bold">KHAZAR <br />UNIVERSITY</h2>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs font-light">
            122 Mahsati str. (Neftchilar Campus), Baku, AZ1096, Azerbaijan
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-khazar-cream hover:text-khazar-gold transition-colors"><Instagram size={24} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-khazar-cream hover:text-khazar-gold transition-colors"><Facebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-khazar-cream hover:text-khazar-gold transition-colors"><Twitter size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-khazar-cream hover:text-khazar-gold transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
        
        <div className="space-y-8">
          <h3 className="font-soria text-lg font-bold uppercase tracking-[0.2em] text-khazar-gold">Academic Centers</h3>
          <ul className="space-y-4 text-sm opacity-80 font-light">
            <li><a href="#" className="link-grow">School of Science & Engineering</a></li>
            <li><a href="#" className="link-grow">School of Economics & Management</a></li>
            <li><a href="#" className="link-grow">School of Humanities & Social Sciences</a></li>
            <li><a href="#" className="link-grow">Graduate School of Business</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="font-soria text-lg font-bold uppercase tracking-[0.2em] text-khazar-gold">Global Network</h3>
          <ul className="space-y-4 text-sm opacity-80 font-light">
            <li><a href="#" className="link-grow">International Affairs Office</a></li>
            <li><a href="#" className="link-grow">Erasmus+ Exchange</a></li>
            <li><a href="#" className="link-grow">Mevlana Program</a></li>
            <li><a href="#" className="link-grow">Foreign Student Admission</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="font-soria text-lg font-bold uppercase tracking-[0.2em] text-khazar-gold">Stay Connected</h3>
          <p className="text-sm opacity-60 font-light">Receive the latest news, events, and research updates.</p>
          <div className="flex border-b border-khazar-cream/20 focus-within:border-khazar-gold transition-colors">
            <input type="email" placeholder="Email Address" className="bg-transparent px-2 py-4 flex-1 focus:outline-none placeholder:text-khazar-cream/30 text-sm" />
            <button className="px-4 py-4 hover:text-khazar-gold transition-colors"><ChevronRight /></button>
          </div>
        </div>
      </div>
      
      <div className="max-w-8xl mx-auto pt-16 border-t border-khazar-cream/10 flex flex-col md:row justify-between items-center gap-10 text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">
        <p>© {new Date().getFullYear()} Khazar University. Excellence Through Innovation.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-khazar-cream transition-colors">Legal & Privacy</a>
          <a href="#" className="hover:text-khazar-cream transition-colors">Accessibility</a>
          <a href="#" className="hover:text-khazar-cream transition-colors">Careers</a>
          <a href="#" className="hover:text-khazar-cream transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
