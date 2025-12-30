import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section id="agendar" className="section-padding bg-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-body uppercase tracking-widest text-primary-foreground/80 mb-4 block">
              O Seu Momento Começa Aqui
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight">
              Reserve o seu momento<br />de autocuidado
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
              Dê a si mesma o presente de parar, respirar e ser cuidada. 
              O primeiro passo para elevar a sua autoestima começa com um simples agendamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 rounded-full font-body font-medium"
                asChild
              >
                <a href="https://wa.me/351XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  Agendar via WhatsApp
                </a>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://fresha.com" target="_blank" rel="noopener noreferrer">
                  Reservar Online
                </a>
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-body text-sm">Coimbra, Portugal</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-body text-sm">Ter-Sáb: 9h-19h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-body text-sm">Cancelamento Flexível</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
