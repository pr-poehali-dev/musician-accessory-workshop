import { useState } from "react";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    instrument: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Готовы создать уникальный аксессуар для вашего инструмента?
            Свяжитесь с нами!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-8">
              Запись на консультацию
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Инструмент
                </label>
                <select
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Выберите инструмент</option>
                  <option value="guitar">Гитара</option>
                  <option value="bass">Бас-гитара</option>
                  <option value="violin">Скрипка</option>
                  <option value="drums">Барабаны</option>
                  <option value="accordion">Аккордеон</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашей идее или задайте вопрос..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg font-semibold flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={20} />
                Отправить заявку
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-8">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">
                      Адрес мастерской
                    </h4>
                    <p className="text-amber-700">
                      г. Москва, ул. Ремесленная, 15
                      <br />
                      ст. м. Курская
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Телефон</h4>
                    <p className="text-amber-700">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">
                      Режим работы
                    </h4>
                    <p className="text-amber-700">
                      Пн-Пт: 10:00 - 19:00
                      <br />
                      Сб: 11:00 - 17:00
                      <br />
                      Вс: выходной
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Email</h4>
                    <p className="text-amber-700">info@muzkozha.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-amber-900 mb-4">
                Социальные сети
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-amber-700 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-amber-700 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-amber-700 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Icon name="Phone" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
