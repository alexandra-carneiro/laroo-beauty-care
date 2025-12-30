import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ConceptSection from "@/components/ConceptSection";
import ProofSection from "@/components/ProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Laroo Beauty & Care | Estética em Coimbra - Unhas, Pestanas, Facial</title>
        <meta 
          name="description" 
          content="Laroo Beauty & Care em Coimbra. Unhas de Gel desde 15€, Pestanas desde 25€, Facial desde 40€ e Spa desde 35€. Agende agora!" 
        />
        <meta name="keywords" content="unhas gel Coimbra, pestanas Coimbra, estética facial, massagem relaxamento, manicure Coimbra" />
        <link rel="canonical" href="https://laroobeauty.pt" />
        <meta property="og:title" content="Laroo Beauty & Care | Estética em Coimbra" />
        <meta property="og:description" content="Especialistas em Unhas de Gel, Pestanas, Estética Facial e Spa. Agende agora!" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Laroo Beauty & Care",
            "description": "Estúdio de Estética em Coimbra - Unhas, Pestanas, Facial e Spa",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Ferreira Borges, 123",
              "addressLocality": "Coimbra",
              "postalCode": "3000-000",
              "addressCountry": "PT"
            },
            "priceRange": "€-€€",
            "telephone": "+351912345678",
            "openingHours": "Tu-Sa 09:00-19:00"
          })}
        </script>
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <ServicesSection />
        <ConceptSection />
        <ProofSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
