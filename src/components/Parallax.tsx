import { useEffect, useState } from "react";
import parallaxImage from "@/assets/parallax-office.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setScrollY(0);
      return;
    }

    const handleScroll = () => {
      setScrollY(100 - window.scrollY / 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section className="relative h-80 md:h-[400px] overflow-hidden">
      <div
        className="absolute left-0 w-full"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...(!isMobile && {
            top: "-50px",
            height: "calc(100% + 100px)",
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }),
          ...(isMobile && {
            height: "100%",
            top: "0",
          }),
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export default Parallax;