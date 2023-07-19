import React from 'react';
import Image from 'next/image';
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"
import { useSwiper } from 'swiper/react';

const SwiperPreviousButton = () => {
  const swiper = useSwiper();

  return (
    <button
    className='w-10 h-10 bg-white rounded-full hover:w-[45px] hover:h-[45px] hover:bg-black  hover:text-white flex items-center justify-center '
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <HiOutlineArrowNarrowLeft />

    </button>
  );
};

export default SwiperPreviousButton;

