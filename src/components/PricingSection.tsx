import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const packages = [
    {
      title: "Индивидуальная игра",
      price: "1 500",
      duration: "60 минут",
      players: "1-2 игрока",
      features: [
        "Личный инструктор",
        "Все защитное снаряжение",
        "Выбор игрового сценария",
        "Фото на память",
      ],
      popular: false,
    },
    {
      title: "Групповая игра",
      price: "3 500",
      duration: "90 минут",
      players: "4-8 игроков",
      features: [
        "Командная игра",
        "Профессиональные инструкторы",
        "Полное снаряжение для всех",
        "Видеосъемка игры",
        "Призы победителям",
      ],
      popular: true,
    },
    {
      title: "Корпоративное событие",
      price: "15 000",
      duration: "3 часа",
      players: "10-20 игроков",
      features: [
        "Эксклюзивная аренда арены",
        "Тимбилдинг программа",
        "Кейтеринг",
        "Профессиональная съемка",
        "Сертификаты участникам",
        "Организация турнира",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Тарифы и цены
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий пакет для незабываемых игровых впечатлений
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 ${pkg.popular ? "border-2 border-[#FD5403] transform scale-105" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FD5403] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <div className="text-3xl font-bold text-[#FD5403] mb-1">
                  {pkg.price} ₽
                </div>
                <p className="text-gray-600">
                  {pkg.duration} • {pkg.players}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3 flex-shrink-0"
                      size={16}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${pkg.popular ? "bg-[#FD5403] hover:bg-[#FD5403]/90" : "bg-gray-900 hover:bg-gray-800"}`}
              >
                Забронировать
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
