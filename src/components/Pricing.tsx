import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    commission: "",
    description: "Perfeito para começar e testar a plataforma",
    features: [
      "Até 50 participantes por evento",
      "Gestão básica de inscrições",
      "Suporte por email",
      "Templates básicos",
      "Relatórios simples"
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Premium",
    price: "R$ 97",
    commission: "5% por venda",
    description: "Para eventos profissionais e organizadores sérios",
    features: [
      "Participantes ilimitados",
      "Gestão completa do evento",
      "Check-in automático com QR Code",
      "Pagamentos integrados (Pix, Cartão)",
      "WhatsApp Marketing automático",
      "Crachás personalizados",
      "Analytics avançados",
      "Suporte prioritário 24/7",
      "API e integrações",
      "Templates premium"
    ],
    cta: "Começar Teste Grátis",
    popular: true,
  },
  {
    name: "Anual",
    price: "R$ 9",
    commission: "5% por venda",
    description: "Economia máxima com pagamento anual",
    features: [
      "Tudo do Premium",
      "Desconto de 25% (12 meses)",
      "Suporte prioritário premium",
      "Relatórios anuais detalhados",
      "Backup automático mensal",
      "Integração com contador",
      "Certificado SSL premium",
      "Domínio personalizado incluído"
    ],
    cta: "Começar Plano Anual",
    popular: false,
  },
];

const Pricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Preços</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black gradient-text leading-tight tracking-tight">
            Escolha seu plano
          </h2>
          
          <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Comece grátis e escale conforme seu sucesso. Sem taxas de setup, sem surpresas.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`relative h-full transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-to-b from-card to-primary/5 hover:shadow-premium scale-105' 
                  : 'border-border glass-card hover-lift hover:border-primary/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-hero text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-6 pt-8">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">{plan.description}</CardDescription>
                  </div>
                  
                  <div className="space-y-2">
                     <div className="text-5xl font-black text-foreground">
                       {plan.price}
                       {plan.name === "Premium" && <span className="text-xl font-medium text-muted-foreground">/mês</span>}
                       {plan.name === "Anual" && <span className="text-xl font-medium text-muted-foreground">/mês</span>}
                     </div>
                    {plan.commission && (
                      <p className="text-sm text-muted-foreground">+ {plan.commission}</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-success flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button 
                      className={`w-full py-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-hero hover:shadow-glow text-white border border-white/20' 
                          : 'bg-secondary hover:bg-primary hover:text-white border border-primary/30 hover:border-primary/50'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Sem taxa de setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;