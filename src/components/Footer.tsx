import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            Venha conhecer o nosso espaço e desfrutar de um café enquanto cuidamos de si.
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
            <div className="space-y-4 mb-6">
              <a
                href="https://wa.link/0as086"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <span>+351 910 248 906</span>
              </a>
              <a
                href="https://www.instagram.com/laroobeautycare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>@laroobeautycare</span>
              </a>
            </div>
            <Button
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-full"
              asChild
            >
              <a href="https://www.fresha.com/pt/a/laroo-beauty-care-coimbra-rua-armando-de-sousa-p12mk4t7" target="_blank" rel="noopener noreferrer">
                Agende seu Atendimento
              </a>
            </Button>
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
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Laroo Beauty & Care. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
