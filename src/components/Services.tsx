import { useState } from "react";
import serviceOffice from "@/assets/service-office.jpg";
import serviceDeep from "@/assets/service-deep.jpg";
import serviceWindow from "@/assets/service-window.jpg";
import serviceSpecialized from "@/assets/service-specialized.jpg";

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      title: "Napi Takarítás",
      image: serviceOffice,
      description: "Rendszeres, naprakész tisztítás irodák számára. Asztalok, padlók, közös terek teljes körű takarítása professzionális eszközökkel.",
    },
    {
      title: "Nagytakarítás",
      image: serviceDeep,
      description: "Alapos, mélyreható takarítás minden zugban. Szőnyegtisztítás, bútorok tisztítása és fertőtlenítés kiemelt gondossággal.",
    },
    {
      title: "Ablaktisztítás",
      image: serviceWindow,
      description: "Kristálytiszta ablakok belül és kívül. Magasban dolgozó csapatunk biztonságosan takarít minden magasságban.",
    },
    {
      title: "Speciális Szolgáltatások",
      image: serviceSpecialized,
      description: "Konyhai területek, szaniterek és különleges helyiségek szakszerű takarítása. Egyedi igények kielégítése rugalmas megoldásokkal.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Szolgáltatásaink
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Átfogó takarítási megoldások minden vállalkozás számára
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              {/* Front Side */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  flippedCard === index ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Back Side */}
              <div
                className={`absolute inset-0 gradient-primary flex items-center justify-center p-6 transition-all duration-500 ${
                  flippedCard === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
