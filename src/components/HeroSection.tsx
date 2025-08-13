import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    setMounted(true);

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative section-padding overflow-hidden"
    >
      {/* Background floating particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0
                ? "w-3 h-3 bg-primary"
                : i % 3 === 1
                ? "w-2 h-2 bg-accent"
                : "w-1 h-1 bg-primary-glow"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Available for opportunities badge */}
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full glass mb-8 max-w-full transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
          <span className="text-sm text-foreground text-center">
            Available for exciting opportunities
          </span>
        </div>

        {/* Main content */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-space-grotesk text-gradient-primary">
            Purvi Dhaigude
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span className="font-mono border-r-2 border-primary animate-pulse pr-2">
              {typedText}
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Fourth-Year B.Tech Computer Science student with strong foundation in
            frontend web development and passion for creating responsive,
            user-friendly interfaces. Proficient in HTML, CSS, JavaScript, and
            React.js.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>8817584994</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>purvi31dhaigude2005@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin className="w-5 h-5" />
              <span>Indore</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button
              onClick={() => scrollToSection("projects")}
              className="btn-hero"
            >
              View My Work
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="btn-outline-hero"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/purvi-dhaigude-6669b0271/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="btn-outline-hero"
                asChild
              >
                <a
                  href="https://github.com/Purvidhaigude"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div
          className="flex flex-col items-center text-muted-foreground cursor-pointer group"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-sm mb-2 group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <ArrowDown className="w-6 h-6 group-hover:text-primary transition-colors group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
