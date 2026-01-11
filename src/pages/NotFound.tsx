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
          <p className="font-display text-Terrakotta text-9xl font-medium opacity-20 select-none">
            404
          </p>
          <div className="-mt-12 relative z-10">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Página não Encontrada
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8">
              A página que procura não existe ou foi movida. Vamos ajudá-la a encontrar o caminho de volta para os nossos cuidados.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="/">Voltar ao Início</a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
