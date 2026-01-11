import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="agendar"
      className="bg-primary text-primary-foreground min-h-[calc(100svh-4rem)] flex flex-col relative pt-12 md:pt-16 pb-0"
    >
      <div className="container flex-grow flex flex-col items-center w-full pb-0">
        <div className="w-full space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Estamos à sua espera.
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-md mx-auto text-lg">
              Venha conhecer o nosso espaço e desfrutar de um café enquanto cuidamos de si.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start w-full">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-6 h-full"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <h3 className="font-display text-xl text-primary-foreground">Localização</h3>
              </div>
              <p className="font-body text-primary-foreground/80 mb-4 leading-relaxed text-base text-center">
                Rua Armando de Sousa, Loja 11<br />
                3030-403 Coimbra
              </p>
              <a
                href="https://maps.app.goo.gl/sqpNygFVD2fjFj2F7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-body text-secondary hover:text-secondary/80 transition-colors w-full"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir no Maps
              </a>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-6 h-full"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-secondary" />
                <h3 className="font-display text-xl text-primary-foreground">Horário</h3>
              </div>
              <div className="space-y-3 font-body text-primary-foreground/80 text-base">
                <div className="flex justify-between border-b border-primary-foreground/10 pb-2">
                  <span>Terça a Sábado</span>
                  <span className="font-medium text-primary-foreground">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between pt-1 opacity-60">
                  <span>Domingo e Segunda</span>
                  <span>Fechado</span>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-6 h-full"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-secondary" />
                <h3 className="font-display text-xl text-primary-foreground">Contactos</h3>
              </div>
              <div className="space-y-4 mb-4">
                <a
                  href="https://wa.me/351910248906?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20vossos%20servi%C3%A7os."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center group-hover:bg-[#20BA5A] transition-colors shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span>+351 910 248 906</span>
                </a>
                <a
                  href="https://www.instagram.com/laroobeautycare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] flex items-center justify-center group-hover:opacity-90 transition-opacity shrink-0">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <span>@laroobeautycare</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-grow flex flex-col justify-center items-center w-full pt-0 pb-4 md:pb-20 mt-4 md:mt-0 text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold rounded-full px-12 py-6 text-lg shadow-elevated"
            asChild
          >
            <a href="https://www.fresha.com/pt/a/laroo-beauty-care-coimbra-rua-armando-de-sousa-p12mk4t7" target="_blank" rel="noopener noreferrer">
              Agende seu Atendimento
            </a>
          </Button>
        </div>

        {/* Legal & Bottom */}
        <div className="container relative md:absolute md:bottom-0 left-0 right-0 border-t border-primary-foreground/20 text-center space-y-2 pt-4 pb-4 md:pb-1 mt-8 md:mt-0">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-xs text-primary-foreground/50">
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              Livro de Reclamações Eletrónico
            </a>
            <span className="hidden md:inline">•</span>
            <span>
              Entidade de Resolução Alternativa de Litígios de Consumo (RAL)
            </span>
          </div>
          <div className="flex justify-center gap-4 text-xs text-primary-foreground/50">
            <a href="/politica-privacidade" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
            <a href="/termos-condicoes" className="hover:text-primary-foreground transition-colors">Termos e Condições</a>
          </div>
          <p className="text-[10px] text-primary-foreground/40 leading-none">
            © {currentYear} Laroo Beauty & Care. Todos os direitos reservados.
          </p>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
