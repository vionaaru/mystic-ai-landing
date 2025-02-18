
import { Brain, Network, Signal } from "lucide-react";

const teamMembers = [
  {
    role: "CEO",
    description: "Искусство переговоров и стратегии",
    icon: Brain,
  },
  {
    role: "CTO",
    description: "Архитектор AI-решений",
    icon: Network,
  },
  {
    role: "CCO",
    description: "Идеальный порядок в процессах",
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
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={member.role}
                className="glass-panel rounded-xl p-6 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/20 mb-4 group-hover:animate-glow-pulse">
                    <Icon className="w-8 h-8 text-neon-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                  <p className="text-white/70">{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
