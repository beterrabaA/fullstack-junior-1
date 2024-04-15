import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex h-[12vh] w-full justify-between items-center">
      <div className="flex w-1/3">
        <h1 className="text-white text-4xl font-semibold">
          Liav<span className="text-primary-blue-50">ia</span>.
        </h1>
      </div>
      <div className="flex text-white font-normal text-lg w-2/3 justify-between">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Service</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Blog</Link>
      </div>
    </nav>
  );
};
