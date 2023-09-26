import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
  const [current, setCurrent] = useState(3);
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
    <div className=" lg:bg-cover py-3 mx-48 hidden md:hidden lg:h-[600px] lg:w-[1400px] lg:block sm:hidden">
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className="w-10/12 min-h-full bg-cover duration-500 "
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 cursor-pointer px-32">
        <BsChevronCompactLeft onClick={prev} size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 cursor-pointer px-28">
        <BsChevronCompactRight onClick={next} size={30} />
      </div>
      <div className="flex top-5 mx-96 px-36 py-5">
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
  );
};
export default Slider;
