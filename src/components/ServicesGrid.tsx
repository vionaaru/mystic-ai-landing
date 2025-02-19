
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
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-purple/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:scale-105 neon-border relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_-5px_rgba(0,0,0,0.4)]">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent/20 group-hover:animate-glow-pulse mr-4">
                      <Icon className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 gradient-text">{service.title}</h3>
                      <p className="gradient-text">{service.description}</p>
                    </div>
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
