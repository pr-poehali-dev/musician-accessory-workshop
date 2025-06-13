import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Music" size={24} className="text-amber-300" />
              <span className="text-2xl font-bold">МузКожа</span>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Создаем уникальные кожаные аксессуары для музыкальных инструментов
              с 2009 года. Качество, проверенное временем.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Услуги</h3>
            <ul className="space-y-3 text-amber-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремни для гитар
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Футляры для скрипок
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Держатели для палочек
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Индивидуальные заказы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Информация</h3>
            <ul className="space-y-3 text-amber-200">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-white transition-colors"
                >
                  Процесс работы
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={16} />
                <span>+7 (996) 9367828</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={16} />
                <span>info@muzkozha.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={16} />
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 mb-4 md:mb-0">
            © 2024 МузКожа. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Icon name="MessageCircle" size={24} />
            </a>
            <a
              href="#"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Icon name="Phone" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
