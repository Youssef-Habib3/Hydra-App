import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-10 text-center md:text-left"
    >
      {/* top */}
      <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
        <h2 className="text-4xl font-light w-full md:w-2/4">
          <span className="font-bold">INTRODUCTION</span>
          <span className="flex items-center gap-4 w-[380px]">
            <p className="mx-auto">TO HYDRA VR</p>
            <img
              src="/images/arrow.svg"
              alt="Arrow"
              className="w-32 hidden md:block"
            />
          </span>
        </h2>

        <p className="w-full md:w-2/4">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      {/* button */}
      <div className="flex justify-between items-center gap-12 flex-col md:flex-row">
        <div className="w-full md:w-2/4">
          <img src="/images/about-image.svg" alt="About Image" />
        </div>
        <div className="w-full md:w-2/4">
          <h2 className="text-4xl font-bold">
            ABOUT <br />
            <span className="font-light">HYDRA VR</span>
          </h2>

          <p className="my-2">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <Button variant={"default"}>LET'S GET IN TOUCH</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
