import { useState } from "react";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "straps", name: "Ремни" },
    { id: "cases", name: "Футляры" },
    { id: "holders", name: "Держатели" },
    { id: "custom", name: "Эксклюзив" },
  ];

  const works = [
    {
      id: 1,
      category: "straps",
      title: "Гитарный ремень с именной гравировкой",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Натуральная кожа, ручная прошивка",
    },
    {
      id: 2,
      category: "cases",
      title: "Футляр для скрипки",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Мягкая подкладка, надежная защита",
    },
    {
      id: 3,
      category: "holders",
      title: "Держатель для барабанных палочек",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Компактный дизайн, крепление на пояс",
    },
    {
      id: 4,
      category: "straps",
      title: "Ремень для бас-гитары",
      image:
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400&h=300&fit=crop",
      description: "Усиленная конструкция для тяжелых инструментов",
    },
    {
      id: 5,
      category: "custom",
      title: "Эксклюзивный чехол для саксофона",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      description: "Индивидуальный дизайн по эскизу клиента",
    },
    {
      id: 6,
      category: "cases",
      title: "Чехол для укулеле",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Яркая кожа, мягкая защита",
    },
  ];

  const filteredWorks =
    selectedCategory === "all"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Посмотрите на наши работы — каждая создана с любовью к музыке и
            ремеслу
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === category.id
                  ? "bg-amber-700 text-white"
                  : "bg-white text-amber-700 hover:bg-amber-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Icon
                      name="Eye"
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-amber-700">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg font-semibold flex items-center gap-2 mx-auto">
            <Icon name="Instagram" size={20} />
            Больше работ в Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
