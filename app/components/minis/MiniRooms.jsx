"use client";

import { Parallax } from "react-parallax";
import { RoomCard } from "..";
import { details, rooms } from "@/data/data";

const MiniRooms = () => {
  return (
    <div className="w-full h-[1000px] relative" id="miniRooms">
      <Parallax bgImage={"/images/room-2.jpg"} strength={500}>
        <div className="h-[1000px] w-full pb-20">
          <div className="w-full h-[170px] flex item-center justify-between mb-10">
            {details.map((detail, index) => (
              <div
                key={detail.id}
                className={`w-1/3 h-full ${index === 0 && "bg-yellow-600"} ${
                  index === 1 && "bg-yellow-700"
                } ${
                  index === 2 && "bg-yellow-800"
                } text-white p-5 flex items-center justify-center gap-5`}
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
            <h2
              className="text-4xl font-bold text-gray-800 text-center my-12"
              style={{ fontFamily: "Pacifico" }}
            >
              Our Rooms
            </h2>
            <div className="w-full flex items-center justify-between gap-10">
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  id={room.id}
                  image={room.image}
                  title={room.title}
                  description={room.description}
                  price={room.price}
                />
              ))}
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MiniRooms;
