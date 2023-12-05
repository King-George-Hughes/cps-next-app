import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import Link from "next/link";

const FloatingSocial = () => {
  const socials = [
    {
      icon: <BsFacebook />,
      href: "#",
    },
    {
      icon: <BsTwitterX />,
      href: "#",
    },
    {
      icon: <BsInstagram />,
      href: "#",
    },
  ];

  return (
    <div className="hidden lg:flex fixed text-white z-50 left-[2%] h-screen w-[50px] flex-col items-center justify-center gap-14">
      <div className="flex flex-col gap-5">
        {socials.map((social, index) => (
          <Link key={index} href={social.href}>
            {social.icon}
          </Link>
        ))}
      </div>
      <span className="whitespace-nowrap transform rotate-[270deg] inline-flex items-center justify-center">
        Book Now
      </span>
    </div>
  );
};

export default FloatingSocial;
