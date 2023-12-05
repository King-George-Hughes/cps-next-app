"use client";

import { Parallax } from "react-parallax";
import { RoomCard } from "..";
import { details } from "@/data/data";

const MiniRooms = () => {
  return (
    <div className="w-full h-screen" id="miniRooms">
      <Parallax bgImage={"/images/food.jpg"} strength={400}>
        <div className="h-screen w-full pb-20">
          <div className="w-full h-[170px] flex item-center justify-between mb-10">
            {details.map((detail) => (
              <div
                key={detail.id}
                className={`w-1/3 h-full ${detail.bgColor} text-white p-5 flex items-center justify-center gap-5`}
              >
                <div className="text-5xl">{detail.icon}</div>
                <div className="flex flex-col">
                  <h2 className="uppercase">{detail.title}</h2>
                  {detail.description}
                </div>
              </div>
            ))}
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
