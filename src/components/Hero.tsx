import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 touch-pan-y">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beleza natural - close-up de pele radiante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary-foreground mb-5"
          >
            Realce sua Beleza Natural em Coimbra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
          >
            Especialistas em Unhas de Gel, Pestanas, Limpeza de Pele, Massagens e Epilação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold text-base px-8 py-6 rounded-full shadow-elevated"
              asChild
            >
              <a href="https://www.fresha.com/pt/a/laroo-beauty-care-coimbra-rua-armando-de-sousa-p12mk4t7" target="_blank" rel="noopener noreferrer">Agendar seu Atendimento</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="animate-bounce w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full mt-1.5" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
