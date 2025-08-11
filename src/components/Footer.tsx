import { Heart, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EvenTouch</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A plataforma que coloca seu evento na palma da mão. 
              Gestão inteligente, simples e acessível para todos.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Preços</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrações</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Segurança</a></li>
            </ul>
          </div>

          {/* Recursos & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cases de Sucesso</a></li>
            </ul>
            <div>
              <h5 className="font-medium text-foreground mb-2">Siga-nos</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                  <span className="text-xs font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-success hover:text-white transition-all">
                  <span className="text-xs font-bold">@</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 EvenTouch. Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;