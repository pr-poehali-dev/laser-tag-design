import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей Морозов",
      role: "Любитель экшена",
      rating: 5,
      text: "Невероятные ощущения! Профессиональные инструкторы, современное оборудование. Обязательно вернемся с друзьями снова!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Мария Петрова",
      role: "HR-менеджер",
      rating: 5,
      text: "Организовывали корпоратив для команды из 15 человек. Все остались в восторге! Отличная организация и сервис.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Козлов",
      role: "Студент",
      rating: 5,
      text: "Праздновали день рождения здесь. Адреналин зашкаливал! Качественное снаряжение и интересные сценарии игр.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Что говорят наши игроки о проведенном времени в арене
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
