import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Контакты */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Контакты
            </h3>
            <div className="space-y-2 font-roboto">
              <div className="flex items-center justify-center md:justify-start">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>ул. Игровая, 123, Москва</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          {/* Логотип */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="text-center">
              <h2 className="font-montserrat font-bold text-2xl text-primary">
                АРЕНА
              </h2>
              <p className="text-sm font-roboto">Игровой центр</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center font-roboto text-sm">
          <p>&copy; 2024 Арена. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
