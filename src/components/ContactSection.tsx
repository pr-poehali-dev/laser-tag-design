import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Контакты и бронирование
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Забронируйте игру прямо сейчас или свяжитесь с нами для получения
            информации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Форма бронирования */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Форма бронирования
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
              </div>
              <Input placeholder="Email" type="email" />
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Дата игры" type="date" />
                <Input placeholder="Количество игроков" type="number" />
              </div>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD5403]">
                <option>Выберите тип игры</option>
                <option>Индивидуальная игра</option>
                <option>Групповая игра</option>
                <option>Корпоративное событие</option>
              </select>
              <Textarea placeholder="Дополнительные пожелания" rows={3} />
              <Button className="w-full bg-[#FD5403] hover:bg-[#FD5403]/90">
                Забронировать игру
              </Button>
            </form>
          </div>

          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-[#FD5403] mr-4"
                    size={20}
                  />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-600">
                      ул. Игровая, 123, Москва
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-[#FD5403] mr-4"
                    size={20}
                  />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-[#FD5403] mr-4" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@gamearena.ru</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-[#FD5403] mr-4"
                    size={20}
                  />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-gray-600">Ежедневно 10:00 - 22:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                <p>Интерактивная карта</p>
                <p className="text-sm">Расположение игровой арены</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
