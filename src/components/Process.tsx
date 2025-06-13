import Icon from "@/components/ui/icon";

const Process = () => {
  const steps = [
    {
      icon: "MessageSquare",
      title: "Консультация",
      description:
        "Обсуждаем ваши пожелания, особенности инструмента и выбираем материалы",
    },
    {
      icon: "Ruler",
      title: "Замеры и эскиз",
      description: "Снимаем точные размеры и создаем эскиз будущего изделия",
    },
    {
      icon: "Scissors",
      title: "Раскрой и подготовка",
      description: "Раскраиваем кожу и подготавливаем все детали для работы",
    },
    {
      icon: "Hammer",
      title: "Изготовление",
      description:
        "Ручная работа с использованием традиционных техник кожевенного ремесла",
    },
    {
      icon: "Palette",
      title: "Финишная обработка",
      description:
        "Шлифовка, окраска, нанесение защитных покрытий и персонализация",
    },
    {
      icon: "Gift",
      title: "Готовое изделие",
      description: "Финальная проверка качества и передача готового аксессуара",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Процесс создания
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            От идеи до готового изделия — каждый этап продуман до мелочей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-amber-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full mb-6 mx-auto">
                  <Icon name={step.icon} size={32} className="text-white" />
                </div>

                <div className="absolute top-4 left-4 bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-amber-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-amber-700 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <Icon
                    name="ArrowRight"
                    size={24}
                    className="text-amber-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Сроки изготовления
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">3-5</div>
                <div className="text-amber-600">дней простые изделия</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">1-2</div>
                <div className="text-amber-600">недели сложные работы</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">3-4</div>
                <div className="text-amber-600">недели эксклюзив</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
