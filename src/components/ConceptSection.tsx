import { motion } from "framer-motion";
import { Leaf, Clock } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";

const ConceptSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={heroSpa} 
                alt="Momento de autocuidado no Laroo Beauty"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
              <p className="font-display text-lg leading-tight">"O luxo está na simplicidade."</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:ml-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              O seu momento de<br /><span className="text-secondary italic">autocuidado</span>.
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              No Laroo, acreditamos que a beleza não deve ser uma obrigação, mas sim um prazer.
            </p>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Criamos um espaço em Coimbra onde o tempo desacelera. Utilizamos apenas produtos hipoalergénicos e técnicas manuais que respeitam a integridade da sua pele e unhas.
            </p>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="font-body text-foreground font-medium">Produtos Cruelty-free</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="font-body text-foreground font-medium">Atendimento sem pressa</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
