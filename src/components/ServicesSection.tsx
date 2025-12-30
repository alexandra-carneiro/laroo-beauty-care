import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import serviceNails from "@/assets/service-nails.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";

const services = [
  {
    id: "unhas",
    title: "Unhas & Gel",
    price: "Desde 15€",
    image: serviceNails
  },
  {
    id: "pestanas",
    title: "Pestanas & Olhar",
    price: "Desde 40€",
    image: serviceLashes
  },
  {
    id: "facial",
    title: "Estética Facial",
    price: "Desde 35€",
    image: serviceFacial
  },
  {
    id: "massagem",
    title: "Massagens de Relaxamento",
    price: "Desde 45€",
    image: serviceMassage
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Nossos Serviços
          </h2>
          <p className="font-body text-muted-foreground">
            Escolha o tratamento ideal para você
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-lg font-semibold text-primary mb-4">
                  {service.price}
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body rounded-full"
                  asChild
                >
                  <a href="#agendar">Agendar</a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
