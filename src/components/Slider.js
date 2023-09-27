import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
  const [current, setCurrent] = useState(2);
  const prev = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const next = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  const slides = [
    {
      url: "https://images.bewakoof.com/t1080/men-get-schwifty-oversized-graphic-printed-t-shirt-605045-1693306313-1.jpg",
    },
    {
      url: "https://images.bewakoof.com/t1080/men-s-beige-mickey-graphic-printed-oversizedt-shirt-516646-1667912529-1.jpg",
    },
    {
      url: "https://images.bewakoof.com/t1080/men-s-black-skater-donald-graphic-printed-oversized-t-shirt-602561-1688380293-1.jpg",
    },
    {
      url: "https://images.bewakoof.com/t1080/men-stoned-rick-morty-oversized-graphic-printed-t-shirt-605102-1693306351-1.jpg",
    },
    {
      url: "https://images.bewakoof.com/t1080/men-s-black-itachi-uchiha-genjutsu-graphic-printed-oversized-t-shirt-605541-1690552600-1.jpg",
    },
  ];
  return (
    <div className="w-full md:max-w-[900px] lg:max-w-[1400px] lg:block md:block pr-32 ml-32 pt-5 hidden ">
      <div
        style={{
          backgroundImage: `url(${slides[current].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className=" h-[500px] md:h-[600px] lg:h-[500px]  duration-500 "
      ></div>
      <div className="">
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 cursor-pointer px-32 text-white">
          <BsChevronCompactLeft
            onClick={prev}
            size={30}
            className="bg-black opacity-70 rounded-full"
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 cursor-pointer px-28 text-white">
          <BsChevronCompactRight
            onClick={next}
            size={30}
            className="bg-black opacity-70 rounded-full"
          />
        </div>

        <div className="flex top-5 justify-center py-5">
          {slides.map((slide, slideIndex) => (
            <div
              className="text-2xl cursor-pointer "
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
