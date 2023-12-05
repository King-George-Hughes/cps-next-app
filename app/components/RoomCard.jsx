import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function RoomCard() {
  return (
    <Card className="w-full md:w-1/2 lg:w-1/3 py-4 bg-transparent bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.5)] backdrop-blur-sm">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-full">
        {/* <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="/images/bg-img-2.jpg"
          width={270}
        /> */}
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="/images/bg-img-2.jpg"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
  );
}
