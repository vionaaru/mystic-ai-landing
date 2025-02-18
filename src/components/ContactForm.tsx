
import { useState } from "react";
import { toast } from "sonner";

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
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Готовы запустить локальный AI?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg glass-panel focus:neon-border outline-none transition-all"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg glass-panel focus:neon-border outline-none transition-all"
              required
            />
            <textarea
              placeholder="Ваш запрос"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg glass-panel focus:neon-border outline-none transition-all min-h-[120px]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-accent rounded-lg neon-border transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-medium"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
