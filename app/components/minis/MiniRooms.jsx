"use client";

import { Parallax } from "react-parallax";
import { RoomCard } from "..";

const MiniRooms = () => {
  return (
    <div className="w-full h-screen">
      <Parallax bgImage={"/images/food.jpg"} strength={400}>
        <div className="h-full w-full pb-20">
          <div className="w-full h-[200px] flex item-center justify-between mb-10">
            <div className="w-1/3 h-full bg-yellow-600"></div>
            <div className="w-1/3 h-full bg-yellow-700"></div>
            <div className="w-1/3 h-full bg-yellow-800"></div>
          </div>
          <div className="container">
            <h2 className="text-4xl font-bold text-white text-center my-12">
              Our Rooms
            </h2>
            <div className="w-full flex items-center justify-between gap-10">
              <RoomCard />
              <RoomCard />
              <RoomCard />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MiniRooms;
