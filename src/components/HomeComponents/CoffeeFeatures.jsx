import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { LuCupSoda } from "react-icons/lu";


export default function CoffeeFeatures() {
  const features = [
    {
      icon: <GiCoffeeCup className="text-5xl text-brown-700" />,
      title: "Awesome Aroma",
      description: "You will definitely be a fan of the design & aroma of your coffee.",
    },
    {
      icon: <SlBadge className="text-5xl text-brown-700" />,
      title: "High Quality",
      description: "We serve the coffee to you while maintaining the best quality.",
    },
    {
      icon: <GiCoffeeBeans className="text-5xl text-brown-700" />,
      title: "Pure Grades",
      description: "The coffee is made from the finest green coffee beans which you will love.",
    },
    {
      icon: <LuCupSoda  className="text-5xl text-brown-700" />,
      title: "Proper Roasting",
      description: "Your coffee is flavored by first roasting the green coffee beans.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {feature.icon}
              <h3 className="text-xl font-bold text-brown-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
