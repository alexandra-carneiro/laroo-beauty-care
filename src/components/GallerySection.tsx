import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const photos = [
    { src: "/company-photos/portfolio/Galeria 1.jpeg", alt: "Trabalho de Unhas" },
    { src: "/company-photos/portfolio/Galeria 2.jpeg", alt: "Trabalho de Unhas Detalhe" },
    { src: "/company-photos/portfolio/Galeria 3.jpeg", alt: "Ambiente" },
    { src: "/company-photos/portfolio/detalhes loja 1.jpeg", alt: "Detalhes do Espaço" },
    { src: "/company-photos/portfolio/pestanas 1.jpeg", alt: "Trabalho de Pestanas" },
    { src: "/company-photos/portfolio/frente de loja.jpeg", alt: "Frente da Loja" },
];

const GallerySection = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    // Reset zoom when closing
    const handleClose = () => {
        setSelectedPhoto(null);
        setIsZoomed(false);
    };

    return (
        <section className="bg-background min-h-[calc(100svh-5rem)] flex flex-col justify-start pt-10 pb-16 md:pt-12 md:pb-20">
            <div className="container">
                <div className="text-center mb-6">
                    <p className="font-display text-3xl md:text-4xl italic text-terracotta mb-2">
                        Nosso Portfólio
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                        Clique na imagem para ampliar
                    </p>
                </div>

                <div className="max-w-full px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {photos.map((photo, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <button
                                            onClick={() => setSelectedPhoto(photo)}
                                            className="w-full overflow-hidden rounded-2xl aspect-[3/4] shadow-md border border-border/50 cursor-zoom-in group relative outline-none focus:ring-2 focus:ring-primary/50"
                                        >
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </button>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && handleClose()}>
                        <DialogContent className="max-w-[95vw] max-h-[90vh] p-0 bg-transparent border-none shadow-none z-[9999] flex items-center justify-center">
                            {selectedPhoto && (
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className={`relative transition-all duration-300 ${isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`}
                                        onClick={() => setIsZoomed(!isZoomed)}>
                                        <img
                                            src={selectedPhoto.src}
                                            alt={selectedPhoto.alt}
                                            className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                                        />
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className="absolute -top-12 right-0 md:-right-12 text-white hover:text-gray-300 transition-colors p-2 z-[10000]"
                                        aria-label="Fechar"
                                    >
                                        <X className="w-10 h-10 drop-shadow-lg" />
                                    </button>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
