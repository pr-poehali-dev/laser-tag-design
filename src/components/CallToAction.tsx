import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-montserrat font-bold text-4xl text-white mb-8">
          Готов к битве?
        </h2>
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-primary hover:bg-light border-white font-montserrat font-semibold text-lg px-8 py-4 h-auto rounded-lg transition-transform hover:scale-105"
        >
          Выбрать игру
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
