import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-laroo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="Laroo Beauty & Care" 
              className="h-14 w-auto mb-6 rounded-lg brightness-0 invert opacity-90"
            />
            <p className="font-body text-background/70 leading-relaxed max-w-md mb-6">
              Um novo conceito de beleza em Coimbra. Onde cada momento é pensado 
              para elevar a sua autoestima e reconectar-se consigo mesma.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/laroobeautycare" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Serviços</h4>
            <ul className="space-y-3 font-body text-background/70">
              <li><a href="#servicos" className="hover:text-background transition-colors">Unhas</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Estética Facial</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Pestanas</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Massagens</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Epilação</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 font-body text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Coimbra, Portugal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+351XXXXXXXXX" className="hover:text-background transition-colors">+351 XXX XXX XXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:geral@laroobeauty.pt" className="hover:text-background transition-colors">geral@laroobeauty.pt</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-background/50">
              © {currentYear} Laroo Beauty & Care. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 font-body text-sm text-background/50">
              <a href="#" className="hover:text-background transition-colors">Termos de Serviço</a>
              <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
