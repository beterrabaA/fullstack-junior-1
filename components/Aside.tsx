import Image from "next/image";

export const Aside = () => {
  return (
    <aside className="flex bg-[url('/background.svg')] bg-no-repeat w-[808px]">
      <div className="flex flex-row-reverse h-[12vh] w-full px-40 items-center">
        <button className="bg-primary-blue-100 w-[149px] h-[60px] font-normal text-lg">
          Contact Us
        </button>
      </div>
    </aside>
  );
};
