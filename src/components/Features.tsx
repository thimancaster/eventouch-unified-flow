import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  CreditCard, 
  QrCode, 
  MessageSquare, 
  FileImage,
  BarChart3,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Calendar,
      title: "Gestão Completa de Eventos",
      description: "Crie, edite e gerencie eventos com facilidade total. Interface intuitiva e poderosa.",
      color: "from-purple-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: QrCode,
      title: "Check-in Automático",
      description: "QR codes únicos para cada participante. Check-in instantâneo via app ou webcam.",
      color: "from-blue-500 to-blue-600",
      delay: 0.2
    },
    {
      icon: CreditCard,
      title: "Pagamentos Integrados",
      description: "Pix, cartão, boleto. Receba automaticamente com tarifas transparentes.",
      color: "from-green-500 to-green-600",
      delay: 0.3
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      description: "Envie confirmações, lembretes e atualizações automaticamente via WhatsApp.",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.4
    },
    {
      icon: FileImage,
      title: "Crachás Personalizados",
      description: "Gere crachás com QR code, nome e função. Envie por email ou imprima.",
      color: "from-orange-500 to-orange-600",
      delay: 0.5
    },
    {
      icon: BarChart3,
      title: "Relatórios Inteligentes",
      description: "Analytics completo: vendas, presença, ROI e muito mais em tempo real.",
      color: "from-cyan-500 to-cyan-600",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Funcionalidades Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black gradient-text leading-tight tracking-tight">
            Tudo que você precisa
          </h2>
          
          <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Plataforma completa com todas as ferramentas para criar eventos inesquecíveis e lucrativos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <Card className="glass-card border-0 hover-lift group h-full transition-all duration-300 hover:shadow-glow">
                <CardHeader className="space-y-6 pb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-premium group-hover:scale-110 transition-all duration-300 relative`}>
                    <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center space-y-10"
        >
          <div className="glass-card p-16 rounded-3xl max-w-5xl mx-auto border border-primary/20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-blue/5 rounded-3xl"></div>
            
            <div className="relative space-y-8">
              <h3 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Pronto para revolucionar seus eventos?
              </h3>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Junte-se a milhares de organizadores que já transformaram seus eventos com nossa plataforma.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-hero hover:shadow-glow text-white text-lg px-10 py-7 rounded-2xl font-bold transition-all duration-300 border border-white/20"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Começar Agora - É Grátis
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-primary/30 text-foreground hover:bg-primary/10 backdrop-blur-md text-lg px-10 py-7 rounded-2xl font-bold transition-all duration-300 hover:border-primary/50"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Agendar Demonstração
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;