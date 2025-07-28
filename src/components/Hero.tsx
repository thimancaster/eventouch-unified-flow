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
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-white">Produto #1 em Gestão de Eventos</span>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
            >
              Eventos que{" "}
              <span className="gradient-text bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Vendem
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-white/90 leading-relaxed max-w-lg"
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
                  <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">{feature.text}</span>
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
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-semibold"
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
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-pink-400 border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-white">
                <div className="font-semibold">+2.500 organizadores</div>
                <div className="text-sm text-white/80">confiam no EvenTouch</div>
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
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">2.847</div>
                    <div className="text-sm text-white/80">Inscritos hoje</div>
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
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">98.5%</div>
                    <div className="text-sm text-white/80">Check-in automático</div>
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