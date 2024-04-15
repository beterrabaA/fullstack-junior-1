import Image from "next/image";

export const BottomBar = () => {
  return (
    <section className="fixed bottom-0 bg-white h-[28vh] w-3/4 text-black">
      <div className="flex items-center p-20">
        <div className="flex flex-col w-1/12 items-center text-gray-100 pr-16">
          <p className="font-normal text-lgh -rotate-90 whitespace-nowrap pl-3">
            Scroll
          </p>
            <Image className="rotate-90" src="arrow.svg" alt="arrow" width={32} height={32}/>
        </div>
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <Image src="webdesing.svg" alt="web" width={64} height={64} />
            <h1 className="font-bold text-lg">Web Design Projects</h1>
            <p className="font-normal text-lg">
              Make your website user friendly and <br />
              look more professional
            </p>
          </div>
          <div className="flex flex-col">
            <Image src="social.svg" alt="social" width={64} height={64} />
            <h1 className="font-bold text-lg">Social Media Templates</h1>
            <p className="font-normal text-lg">
              Gain more followers or subscribers <br /> with the right template
            </p>
          </div>
          <div className="flex flex-col">
            <Image src="digital.svg" alt="digital" width={64} height={64} />
            <h1 className="font-bold text-lg">Digital Artwork</h1>
            <p className="font-normal text-lg">
              Complete your digital work with appropriate artwork
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
