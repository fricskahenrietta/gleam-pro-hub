import { useEffect, useState } from "react";
import parallaxImage from "@/assets/parallax-office.jpg";

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(100 - window.scrollY / 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[400px] overflow-hidden">
      <div
        className="absolute left-0 w-full"
        style={{
          top: "-50px",
          height: "calc(100% + 400px)",
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export default Parallax;
