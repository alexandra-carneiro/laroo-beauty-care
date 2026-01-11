import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Checking if we are in a browser environment
        if (typeof window !== "undefined") {
            const consent = localStorage.getItem("laroo-cookie-consent");

            if (consent === "true") {
                // If already accepted, grant consent to GA4
                if (window.gtag) {
                    window.gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'analytics_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                    });
                }
            } else {
                // If not accepted (or denied/null), show banner
                setIsVisible(true);
            }
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("laroo-cookie-consent", "true");
        setIsVisible(false);

        // Grant consent to GA4 on click
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }
    };

    const declineCookies = () => {
        // User explicitly declined or dismissed
        localStorage.setItem("laroo-cookie-consent", "false");
        setIsVisible(false);
        // We do NOT update gtag consent, so it remains 'denied' (default)
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-4 left-4 z-[100] w-[calc(100%-2rem)] md:w-auto md:max-w-sm"
                >
                    <div className="bg-white/95 backdrop-blur-md border border-border/50 shadow-2xl rounded-xl p-4 flex flex-col gap-3 relative">
                        <button
                            onClick={declineCookies}
                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors absolute top-2 right-2"
                            aria-label="Fechar"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <div className="space-y-1 pr-6">
                            <h3 className="font-display text-base text-foreground">
                                Privacidade
                            </h3>
                            <p className="font-body text-xs text-muted-foreground leading-relaxed">
                                Utilizamos cookies para melhorar a sua experiência. Ao continuar, aceita a nossa{" "}
                                <a href="/politica-privacidade" className="text-primary hover:underline font-medium">
                                    Política de Privacidade
                                </a>.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={acceptCookies}
                                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-8 text-xs transition-colors"
                            >
                                Aceitar
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={declineCookies}
                                className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground h-8 text-xs transition-colors"
                            >
                                Recusar
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
