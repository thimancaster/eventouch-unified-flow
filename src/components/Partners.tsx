import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Server, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Segurança de Ponta",
    description: "Criptografia de ponta e proteção completa de dados pessoais dos seus participantes com conformidade total às leis de proteção de dados.",
  },
  {
    icon: Server,
    title: "Plataforma Robusta",
    description: "Infraestrutura escalável na nuvem com 99.9% de uptime garantido, suportando milhares de eventos simultâneos.",
  },
  {
    icon: Heart,
    title: "Suporte que Encanta",
    description: "Atendimento humanizado 24/7 e onboarding completo para seu sucesso garantido, com equipe especializada disponível a qualquer momento.",
  },
];

const Partners = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="trust" className="py-20 bg-background">
      <div className="container">
        <motion.header 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Criado para a sua <span className="gradient-text">Segurança e Sucesso</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnologia de ponta, segurança premium e suporte excepcional para garantir o sucesso dos seus eventos
          </p>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-8">
          {trustCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass-card hover-lift h-full transition-all duration-300 hover:shadow-glow border border-primary/10 group">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-brand-blue/20 group-hover:from-primary/30 group-hover:to-brand-blue/30 transition-all duration-300">
                    <card.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;