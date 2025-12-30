import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="agendar" className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Estamos à sua espera.
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-md mx-auto">
            Venha conhecer o nosso espaço e desfrutar de um chá enquanto cuidamos de si.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-secondary" />
              <h3 className="font-display text-xl text-primary-foreground">Localização</h3>
            </div>
            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
              Rua Ferreira Borges, 123<br />
              3000-000 Coimbra
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-secondary hover:text-secondary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir no Maps
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-secondary" />
              <h3 className="font-display text-xl text-primary-foreground">Contacto</h3>
            </div>
            <div className="space-y-3">
              <a 
                href="tel:+351912345678" 
                className="flex items-center gap-2 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                +351 912 345 678
              </a>
              <a 
                href="mailto:ola@laroobeauty.pt" 
                className="flex items-center gap-2 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                ola@laroobeauty.pt
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {currentYear} Laroo Beauty. Design by VibeCoding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
