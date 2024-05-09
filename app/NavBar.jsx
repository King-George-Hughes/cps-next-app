import Link from "next/link";

const NavBar = () => {
  const menuLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Rooms",
      href: "/rooms",
    },
    {
      name: "Booking",
      href: "/booking",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-transparent w-full h-[100px] fixed z-50">
      <div className="container w-full h-full flex items-center justify-between text-white py-5 px-2">
        <Link
          href={"/"}
          className="text-3xl font-bold"
          style={{ fontFamily: "Pacifico" }}
        >
          CPS
        </Link>
        <ul className="inline-flex items-center gap-10">
          {menuLinks.map((menu) => (
            <li key={menu.name}>
              <Link href={menu.href}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/booking"}
          className="text-lg bg-primary_color text-gray-800 px-5 py-2 rounded-sm font-medium"
        >
          Booking
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
