import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function RoomCard({ id, title, image, description, price }) {
  return (
    <Card className="w-full md:w-1/2 lg:w-1/3 py-4 bg-transparent bg-gradient-to-br from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.4)] backdrop-blur-md">
      <CardHeader className="overflow-visible py-2 w-full pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src={image}
          width={270}
          height={200}
        />
      </CardHeader>
      <CardBody className="overflow-visible mt-4 w-full py-2 px-5 mx-4 flex-col items-start text-white bg-gradient-to-br from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.5)] rounded-l-lg backdrop-blur-md">
        <p className="text-lg uppercase font-bold my-2 tracking-widest">
          {title}
        </p>
        <small className="text-default-400">{description}</small>
        <Link
          href="#"
          className="inline-block text-medium my-3 border-[1px] border-gray-700 w-full rounded-sm text-gray-300 py-2 px-5 text-center font-bold relative"
        >
          Book room for ₵ {price}
          
        </Link>
      </CardBody>
    </Card>
  );
}
