import React from 'react';
import Image from 'next/image';
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

import { useSwiper } from 'swiper/react';

const SwiperNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
    className='w-10 h-10 rounded-full hover:bg-black  hover:text-white flex items-center justify-center '
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <HiOutlineArrowNarrowRight />

    </button>
  );
};

export default SwiperNextButton;