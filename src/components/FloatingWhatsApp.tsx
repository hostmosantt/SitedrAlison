import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="https://wa.me/5568992302967?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></div>
    </a>
  );
}
