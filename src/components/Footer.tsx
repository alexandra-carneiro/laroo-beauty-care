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
              Rua Armando de Sousa, Loja 11<br />
              3030-403 Coimbra
            </p>
            <a
              href="https://maps.app.goo.gl/dXqEknbWdqyDB8Fd6"
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
              <h3 className="font-display text-xl text-primary-foreground">Contactos</h3>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.link/0as086"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Whatsapp: +351 910 248 906
              </a>
              <a
                href="https://www.instagram.com/laroobeautycare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Instagram: @laroobeautycare
              </a>
            </div>
          </motion.div>
        </div>

        {/* Legal & Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-primary-foreground/60">
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              Livro de Reclamações Eletrónico
            </a>
            <span className="hidden md:inline">•</span>
            <span>
              Entidade de Resolução Alternativa de Litígios de Consumo (RAL)
            </span>
          </div>
          <div className="flex justify-center gap-6 text-xs text-primary-foreground/60">
            <a href="/politica-privacidade" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
            <a href="/termos-condicoes" className="hover:text-primary-foreground transition-colors">Termos e Condições</a>
          </div>
          <p className="font-body text-sm text-primary-foreground/60">
            © 2025 Laroo Beauty & Care. Design by Avante Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
