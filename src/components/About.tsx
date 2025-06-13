import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-amber-100 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-amber-900">
              О нашем мастерстве
            </h2>

            <p className="text-xl text-amber-800 leading-relaxed">
              Вот уже 15 лет мы создаем уникальные кожаные аксессуары для
              музыкантов. Каждое изделие — это результат многолетнего опыта,
              внимания к деталям и понимания потребностей музыкантов.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Качественные материалы
                  </h3>
                  <p className="text-amber-700">
                    Используем только натуральную кожу высшего качества от
                    проверенных поставщиков.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Индивидуальный подход
                  </h3>
                  <p className="text-amber-700">
                    Каждый заказ обсуждаем лично, учитываем все пожелания и
                    особенности инструмента.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    Опыт и традиции
                  </h3>
                  <p className="text-amber-700">
                    Сочетаем традиционные техники кожевенного ремесла с
                    современными требованиями музыкантов.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg font-semibold flex items-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Связаться с мастером
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=300&h=400&fit=crop"
                alt="Работа с кожей"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
                alt="Музыкальные инструменты"
                className="w-full h-40 object-cover rounded-2xl mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
                alt="Кожевенные инструменты"
                className="w-full h-40 object-cover rounded-2xl -mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=400&fit=crop"
                alt="Музыкант с гитарой"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
