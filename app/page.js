import Hero from "./Hero";
import { MiniExperience, MiniRooms, MiniSliderRoom } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <MiniRooms />
      <MiniExperience />
      <MiniSliderRoom />
    </>
  );
}
