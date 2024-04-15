import Image from "next/image";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="flex h-full bg-primary-blue-100 w-3/5">
      <div className="flex-col px-40">
        <Navbar />
        <p className="font-normal text-2xl py-3">Hi, There!</p>
        <h1 className="font-bold text-6xl py-3">
          We are a growing-up
          <br /> Creative Agency from Indonesia!
        </h1>
        <p className="font-normal text-2xl py-3">
          We provides you with modest and professional design templates
          <br /> that come from the synergy of design and technology
        </p>
        <div className="py-8">
        <button
          className="text-black bg-white w-[299px] h-20 flex items-center p-4"
          type="button"
        >
          <p className="font-normal text-2xl">Let’s Collaborate</p>
          <Image src="/arrow.svg" alt="arrow" width={48} height={48} />
        </button>
        </div>
      </div>
    </div>
  );
};
