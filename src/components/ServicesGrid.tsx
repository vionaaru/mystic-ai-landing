
import { Server, Microchip, Cloud, Rocket } from "lucide-react";

const services = [
  {
    title: "Разворачиваем локальные LLM",
    description: "На серверах и в частных облаках",
    icon: Server,
  },
  {
    title: "Настраиваем инференс",
    description: "Оптимизируем latency и стоимость",
    icon: Microchip,
  },
  {
    title: "Создаём AI-консультантов",
    description: "Для автоматизации процессов",
    icon: Cloud,
  },
  {
    title: "Подбор и тестирование LLM",
    description: "Согласно бизнес-требованиям",
    icon: Rocket,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Что мы делаем?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-panel rounded-xl p-6 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-neon-purple/10 mr-4 relative before:absolute before:inset-0 before:rounded-lg before:bg-neon-purple/5 before:backdrop-blur-sm before:animate-glow-pulse">
                    <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-neon-purple drop-shadow-[0_0_8px_rgba(183,110,255,0.8)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
