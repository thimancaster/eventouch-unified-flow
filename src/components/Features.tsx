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
          className="text-center space-y-6 max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Funcionalidades Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">
            Tudo que você precisa
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Plataforma completa com todas as ferramentas para criar eventos inesquecíveis.
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
              <Card className="glass-card border-0 hover-lift group h-full">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
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
          className="text-center space-y-8"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Pronto para revolucionar seus eventos?
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:shadow-glow text-lg px-8 py-6 rounded-xl font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Começar Agora - É Grátis
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-xl font-semibold hover-lift"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;