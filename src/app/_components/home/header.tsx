import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="flex h-screen w-screen flex-col items-start justify-end bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-500 via-indigo-300 to-indigo-100 p-6 sm:p-14">
      <h1
        className={`${bebasNeue.className} text-8xl tracking-widest text-black md:text-[10rem] lg:text-[15rem]`}
      >
        FOXEIAN
      </h1>
      <span className="h-4 w-full bg-black"></span>
    </header>
  );
}
