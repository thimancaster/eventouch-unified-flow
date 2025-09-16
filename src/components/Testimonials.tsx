import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Elaine Santos",
    role: "Organizadora de Eventos",
    text: "A plataforma é muito boa, nos ajuda muito e é segura! Conseguimos triplicar nossas vendas em apenas 2 meses.",
  },
  {
    name: "Hudson Viana",
    role: "Event Manager",
    text: "Formato intuitivo e fácil. Inscrição online é super rápida! Nossos participantes adoraram a experiência.",
  },
  {
    name: "Pamela Santos",
    role: "Coordenadora de Marketing",
    text: "Indico para todos. Sistema prático e moderno, com excelente atendimento! ROI impressionante.",
  },
  {
    name: "Pedro Marcato",
    role: "Diretor Comercial",
    text: "Inscrição simples e rápida. Navegação intuitiva! Reduzimos 80% do tempo de gestão de eventos.",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black gradient-text leading-tight tracking-tight">
            O que nossos clientes dizem
          </h2>
          
          <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Histórias reais de organizadores que transformaram seus eventos conosco
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card p-8 h-full hover-lift transition-all duration-300 hover:shadow-glow border border-primary/10 relative overflow-hidden group">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative">
                  <CardContent className="space-y-6 p-0">
                    <div className="flex items-center gap-1 text-warning">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg font-medium leading-relaxed text-foreground italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow text-white text-lg px-10 py-7 rounded-2xl font-bold transition-all duration-300 border border-white/20 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Veja mais histórias de sucesso
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;