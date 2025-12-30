import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-laroo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="agendar" className="bg-primary text-primary-foreground">
      {/* Map Placeholder */}
      <div className="h-72 bg-sand relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-full h-full bg-muted/50 flex items-center justify-center border-b border-border">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="font-display text-xl text-foreground mb-1">Localizado no coração de Coimbra</p>
              <p className="font-body text-sm text-muted-foreground">(Mapa do Google será integrado aqui)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Address */}
          <div>
            <img 
              src={logo} 
              alt="Laroo Beauty & Care" 
              className="h-12 w-auto rounded-lg mb-4 brightness-0 invert"
            />
            <div className="flex items-start gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <p className="font-body text-sm leading-relaxed">
                Rua Exemplo, 123<br />
                3000-000 Coimbra, Portugal
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a 
              href="tel:+351XXXXXXXXX" 
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body text-sm">+351 XXX XXX XXX</span>
            </a>
            <a 
              href="https://instagram.com/laroobeautycare" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-body text-sm">@laroobeautycare</span>
            </a>
          </div>

          {/* CTA */}
          <div className="md:text-right">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-full px-8"
              asChild
            >
              <a 
                href="https://wa.me/351XXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/60">
            © {currentYear} Laroo Beauty & Care. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
