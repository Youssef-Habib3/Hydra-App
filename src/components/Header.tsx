import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-3 md:gap-full py-5 flex-col md:flex-row flex-wrap">
      {/* icon */}
      <div>
        <Link to="/" className="center-flex gap-3">
          <img
            src="/images/header-image.svg"
            alt="Logo Image"
            className="w-[50px]"
          />

          <h1 className="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent text-xl font-bold font-mono">
            HYDRA
          </h1>
        </Link>
      </div>

      {/* links */}

      <nav>
        <ul className="center-flex">
          <li className="px-2 font-bold text-[#ffffff] uppercase hover:text-[#C0B7E8]">
            <a href="#about">About</a>
          </li>
          <li className="px-2 font-bold text-[#ffffff] uppercase hover:text-[#C0B7E8]">
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>

      {/* buttons */}
      <div className="center-flex gap-3">
        <Button variant="outline">Login</Button>
        <Button variant="default">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
