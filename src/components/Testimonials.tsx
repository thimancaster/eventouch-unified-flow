import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elaine Santos",
    role: "Inscrita",
    text: "A plataforma é muito boa, nos ajuda muito e é segura!",
  },
  {
    name: "Hudson Viana",
    role: "Organizador",
    text: "Formato intuitivo e fácil. Inscrição online é super rápida!",
  },
  {
    name: "Pamela Santos Kurst",
    role: "Organizadora",
    text: "Indico para todos. Sistema prático e moderno, com excelente atendimento!",
  },
  {
    name: "Pedro Afonso Dornelas Marcato",
    role: "Inscrito",
    text: "Inscrição simples e rápida. Navegação intuitiva!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Depoimentos <span className="gradient-text">dos nossos irmãos!</span></h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Veja o que líderes e organizadores falam sobre nossa plataforma</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground">“{t.text}”</blockquote>
                <div className="pt-2">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border bg-background hover:bg-secondary transition-colors">
            Depoimentos em vídeo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
