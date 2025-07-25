import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">EvenTouch</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Funcionalidades
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              Entrar
            </Button>
            <Button variant="brand">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Funcionalidades
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Preços
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="ghost" className="w-full">
                Entrar
              </Button>
              <Button variant="brand" className="w-full">
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;