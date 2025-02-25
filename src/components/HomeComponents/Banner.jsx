import { useState } from "react";

export default function Banner() {
    const [currentSlider, setCurrentSlider] = useState(0);

    const coffeeData = [
        {
            img: "https://i.ibb.co.com/Zz0gyx8H/22222.jpg",
            title: "Would you like a Cup of Delicious Coffee?",
            des: "Start your day with the perfect brew, rich in flavor and warmth to awaken your senses."
        },
        {
            img: "https://i.ibb.co.com/6cbBHdD4/222222.jpg",
            title: "Bold & Strong",
            des: "Experience the deep, robust taste that fuels your energy and keeps you going all day."
        },
        {
            img: "https://i.ibb.co.com/zWs8BxcN/2222.jpg",
            title: "Aromatic Delight",
            des: "Let the rich aroma fill your space as you take a sip of perfectly brewed indulgence."
        },
        {
            img: "https://i.ibb.co.com/gb20LVkG/2222222.jpg",
            title: "Cozy Evenings",
            des: "Unwind with a warm cup of coffee, the perfect companion for peaceful nights and deep conversations."
        },
        {
            img: "https://i.ibb.co.com/TxSV3x0q/222.jpg",
            title: "Pure Indulgence",
            des: "A luxurious coffee experience, crafted to bring out the finest flavors in every sip."
        }
    ];


    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? coffeeData.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === coffeeData.length - 1 ? 0 : currentSlider + 1);

    const isSmallScreen = window.innerWidth <= 768;


    return (
        <div className="w-full lg:h-screen h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
            style={{ backgroundImage: `url(${currentSlider === 0 ? coffeeData[coffeeData.length - 1].img : coffeeData[currentSlider - 1].img})` }}>

            {/* arrow */}
            <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
            </div>

            {/* text container here */}
            <div className="w-1/2 px-4 md:px-10 lg:px-20 left-0 absolute drop-shadow-lg text-white rounded-lg">
                <h1 className="font-rancho lg:text-4xl mb-3">{coffeeData[currentSlider].title}</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">{coffeeData[currentSlider].des}</p>
            </div>

            {/* slider container */}
            <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                <div className="ease-linear duration-300 flex gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                    {/* coffeeData */}
                    {coffeeData.map((slide, inx) => (
                        <img key={inx} src={slide.img}
                            className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title} />
                    ))}
                </div>
            </div>

        </div>
    )
};
