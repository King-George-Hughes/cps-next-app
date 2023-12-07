import { BsClockHistory } from "react-icons/bs";
import { FaHouseChimney, FaHeadphones } from "react-icons/fa6";

const details = [
  {
    id: 1,
    icon: <BsClockHistory />,
    title: "Opening Times",
    description: "Monday - saturday 08:00 - 10:00",
  },
  {
    id: 2,
    icon: <FaHouseChimney />,
    title: "Our Location",
    description: "Mile 7, Penticost Junction",
  },
  {
    id: 3,
    icon: <FaHeadphones />,
    title: "Customer Support",
    description: "+233 573 849 441",
  },
];

const rooms = [
  {
    id: 1,
    title: "Standard Room",
    image: "/images/room-1.jpg",
    description:
      "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury..",
    price: 1100,
  },
  {
    id: 2,
    title: "Deluxe Room",
    image: "/images/room-2.jpg",
    description:
      "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury..",
    price: 2100,
  },
  {
    id: 3,
    title: "Premier Room",
    image: "/images/room-3.jpg",
    description:
      "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury..",
    price: 3000,
  },
];

const roomSlides = [
  {
    id: 1,
    badge: "Best Price",
    title: "Family Suite",
    image: "/images/room-1.jpg",
    details:
      "Room size: 30 ft, 1 King Bed or 2 Single Bed, View Beach, Breakfast Included",
  },
  {
    id: 2,
    badge: "Special Price",
    title: "Presidential Suite",
    image: "/images/room-2.jpg",
    details:
      "Room size: 30 ft, 1 King Bed or 2 Single Bed, View Beach, Breakfast Included",
  },
  {
    id: 3,
    badge: "Best Alles",
    title: "Premier Room",
    image: "/images/room-3.jpg",
    details:
      "Room size: 30 ft, 1 King Bed or 2 Single Bed, View Beach, Breakfast Included",
  },
 
];

export { details, rooms, roomSlides };
