import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pt-20 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Кожаные аксессуары для
              <span className="text-amber-700"> музыкантов</span>
            </h1>

            <p className="text-xl text-amber-800 leading-relaxed">
              Создаем уникальные кожаные аксессуары для ваших инструментов.
              Ремни для гитар, футляры для скрипок, держатели для барабанных
              палочек — всё ручной работы с душой мастера.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg font-semibold flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                Записаться на консультацию
              </button>
              <button className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-700 hover:text-white transition-colors text-lg font-semibold flex items-center gap-2">
                <Icon name="Eye" size={20} />
                Посмотреть работы
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">500+</div>
                <div className="text-amber-700">Довольных музыкантов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">15</div>
                <div className="text-amber-700">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">100%</div>
                <div className="text-amber-700">Ручная работа</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-amber-200 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop"
                alt="Кожаная мастерская"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-500 fill-current"
                  />
                  <span className="font-bold text-amber-900">4.9/5</span>
                </div>
                <div className="text-sm text-amber-700">Отзывы клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
