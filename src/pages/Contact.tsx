import { Button } from "../components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#403A5F] to-[#211E2E] rounded-[50px] p-10 mb-12"
    >
      <h2 className="text-center text-4xl font-bold border-b border-[#C0B7E8] w-2/4 mx-auto py-4">
        JOIN HYDRA
      </h2>
      <p className="text-center py-4 font-light">
        Let's Build Your VR Experience
      </p>

      <form className="flex justify-center items-center flex-wrap">
        <input
          type="text"
          placeholder="First name"
          className="w-full md:w-2/4 py-3 px-5 bg-transparent text-white border-2 rounded-full my-2.5 outline-none"
        />

        <input
          type="text"
          placeholder="Last name"
          className="w-full md:w-2/4 py-3 px-5 bg-transparent text-white border-2 rounded-full my-2.5 outline-none"
        />

        <input
          type="number"
          placeholder="Phone"
          className="w-full md:w-2/4 py-3 px-5 bg-transparent text-white border-2 rounded-full my-2.5 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-2/4 py-3 px-5 bg-transparent text-white border-2 rounded-full my-2.5 outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full py-3 px-5 bg-transparent text-white border-2 rounded-full my-2.5 outline-none"
        />

        <textarea
          placeholder="Tell us something..."
          className="w-full py-3 px-5 bg-transparent text-white border-2 rounded-xl my-2.5 min-h-[150px] outline-none"
        ></textarea>

        <Button variant="default" className="mt-5">
          SEND TO HYDRA
        </Button>
      </form>
    </section>
  );
};

export default Contact;
