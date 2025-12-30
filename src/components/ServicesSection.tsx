import { motion } from "framer-motion";
import serviceNails from "@/assets/service-nails.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";

const services = [
  {
    id: "unhas",
    title: "Unhas",
    description: "Manicure, pedicure e nail art com foco na saúde e durabilidade. Produtos de alta qualidade para resultados que duram.",
    price: "Desde 15€",
    image: serviceNails
  },
  {
    id: "estetica-facial",
    title: "Estética Facial",
    description: "Tratamentos personalizados para limpeza, hidratação e rejuvenescimento. Pele radiante de forma natural.",
    price: "Desde 35€",
    image: serviceFacial
  },
  {
    id: "pestanas",
    title: "Pestanas",
    description: "Extensões e lifting que realçam o seu olhar de forma elegante e natural, respeitando a saúde das suas pestanas.",
    price: "Desde 40€",
    image: serviceLashes
  },
  {
    id: "massagens",
    title: "Massagens de Relaxamento",
    description: "Momentos de puro relaxamento para libertar tensões e renovar as suas energias. O escape que você merece.",
    price: "Desde 45€",
    image: serviceMassage
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-body uppercase tracking-widest text-primary mb-4 block">
            Os Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tratamentos pensados para si
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Cada serviço é uma experiência completa de cuidado e bem-estar, 
            adaptada às suas necessidades únicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`Serviço de ${service.title} - Laroo Beauty & Care`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl text-foreground">
                    {service.title}
                  </h3>
                  <span className="font-body text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional Services Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 font-body text-muted-foreground"
        >
          Também oferecemos <strong className="text-foreground">Epilação a Cera e Laser</strong> com tecnologia de ponta.
          <br />Entre em contacto para conhecer todos os nossos serviços.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
