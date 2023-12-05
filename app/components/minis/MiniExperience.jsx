import Link from "next/link";
import Image from "next/image";

const MiniExperience = () => {
  return (
    <div className="relative bg-yellow-700">
      <div className="container px-5 py-20 flex items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center gap-5">
          <Image
            src="/images/mini-img-2.jpg"
            alt="img"
            width={200}
            height={400}
            className="w-full mt-10"
          />
          <Image
            src="/images/mini-img-1.jpg"
            alt="img"
            width={200}
            height={400}
            className="w-full mb-10"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-100">
          <h2 className="text-4xl max-w-md" style={{ fontFamily: "Pacifico" }}>
            The Luxury Experience You&apos;ll Remember
          </h2>
          <p className="my-5 max-w-lg">
            Welcome to our luxurious hotel, where sophistication, impeccable
            service, and unparalleled comfort await you. From the moment you
            step into our grand lobby, you&apos;ll be immersed in an atmosphere
            of opulence and refined elegance. As you enter our elegant
            establishment, you will be greeted by a captivating ambiance that
            exudes sophistication and tranquility.
          </p>
          <Link href="/booking" className="border-gray-500">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniExperience;
