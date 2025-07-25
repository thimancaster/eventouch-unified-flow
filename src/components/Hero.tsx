import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Users, Calendar, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-eventouch.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gradient-subtle text-primary text-sm font-medium">
                🚀 Gerencie eventos como nunca antes
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                O seu evento na
                <span className="bg-brand-gradient bg-clip-text text-transparent"> palma da mão</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Plataforma completa para gerenciar eventos de forma inteligente. 
                Vendas, controle de acesso, relatórios e muito mais em um só lugar.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Eventos Gratuitos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">QR Code + Check-in</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Pagamentos Online</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="animate-bounce-in">
                <Calendar className="w-5 h-5" />
                Criar Meu Primeiro Evento
              </Button>
              
              <Button variant="outline" size="lg" className="animate-slide-up">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Eventos Criados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Participantes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="EvenTouch - Gestão de Eventos" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-card p-4 rounded-lg shadow-lg animate-bounce-in">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Evento Ativo</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-card p-4 rounded-lg shadow-lg animate-bounce-in">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">247</div>
                <div className="text-xs text-muted-foreground">Check-ins hoje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;