import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-dark to-gray-900">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1533144188434-cc1a3ab79de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 leading-tight">
          АРЕНА ДЛЯ ТВОЕЙ ИГРЫ
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-roboto font-light">
          Лазертаг, Нерф и Страйкбол для всех возрастов
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold text-lg px-8 py-4 h-auto rounded-lg transition-transform hover:scale-105"
        >
          ЗАБРОНИРОВАТЬ
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
