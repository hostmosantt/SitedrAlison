import { Menu, X, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Espaçador Mobile para equilibrar o menu hambúrguer na direita */}
          <div className="w-11 md:hidden"></div>
          
          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center">
              <img
                src="/assets/logo-invisalign.png"
                alt="Dr Alison Mota Rabelo"
                className="h-20 sm:h-24 w-auto object-contain scale-[1.15] origin-center sm:scale-110 sm:origin-left sm:-ml-2"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-brand-petroleum text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#agendar" 
              className="flex items-center gap-2 bg-brand-petroleum hover:bg-slate-800 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-darkblue p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] border-t border-slate-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-slate-600 hover:text-brand-petroleum hover:bg-slate-50 rounded-xl font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a 
              href="#agendar" 
              className="flex justify-center items-center gap-2 bg-brand-petroleum text-white px-6 py-4 rounded-xl font-bold w-full"
            >
              <Calendar size={20} />
              Agendar Avaliação
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
