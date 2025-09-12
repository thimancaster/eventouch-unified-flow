import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="rounded-2xl glass-card p-12 text-center border border-primary/20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-blue/5 rounded-2xl"></div>
          
          <div className="relative space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">Entre em contato</h2>
            <p className="text-xl font-medium text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está pronta para ajudar você. Escolha o melhor canal de atendimento para suas necessidades.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" className="bg-gradient-hero hover:shadow-glow text-white text-lg px-10 py-7 rounded-2xl font-bold transition-all duration-300 border border-white/20 group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> 
                Ver números para contato
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
