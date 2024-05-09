"use client";

import { Parallax } from "react-parallax";
import { roomSlides } from "@/data/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MotionDiv, MotionFadeIn } from "../framer-animations/MotionElements";

const MiniSliderRoom = () => {
  const [active, setActive] = useState(0);
  const totalRoomSlides = roomSlides.length - 1;

  const nextSlide = () => {
    setActive((prevState) => prevState + 1);
    if (active === totalRoomSlides) setActive(0);
  };

  const prevSlide = () => {
    setActive((prevState) => prevState - 1);
    if (active === 0) setActive(totalRoomSlides);
  };

  return (
    <div className="w-full h-[700px]">
      <Parallax bgImage={"/images/bg-img.jpg"} strength={400}>
        <div className="h-[700px] w-full backdrop-blur-sm">
          <div className="container w-full h-full flex items-center justify-center px-5 relative">
            <div className="absolute w-full flex items-center justify-between text-white">
              <IoIosArrowBack
                size={50}
                className="cursor-pointer"
                onClick={prevSlide}
              />
              <IoIosArrowForward
                size={50}
                className="cursor-pointer"
                onClick={nextSlide}
              />
            </div>
            {roomSlides.map((room, index) => {
              if (index === active) {
                return (
                  <MotionDiv
                    key={room.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "tween",
                        //   delay: 0.5,
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex items-center justify-between px-10"
                  >
                    <MotionFadeIn
                      direction={"up"}
                      duration={0.5}
                      delay={0.2}
                      type={"tween"}
                      className="w-1/2 space-y-4"
                    >
                      <h2
                        className="text-4xl text-white"
                        style={{ fontFamily: "Pacifico" }}
                      >
                        {room.badge}
                      </h2>
                      <h2 className="text-6xl text-primary_color font-bold">
                        {room.title}
                      </h2>
                      <p className="text-gray-300">{room.details}</p>
                      <Link
                        href="#"
                        className="inline-block border-[1px] border-yellow-800 text-gray-200 px-5 py-2"
                      >
                        View Room Details
                      </Link>
                    </MotionFadeIn>
                    <MotionFadeIn
                      direction={"down"}
                      duration={0.5}
                      type={"tween"}
                      className="w-1/2"
                    >
                      <Image
                        src={room.image}
                        alt="image"
                        width={400}
                        height={300}
                        className="w-full"
                      />
                    </MotionFadeIn>
                  </MotionDiv>
                );
              }
            })}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MiniSliderRoom;
