import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Plano Premium",
    price: "5%",
    note: "mínimo de R$ 3,00 por inscrição",
    features: [
      "Gestão completa do evento",
      "Acompanhamento das inscrições",
      "Suporte ao organizador",
      "Notificações e mensagens",
      "Pagamento via pix ou cartão",
    ],
    highlight: true,
  },
  {
    name: "Eventos Gratuitos",
    price: "R$ 0,00",
    note: "",
    features: [
      "Gestão completa do evento",
      "Acompanhamento das inscrições",
      "Suporte ao organizador",
      "Notificações e mensagens",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nossos <span className="gradient-text">planos</span></h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <Card key={p.name} className={p.highlight ? "ring-1 ring-brand-blue" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{p.name}</CardTitle>
                <div className="text-muted-foreground">
                  <div className="text-xl font-semibold">{p.price}</div>
                  {p.note && <div className="text-sm">{p.note}</div>}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-success" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={p.highlight ? "default" : "outline"} className="mt-6 w-full">
                  Escolher plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
