import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  image: string;
  description: string;
}

const GameCard = ({ title, image, description }: GameCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="h-full bg-black/30 flex items-end">
          <div className="p-4">
            <h3 className="font-montserrat font-bold text-white text-xl">
              {title}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 font-roboto">{description}</p>
        <Button
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-semibold"
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
