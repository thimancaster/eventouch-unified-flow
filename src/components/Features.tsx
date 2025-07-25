import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  QrCode, 
  CreditCard, 
  MessageSquare, 
  FileText, 
  Users,
  BarChart3,
  Zap,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Gestão Completa de Eventos",
      description: "Crie, organize e gerencie múltiplos eventos em uma única plataforma. Controle total sobre datas, locais e categorias.",
      color: "text-brand-purple"
    },
    {
      icon: QrCode,
      title: "QR Code & Check-in",
      description: "Gere QR codes únicos para cada participante e faça check-ins instantâneos via aplicativo ou webcam.",
      color: "text-brand-blue"
    },
    {
      icon: CreditCard,
      title: "Pagamentos Online",
      description: "Aceite pagamentos via Pix, boleto e cartão. Controle financeiro completo com relatórios automáticos.",
      color: "text-success"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integrado",
      description: "Envie confirmações, lembretes e atualizações automáticas via WhatsApp. Suporte direto aos participantes.",
      color: "text-warning"
    },
    {
      icon: FileText,
      title: "Crachás Personalizados",
      description: "Crie crachás profissionais com nome, função e QR code. Envie por email ou gere PDFs para impressão.",
      color: "text-info"
    },
    {
      icon: Users,
      title: "Painel do Participante",
      description: "Cada inscrito tem acesso ao próprio painel com ingresso digital, detalhes do evento e horários.",
      color: "text-brand-purple"
    },
    {
      icon: BarChart3,
      title: "Relatórios Inteligentes",
      description: "Acompanhe métricas em tempo real: vendas, check-ins, receitas e muito mais. Dashboard completo.",
      color: "text-brand-blue"
    },
    {
      icon: Zap,
      title: "Modelo Freemium",
      description: "Eventos gratuitos usam a plataforma sem custo. Pague apenas pelos recursos extras que precisar.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Seguro & Confiável",
      description: "Dados protegidos, pagamentos seguros e backup automático. Sua informação sempre segura.",
      color: "text-warning"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gradient-subtle text-primary text-sm font-medium mb-4">
            ⚡ Funcionalidades Poderosas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa para
            <span className="bg-brand-gradient bg-clip-text text-transparent"> eventos perfeitos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa que simplifica cada etapa do seu evento, 
            desde o planejamento até a execução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-background to-muted flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-brand-gradient-subtle p-8 rounded-2xl border border-brand-purple/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para revolucionar seus eventos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Junte-se a centenas de organizadores que já transformaram a gestão dos seus eventos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Começar Agora - É Grátis
              </button>
              <button className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;