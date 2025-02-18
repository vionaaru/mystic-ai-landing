
import { useState, useEffect, useRef } from "react";
import { Send, Bot } from "lucide-react";

const AIChatDemo = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isAi: boolean }>>([
    { text: "Здравствуйте! Я AI-ассистент. Как я могу помочь вам?", isAi: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = async () => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setMessages(prev => [...prev, {
      text: "Спасибо за ваш вопрос! Я специализируюсь на помощи бизнесу в развертывании и оптимизации локальных LLM-моделей. Как я могу помочь вашей компании?",
      isAi: true
    }]);
    setIsTyping(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { text: inputValue, isAi: false }]);
    setInputValue("");
    await simulateAIResponse();
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="parallax-bg opacity-50" />
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Испытайте силу автономного AI
        </h2>
      </div>
      <div className="max-w-2xl mx-auto relative">
        <div className="glass-panel rounded-2xl p-4 neon-border animate-glow-pulse">
          <div className="h-[400px] overflow-y-auto mb-4 space-y-4 p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.isAi ? "" : "flex-row-reverse"
                }`}
              >
                {message.isAi && (
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-neon-purple" />
                  </div>
                )}
                <div
                  className={`${
                    message.isAi
                      ? "bg-accent/20 rounded-tr-2xl"
                      : "bg-neon-purple/20 rounded-tl-2xl"
                  } rounded-b-2xl px-4 py-2 max-w-[80%] animate-fade-in`}
                >
                  <p className="text-sm md:text-base">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-neon-purple" />
                </div>
                <div className="bg-accent/20 rounded-tr-2xl rounded-b-2xl px-4 py-2">
                  <p className="text-sm">AI печатает...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите ваш вопрос..."
              className="flex-1 px-4 py-2 rounded-lg glass-panel focus:neon-border outline-none transition-all"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-accent rounded-lg neon-border transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChatDemo;
