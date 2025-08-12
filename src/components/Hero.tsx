import { Button } from "@/components/ui/button";
import { Play, Star, Users, Calendar, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-eventouch.jpg";
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
              className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Eventos que{" "}
              <span className="bg-gradient-to-r from-primary to-brand-pink bg-clip-text text-transparent">
                Vendem
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-white leading-relaxed max-w-lg drop-shadow-md"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-premium text-lg px-8 py-6 rounded-xl font-semibold hover-lift"
                >
                  Criar Primeiro Evento 🚀
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border text-foreground hover:bg-secondary text-lg px-8 py-6 rounded-xl font-semibold"
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

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Device Mockup */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass-card p-8 rounded-3xl shadow-premium"
              >
                <img
                  src={heroImage}
                  alt="EvenTouch Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>

              {/* Floating Cards */}
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
                className="absolute -top-4 -left-4 glass-card p-4 rounded-2xl shadow-glow"
              >
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--success))' }}>
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                  <div>
                    <div className="font-bold text-foreground">2.847</div>
                    <div className="text-sm text-muted-foreground">Inscritos hoje</div>
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
                className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl shadow-glow"
              >
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--info))' }}>
                      <QrCode className="w-6 h-6 text-primary-foreground" />
                    </div>
                  <div>
                    <div className="font-bold text-foreground">98.5%</div>
                    <div className="text-sm text-muted-foreground">Check-in automático</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;