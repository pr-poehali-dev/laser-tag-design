import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            О нашей арене
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Современный игровой центр с профессиональным оборудованием и
            опытными инструкторами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Наша миссия
            </h3>
            <p className="text-gray-600 mb-6">
              Мы создаем незабываемые впечатления через инновационные игровые
              технологии. Наша команда профессионалов обеспечивает безопасность
              и максимальное удовольствие от каждой игры.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Shield" className="text-[#FD5403] mr-3" size={20} />
                <span className="text-gray-700">100% безопасность игроков</span>
              </div>
              <div className="flex items-center">
                <Icon name="Users" className="text-[#FD5403] mr-3" size={20} />
                <span className="text-gray-700">
                  Опытная команда инструкторов
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" className="text-[#FD5403] mr-3" size={20} />
                <span className="text-gray-700">Современное оборудование</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#FD5403] mb-2">5+</div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#FD5403] mb-2">
                2000+
              </div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#FD5403] mb-2">10</div>
              <div className="text-gray-600">игровых зон</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#FD5403] mb-2">24/7</div>
              <div className="text-gray-600">поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
