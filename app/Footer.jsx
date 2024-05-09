import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full relative bg-[#222]">
      <div className="container w-full px-5 py-10 space-y-3 flex flex-col items-center text-gray-50">
        <h2 style={{ fontFamily: "Pacifico" }} className="text-4xl">
          CPS
        </h2>
        <div className="w-full">
          <div></div>
        </div>
        <div className="w-full border-gray-600 border-t-[1px] inline-flex items-center justify-between pt-5">
          <p className="">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-600">Century Premier Suite</span>. All
            Rights Reserved.
          </p>

          <div className="inline-flex items-center gap-5">
            <p>Follow us: </p>
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
