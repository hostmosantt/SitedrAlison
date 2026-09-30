import { AtSign, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-darkblue text-slate-400 py-16 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="block w-fit mx-auto md:mx-0 mb-6">
              <img
                src="/assets/logo-invisalign.png"
                alt="Dr Alison Mota Rabelo - Invisalign Doctor"
                className="h-28 w-auto object-contain"
                style={{ filter: 'invert(1) brightness(2)' }}
              />
            </a>
            <p className="text-sm font-light mb-6 leading-relaxed text-center md:text-left">
              Especialista em Ortodontia, Top Doctor Invisalign® no Acre, Implantes e Lentes de porcelana. CEO do Studio Als Odontologia Integrada.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://instagram.com/dralisonmota" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-petroleum hover:text-white transition-all" aria-label="Instagram">
                <AtSign size={18} />
              </a>
            </div>
          </div>

          {/* Links / Tratamentos */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Tratamentos</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><a href="#especialidades" className="hover:text-brand-mint transition-colors">Invisalign®</a></li>
              <li><a href="#especialidades" className="hover:text-brand-mint transition-colors">Lentes de Porcelana</a></li>
              <li><a href="#especialidades" className="hover:text-brand-mint transition-colors">Implantes Dentários</a></li>
              <li><a href="#especialidades" className="hover:text-brand-mint transition-colors">Ortodontia Convencional</a></li>
            </ul>
          </div>

          {/* Contatos */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contato</h4>
              <ul className="space-y-4 font-light text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-petroleum shrink-0 mt-0.5" />
                  <span>Studio Als Odontologia Integrada<br/>Rio Branco - Acre</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-petroleum shrink-0" />
                  <span>(68) 99230-2967</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-brand-petroleum shrink-0" />
                  <span>WhatsApp: (68) 99230-2967</span>
                </li>
                <li className="flex items-center gap-3 mt-4">
                  <span className="text-brand-petroleum shrink-0 font-bold">@</span>
                  <a href="mailto:clinicamosantt@gmail.com" className="hover:text-brand-mint transition-colors">clinicamosantt@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Atendimento</h4>
              <ul className="space-y-4 font-light text-sm">
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-brand-petroleum shrink-0 mt-0.5" />
                  <span>
                    Segunda a Sexta<br/>
                    08:00 às 18:00
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Dr. Alison Mota. Todos os direitos reservados.</p>
            <p className="text-slate-500">A MOTA RABELO | CNPJ: 62.919.882-77</p>
          </div>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade.html" target="_blank" rel="noreferrer" className="hover:text-brand-mint transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso.html" target="_blank" rel="noreferrer" className="hover:text-brand-mint transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
