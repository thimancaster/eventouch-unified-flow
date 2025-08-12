const logos = [
  { name: "Catedral Cristo Rei", src: "/placeholder.svg" },
  { name: "Igreja Metodista", src: "/placeholder.svg" },
  { name: "Igreja Adventista", src: "/placeholder.svg" },
  { name: "Igreja Presbiteriana do Brasil", src: "/placeholder.svg" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Igrejas <span className="gradient-text">parceiras</span></h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Igrejas de diversas denominações já confiam em nossa plataforma</p>
        </header>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {logos.map((logo) => (
            <li key={logo.name} className="rounded-lg border bg-card p-6 shadow-soft flex items-center justify-center">
              <img
                src={logo.src}
                alt={`Logo ${logo.name}`}
                loading="lazy"
                className="w-28 h-16 object-contain opacity-80"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
