
import { useEffect, useRef } from "react";
import { Cpu } from "lucide-react";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const text = title.textContent || "";
    title.textContent = "";
    
    const letters = text.split("").map((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${i * 0.05}s`;
      span.className = "inline-block opacity-0 animate-text-reveal";
      return span;
    });

    letters.forEach(letter => title.appendChild(letter));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="parallax-bg" />
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-6 inline-flex items-center justify-center px-4 py-2 glass-panel rounded-full">
          <Cpu className="w-4 h-4 mr-2 text-neon-purple" />
          <span className="text-sm font-medium">LLMOps Experts</span>
        </div>
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight"
        >
          Освобождая силу локальных LLM: AI, который принадлежит вам
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Мы превращаем искусственный интеллект в ваш стратегический актив. Подбор, развертывание, оптимизация.
        </p>
        <button className="px-8 py-4 bg-accent rounded-lg neon-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Начать сотрудничество
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
