import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quais são os horários do suporte?",
    a: "Nosso suporte funciona em horário comercial com monitoramento emergencial 24/7 para eventos ao vivo.",
  },
  {
    q: "Como tiro minhas dúvidas sobre o sistema?",
    a: "Você pode acessar nossa central de ajuda ou falar com nosso time via WhatsApp.",
  },
  {
    q: "Desejo criar meu primeiro evento, como devo prosseguir?",
    a: "Clique em 'Criar meu evento' e siga o passo a passo do assistente inicial.",
  },
  {
    q: "Eventos gratuitos possuem algum custo?",
    a: "Não. Somente eventos pagos têm taxa de serviço.",
  },
  {
    q: "Quando posso começar a divulgar meu evento?",
    a: "Assim que publicar o evento, você já pode compartilhar o link de inscrições.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Dúvidas <span className="gradient-text">frequentes</span></h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Encontre respostas para as perguntas mais comuns</p>
        </header>

        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
