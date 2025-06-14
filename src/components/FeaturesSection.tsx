import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Gamepad2",
      title: "Современное оборудование",
      description:
        "Новейшие игровые технологии и профессиональное оборудование высокого качества",
    },
    {
      icon: "Users",
      title: "Опытные инструкторы",
      description:
        "Команда профессионалов поможет освоить игру и обеспечит безопасность",
    },
    {
      icon: "Shield",
      title: "Безопасная среда",
      description:
        "Все игровые зоны оборудованы системами безопасности и защитным снаряжением",
    },
    {
      icon: "Camera",
      title: "Фото и видео",
      description:
        "Профессиональная съемка ваших игровых моментов для памятных кадров",
    },
    {
      icon: "Building",
      title: "Корпоративные события",
      description:
        "Организация тимбилдинга и корпоративных мероприятий любого масштаба",
    },
    {
      icon: "Zap",
      title: "Разные сценарии",
      description:
        "Множество увлекательных игровых сценариев на любой вкус и возраст",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Почему тысячи игроков выбирают именно нашу арену
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FD5403]/10 rounded-full mb-4">
                <Icon
                  name={feature.icon}
                  className="text-[#FD5403]"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
