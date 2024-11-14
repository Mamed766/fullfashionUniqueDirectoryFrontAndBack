"use client";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

type SlideType = { src: string; id: number; name: string; job: string };

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ src, job, name, id }) => (
            <div className="embla__slide group  cursor-grab" key={id}>
              <div className="relative text-white max-w-[26.3rem]">
                <img
                  src={src}
                  alt={`Slide ${id}`}
                  className="embla__slide__img relative "
                />
                <div className="bg-[#BB9D7B] group-hover:bottom-[0] duration-500 py-5 flex justify-between items-center px-2 absolute bottom-[-10rem] w-full ">
                  <div>
                    <h2 className="text-[30px] font-medium hover:text-black duration-500">
                      {name}
                    </h2>
                    <p>{job}</p>
                  </div>
                  <div>
                    <ul className="flex gap-2">
                      <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                        <FaFacebookF />
                      </li>
                      <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                        <FaInstagram />
                      </li>
                      <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                        <FaYoutube />
                      </li>
                      <li className="bg-black p-1 hover:bg-white hover:text-black duration-500">
                        <FaLinkedinIn />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
