import { Button } from "./ui/button";

const data = [
  {
    id: 1,
    image: "/images/services-first-image.svg",
    title: "SIMULATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    id: 2,
    image: "/images/services-second-image.svg",
    title: "EDUCATION",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    id: 3,
    image: "/images/services-third-image.svg",
    title: "SELF-CARE",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    id: 4,
    image: "/images/services-fourth-image.svg",
    title: "OUTDOOR",
    description:
      "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
];
const Services = () => {
  return (
    <section id="services">
      <div className="flex gap-10 mb-8 flex-col md:flex-row text-center md:text-left">
        <h2 className="text-4xl font-light w-full md:w-2/4">
          <span className="font-bold">WHY BUILD</span>
          <span className="flex items-center gap-4 md:w-[380px]">
            <p className="mx-auto">WITH HYDRA?</p>
            <img
              src="/images/arrow.svg"
              alt="Arrow"
              className="w-32 hidden md:block"
            />
          </span>
        </h2>

        <div className="w-full md:w-2/4">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-10 flex-wrap">
        {data.map((item) => (
          <div
            key={item.id}
            className="border py-8 px-12 rounded-[40px] text-center"
          >
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                alt="First Image"
                className="border-[15px] border-[#0e0e0e49] rounded-full"
              />
            </div>
            <div className="description">
              <h3 className="text-[24px] font-bold py-5 border-b">
                {item.title}
              </h3>

              <p className="w-[250px] my-6">{item.description}</p>

              <Button variant={"default"}>TRY IT NOW</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
