"use client";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

const Hero = () => {
  return (
    <div>
        <Splide 
         options={ {
            rewind: true,
            interval: '1000'
          } }
        className="w-full aspect-video overflow-hidden">
            <SplideSlide
            className="splide__slide" data-splide-interval="1000">
                <Image
                width={500}
                height={500}
                alt="hero"
                src={'/lady-desktop-3.jpg'}
                className="w-full object-cover object-center"
                /> 
            </SplideSlide>
            
            <SplideSlide
            className="splide__slide" data-splide-interval="1000">
                <Image
                width={500}
                height={500}
                alt="hero"
                src={'/lady-desktop.jpg'}
                className="w-full object-cover object-center"
                /> 
            </SplideSlide>
            <SplideSlide
            className="splide__slide" data-splide-interval="1000">
                <Image
                width={500}
                height={500}
                alt="hero"
                src={'/lady-desktop-2.jpg'}
                className="w-full object-cover object-center"
                /> 
            </SplideSlide>
            <SplideSlide
            className="splide__slide" data-splide-interval="1000">
                <Image
                width={500}
                height={500}
                alt="hero"
                src={'/lady-desktop-4.jpg'}
                className="w-full object-cover object-center"
                /> 
            </SplideSlide>
        </Splide>
    </div>
  )
}

export default Hero