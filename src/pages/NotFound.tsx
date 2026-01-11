import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-sand flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center py-24 px-6 md:px-12">
        <div className="text-center max-w-lg">
          <p className="font-display text-terracotta text-6xl md:text-8xl font-bold mb-4 select-none">
            404
          </p>
          <div className="relative z-10">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Página não Encontrada
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8">
              O caminho para o relaxamento pode ter mudado. Escolha um novo destino:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-all font-body"
              >
                <a href="/">Voltar ao Início</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
              >
                <a href="https://www.fresha.com/pt/a/laroo-beauty-care-coimbra-rua-armando-de-sousa-p12mk4t7" target="_blank" rel="noopener noreferrer">
                  Agendar Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
