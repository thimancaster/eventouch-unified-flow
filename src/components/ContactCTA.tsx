import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="rounded-2xl bg-secondary p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Entre em contato</h2>
          <p className="text-muted-foreground mb-6">Nossa equipe está pronta para ajudar você. Escolha o melhor canal de atendimento.</p>
          <Button size="lg" className="inline-flex items-center gap-2">
            <MessageCircle className="w-5 h-5" /> Ver números para contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
