
import { Brain, Network, Signal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const teamMembers = [
  {
    role: "CEO",
    description: "Искусство переговоров и стратегии",
    tooltip: "Управление компанией, развитие бизнеса и построение долгосрочных партнерских отношений",
    icon: Brain,
  },
  {
    role: "CTO",
    description: "Архитектор AI-решений",
    tooltip: "Техническая экспертиза в области LLM, оптимизация производительности и масштабирование систем",
    icon: Network,
  },
  {
    role: "CCO",
    description: "Идеальный порядок в процессах",
    tooltip: "Координация проектов, оптимизация рабочих процессов и обеспечение качества сервиса",
    icon: Signal,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Мы – LLMOps-эксперты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TooltipProvider>
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <Tooltip key={member.role}>
                  <TooltipTrigger asChild>
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-purple/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                      <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:scale-105 neon-border relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_-5px_rgba(0,0,0,0.4)]">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/20 mb-4 group-hover:animate-glow-pulse">
                            <Icon className="w-8 h-8 text-neon-purple" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 gradient-text">{member.role}</h3>
                          <p className="gradient-text">{member.description}</p>
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/80 border-neon-purple text-white p-3 max-w-[300px]">
                    <p>{member.tooltip}</p>
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

export default TeamSection;
