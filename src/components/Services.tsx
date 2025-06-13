import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Music",
      title: "Ремни для гитар",
      description:
        "Индивидуальные кожаные ремни с персонализацией. Удобные, стильные и долговечные.",
      price: "от 3 500 ₽",
    },
    {
      icon: "Volume2",
      title: "Футляры для скрипок",
      description:
        "Защитные футляры из натуральной кожи. Идеальная посадка для вашего инструмента.",
      price: "от 12 000 ₽",
    },
    {
      icon: "Zap",
      title: "Держатели для палочек",
      description:
        "Компактные и стильные держатели для барабанных палочек из прочной кожи.",
      price: "от 2 000 ₽",
    },
    {
      icon: "Briefcase",
      title: "Чехлы для инструментов",
      description:
        "Защитные чехлы для различных музыкальных инструментов. На заказ по размерам.",
      price: "от 5 000 ₽",
    },
    {
      icon: "Bookmark",
      title: "Ремни для аккордеона",
      description:
        "Специальные ремни для аккордеонов и баянов. Комфорт при длительной игре.",
      price: "от 4 500 ₽",
    },
    {
      icon: "Package",
      title: "Аксессуары на заказ",
      description:
        "Создаем уникальные кожаные аксессуары по вашим эскизам и пожеланиям.",
      price: "договорная",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Создаем кожаные аксессуары для всех видов музыкальных инструментов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-amber-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name={service.icon} size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                {service.title}
              </h3>
              <p className="text-amber-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-900">
                  {service.price}
                </span>
                <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
