import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CalendarDays } from "lucide-react";

const events = [
  {
    title: "COJARSUL 2025",
    subtitle: "Congresso Jovem Regional Sul",
    status: "Inscrições abertas",
    color: "from-success to-brand-blue",
  },
  {
    title: "Projeto Experiência ao Extremo",
    subtitle: "Imersão 10/40",
    status: "Inscrições abertas",
    color: "from-brand-blue to-brand-pink",
  },
  {
    title: "Casa de Noemi",
    subtitle: "Evento Distrital",
    status: "Inscrições abertas",
    color: "from-primary to-brand-blue",
  },
];

const FeaturedEvents = () => {
  return (
    <section id="featured" className="py-20 bg-background">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Eventos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Descubra os próximos eventos que estão movimentando as comunidades pelo Brasil
          </p>
        </header>

        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent>
              {events.map((ev, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0">
                      <div className={`relative h-44 bg-gradient-to-br ${ev.color}`}>
                        <Badge className="absolute top-3 left-3 bg-background text-foreground shadow-soft">
                          {ev.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="mb-1">{ev.title}</CardTitle>
                      <p className="text-muted-foreground flex items-center gap-2 text-sm">
                        <CalendarDays className="w-4 h-4" /> {ev.subtitle}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="ml-auto" variant="default">Acessar Evento</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
