import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { CgArrowRight } from "react-icons/cg";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    icon: <ImLocation />,
    title: "Pay Us a Visit",
    description: "Union St, Seattle, WA 98101, United States",
  },
  {
    id: 2,
    icon: <FiPhoneCall />,
    title: "Give Us a Call",
    description: "+201092554811",
  },
  {
    id: 3,
    icon: <HiOutlineMail />,
    title: "Send Us a Message",
    description: "yousefhabibelsehamy33@gmail.com",
  },
];

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const increment = () => {
    if (counter < data.length - 1) setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <section id="home">
      {/* description and image */}
      <div className="flex justify-between items-center gap-10 flex-col md:flex-row">
        {/* description */}
        <div className="w-full md:w-2/4">
          <h2 className="text-4xl">
            <span className="bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] text-transparent bg-clip-text">
              Dive
            </span>{" "}
            Into The Depths
            <br />
            Of{" "}
            <span className="bg-gradient-to-l from-[#C0B7E8] to-[#8176AF] text-transparent bg-clip-text">
              Virtual Reality
            </span>
          </h2>

          <p className="text-[#ffffff] my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>

          <div className="flex items-center gap-12">
            <Button variant="default" className="rounded-full px-6">
              BUILD YOUR WORLD
            </Button>

            <span
              className="text-6xl text-[#C0B7E8]"
              style={{ animation: "leftToRight 1.5s infinite" }}
            >
              <CgArrowRight />
            </span>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-2/4">
          <div className="w-full h-[90%]">
            <img src="/images/home-image.svg" alt="Home Image" />
          </div>
        </div>
      </div>

      {/* buttons */}
      <main className="mt-8 flex justify-between items-center gap-5 bg-gradient-to-tr from-[#3A3456] to-[#211E2E] p-5 rounded-full">
        {isSmallScreen ? (
          <article className="flex items-center gap-2 w-full relative">
            <span onClick={decrement} className="text-4xl cursor-pointer">
              <BiChevronLeftCircle />
            </span>
            <div className="text-4xl">{data[counter].icon}</div>
            <div className="text w-full">
              <h4 className="font-bold text-[20px]">{data[counter].title}</h4>
              <p className="text-[14px]">{data[counter].description}</p>
            </div>
            <span
              onClick={increment}
              className="text-4xl absolute right-0 top-50% cursor-pointer"
            >
              <BiChevronRightCircle />
            </span>
          </article>
        ) : (
          <>
            {data.map((item) => (
              <article
                key={item.id}
                className={`flex items-center gap-2 w-full ${
                  item.id == 2 && "border-r border-l px-2"
                }`}
              >
                <div className="text-4xl">{item.icon}</div>
                <div className="text">
                  <h4 className="font-bold text-[24px]">{item.title}</h4>
                  <p className="text-[14px]">{item.description}</p>
                </div>
              </article>
            ))}
          </>
        )}
      </main>
    </section>
  );
};

export default Home;
