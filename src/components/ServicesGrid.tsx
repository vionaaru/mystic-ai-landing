
import { Server, Microchip, Cloud, Rocket } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  {
    title: "Разворачиваем локальные LLM",
    description: "На серверах и в частных облаках",
    tooltip: "Установка и настройка языковых моделей на локальных серверах с учетом требований безопасности и производительности",
    icon: Server,
  },
  {
    title: "Настраиваем инференс",
    description: "Оптимизируем latency и стоимость",
    tooltip: "Оптимизация времени отклика и стоимости обработки запросов с помощью специализированных техник и инструментов",
    icon: Microchip,
  },
  {
    title: "Создаём AI-консультантов",
    description: "Для автоматизации процессов",
    tooltip: "Разработка интеллектуальных ассистентов для автоматизации рутинных задач и улучшения клиентского опыта",
    icon: Cloud,
  },
  {
    title: "Подбор и тестирование LLM",
    description: "Согласно бизнес-требованиям",
    tooltip: "Анализ и выбор оптимальных языковых моделей под конкретные бизнес-задачи с учетом специфики отрасли",
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
          <TooltipProvider>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Tooltip key={service.title}>
                  <TooltipTrigger asChild>
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-purple/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                      <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:scale-105 relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_-5px_rgba(0,0,0,0.4)] animate-glow-pulse">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent/20 neon-border mr-4">
                            <Icon className="w-6 h-6 text-neon-purple" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 gradient-text">{service.title}</h3>
                            <p className="gradient-text">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/80 border-neon-purple text-white p-3 max-w-[300px]">
                    <p>{service.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
