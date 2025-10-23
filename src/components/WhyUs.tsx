import { CheckCircle2, Users, Award, HeartHandshake } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Ellenőrzött Minőség",
      description: "Minden takarítás után részletes minőségellenőrzést végzünk, garantálva a legmagasabb színvonalat.",
    },
    {
      icon: Users,
      title: "Képzett Szakemberek",
      description: "Csapatunk rendszeres képzéseken vesz részt, mindig naprakész a legújabb takarítási technikákkal.",
    },
    {
      icon: Award,
      title: "10+ Év Tapasztalat",
      description: "Több mint egy évtizedes tapasztalattal rendelkezünk az irodatakarítás területén.",
    },
    {
      icon: HeartHandshake,
      title: "Ügyfél-orientált",
      description: "Az Ön igényei a legfontosabbak számunkra. Rugalmas és személyre szabott megoldásokat kínálunk.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
