import { Button } from "@/components/ui/button";
import { Play, Star, Users, Calendar, QrCode } from "lucide-react";
import MacBookMockup from "./MacBookMockup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
      <section className="relative min-h-screen bg-hero-soft overflow-hidden">
        {/* Contrast Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: 'hsl(var(--primary) / 0.15)',
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full"
            >
              <Star className="w-4 h-4" style={{ color: "hsl(var(--warning))" }} />
              <span className="text-sm font-medium text-foreground">Produto #1 em Gestão de Eventos</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight"
              style={{ 
                color: 'white',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                letterSpacing: '-0.02em'
              }}
            >
              Eventos que{" "}
              <span 
                className="relative inline-block gradient-text"
                style={{
                  textShadow: '0 0 40px hsla(var(--primary)/0.8), 0 0 80px hsla(var(--primary)/0.4)',
                  filter: 'drop-shadow(0 4px 12px hsla(var(--primary)/0.9)) drop-shadow(0 2px 6px hsla(var(--primary)/0.7))',
                  WebkitTextStroke: '1px hsla(var(--primary)/0.5)',
                  fontWeight: '900'
                }}
              >
                Vendem
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-medium leading-relaxed max-w-lg"
              style={{ 
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)',
                lineHeight: '1.6'
              }}
            >
              A plataforma completa para transformar seus eventos em experiências inesquecíveis e lucros extraordinários.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Calendar, text: "Setup em 5min" },
                { icon: QrCode, text: "Check-in Automático" },
                { icon: Users, text: "Ilimitados Participantes" },
              ].map((feature, index) => (
                <div key={index} className="glass-card px-4 py-2 rounded-full flex items-center space-x-2">
                  <feature.icon className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/95 hover:shadow-glow text-lg px-10 py-7 rounded-2xl font-bold transition-all duration-300 shadow-premium border border-white/20"
                >
                  Criar Primeiro Evento 🚀
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
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md text-lg px-10 py-7 rounded-2xl font-bold transition-all duration-300 hover:border-white/50"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo (2min)
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-brand-pink border-2 border-card"
                  />
                ))}
              </div>
                <div className="">
                  <div className="font-semibold text-foreground">+2.500 organizadores</div>
                  <div className="text-sm text-muted-foreground">confiam no EvenTouch</div>
                </div>
            </motion.div>
          </div>

          {/* Right Column - MacBook Mockup */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <MacBookMockup className="max-w-lg">
              {/* Miniature Landing Page Preview */}
              <div className="bg-hero-soft h-full overflow-hidden relative">
                {/* Mini Hero Overlay */}
                <div className="absolute inset-0 hero-overlay"></div>
                
                {/* Mini Header */}
                <div className="relative flex items-center justify-between px-3 py-1.5 bg-background/90 backdrop-blur-md border-b border-white/10">
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-gradient-hero rounded-full"></div>
                    <span className="text-[7px] font-bold text-white">EvenTouch</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="px-1.5 py-0.5 bg-primary/80 rounded text-[5px] text-white font-bold">Grátis</div>
                  </div>
                </div>
                
                {/* Mini Hero Content */}
                <div className="relative px-3 py-4 space-y-2">
                  <div className="inline-flex items-center space-x-1 glass-card px-1.5 py-0.5 rounded-full">
                    <Star className="w-1.5 h-1.5 text-warning" />
                    <span className="text-[5px] font-medium text-white">#1 em Eventos</span>
                  </div>
                  
                  <h1 className="text-[10px] font-black leading-tight text-white">
                    Eventos que{" "}
                    <span className="gradient-text" style={{
                      textShadow: '0 0 20px hsla(var(--primary)/0.8)',
                      WebkitTextStroke: '0.5px hsla(var(--primary)/0.3)'
                    }}>
                      Vendem
                    </span>
                  </h1>
                  
                  <p className="text-[6px] text-white/90 leading-relaxed">
                    Plataforma completa para eventos inesquecíveis
                  </p>
                  
                  <div className="flex flex-wrap gap-0.5">
                    <div className="glass-card px-1.5 py-0.5 rounded-full flex items-center space-x-0.5">
                      <Calendar className="w-1 h-1 text-white" />
                      <span className="text-[5px] font-medium text-white">Setup 5min</span>
                    </div>
                    <div className="glass-card px-1.5 py-0.5 rounded-full flex items-center space-x-0.5">
                      <QrCode className="w-1 h-1 text-white" />
                      <span className="text-[5px] font-medium text-white">Check-in Auto</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1.5 pt-1">
                    <div className="bg-white text-primary px-2 py-0.5 rounded-lg text-[6px] font-bold">
                      Criar Evento 🚀
                    </div>
                    <div className="border border-white/30 text-white px-2 py-0.5 rounded-lg text-[6px] font-bold flex items-center space-x-0.5">
                      <Play className="w-1 h-1" />
                      <span>Demo</span>
                    </div>
                  </div>
                </div>
              </div>
            </MacBookMockup>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-8 -left-8 glass-card p-3 rounded-xl shadow-glow"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--success))' }}>
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">2.847</div>
                  <div className="text-xs text-muted-foreground">Inscritos hoje</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-8 -right-8 glass-card p-3 rounded-xl shadow-glow"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--info))' }}>
                  <QrCode className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">98.5%</div>
                  <div className="text-xs text-muted-foreground">Check-in automático</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;