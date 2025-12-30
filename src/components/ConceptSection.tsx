import { motion } from "framer-motion";
import { Leaf, Clock } from "lucide-react";

const ConceptSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              O seu momento de<br />autocuidado.
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              No Laroo, acreditamos que a beleza não deve ser uma obrigação, mas sim um prazer.
            </p>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Criamos um espaço em Coimbra onde o tempo desacelera. Utilizamos apenas produtos hipoalergénicos e técnicas manuais que respeitam a integridade da sua pele e unhas.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 px-5 py-3 bg-sand rounded-full"
              >
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-foreground">Produtos Cruelty-free</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 px-5 py-3 bg-sand rounded-full"
              >
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-foreground">Atendimento sem pressa</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
