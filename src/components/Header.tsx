import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Music" size={24} className="text-amber-700" />
          <span className="text-xl font-bold text-amber-900">МузКожа</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-amber-800 hover:text-amber-600 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-amber-800 hover:text-amber-600 transition-colors"
          >
            О нас
          </a>
          <a
            href="#process"
            className="text-amber-800 hover:text-amber-600 transition-colors"
          >
            Процесс
          </a>
          <a
            href="#gallery"
            className="text-amber-800 hover:text-amber-600 transition-colors"
          >
            Галерея
          </a>
          <a
            href="#contact"
            className="text-amber-800 hover:text-amber-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <button className="hidden md:block bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">
          Записаться
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon
            name={isMenuOpen ? "X" : "Menu"}
            size={24}
            className="text-amber-700"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-amber-50 border-t border-amber-200">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#services" className="text-amber-800 hover:text-amber-600">
              Услуги
            </a>
            <a href="#about" className="text-amber-800 hover:text-amber-600">
              О нас
            </a>
            <a href="#process" className="text-amber-800 hover:text-amber-600">
              Процесс
            </a>
            <a href="#gallery" className="text-amber-800 hover:text-amber-600">
              Галерея
            </a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600">
              Контакты
            </a>
            <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">
              Записаться
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
