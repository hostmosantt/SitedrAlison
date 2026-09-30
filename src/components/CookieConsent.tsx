import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl p-4 sm:p-6 z-50 transform transition-transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          Nós usamos cookies para melhorar a sua experiência em nosso site, personalizar conteúdo e anúncios, além de analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa{' '}
          <a href="/politica-de-privacidade.html" target="_blank" rel="noreferrer" className="text-brand-petroleum font-bold hover:underline">
            Política de Privacidade
          </a>{' '}
          e o uso de cookies.
        </div>
        <div className="flex shrink-0">
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 bg-brand-petroleum text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-md text-sm"
          >
            Entendi e concordo
          </button>
        </div>
      </div>
    </div>
  );
}
