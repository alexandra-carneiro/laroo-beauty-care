import { motion } from "framer-motion";
import { Leaf, Clock } from "lucide-react";

const ConceptSection = () => {
  return (
    <section className="bg-background min-h-[calc(100svh-5rem)] flex flex-col justify-center py-12 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-3xl shadow-elevated">
              <img
                src="/company-photos/concept-spa.webp"
                alt="Momento de relaxamento spa"
                loading="lazy"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl z-[-1]" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              O seu momento de<br />autocuidado.
            </h2>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              No Laroo, acreditamos que a beleza não deve ser uma obrigação, mas sim um prazer.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Criamos um espaço em Coimbra onde o tempo desacelera. Liderado por Laryssa, utilizamos apenas produtos hipoalergénicos e técnicas manuais que respeitam a integridade da sua pele e unhas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 px-5 py-3 bg-sand rounded-xl border border-secondary/20">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-foreground">Produtos Cruelty-free</span>
              </div>

              <div className="flex items-center gap-3 px-5 py-3 bg-sand rounded-xl border border-secondary/20">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-foreground">Atendimento sem pressa</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
