
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="parallax-bg opacity-30" />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Готовы запустить локальный AI?
          </h2>
          <p className="text-lg text-white/80">
            Оставьте заявку, и мы поможем вам начать работу с локальными LLM-моделями
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-neon-purple transition-all duration-300 outline-none placeholder:text-white/50 group-hover:border-neon-purple/50"
                required
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl" />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-neon-purple transition-all duration-300 outline-none placeholder:text-white/50 group-hover:border-neon-purple/50"
                required
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl" />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Ваш запрос"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-neon-purple transition-all duration-300 outline-none placeholder:text-white/50 group-hover:border-neon-purple/50 min-h-[120px] resize-y"
                required
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-neon-purple rounded-lg relative group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(183,110,255,0.5)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-purple/0 before:via-white/10 before:to-neon-purple/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500"
          >
            <span className="relative flex items-center justify-center gap-2 text-lg font-medium">
              <Send className="w-5 h-5" />
              Отправить заявку
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
