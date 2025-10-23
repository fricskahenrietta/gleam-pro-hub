import { useEffect, useState } from "react";
import parallaxImage from "@/assets/parallax-office.jpg";

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-96 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tisztaság, Amire Számíthat
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Több mint 500 elégedett ügyfél tapasztalata
          </p>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
