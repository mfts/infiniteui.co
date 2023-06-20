import Link from "next/link";
import React from "react";
import Particles from "./components/particles";


export default function Home() {
	return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />
      <h1 className="z-15 text-6xl bg-white cursor-default text-transparent duration-1000 text-edge-outline animate-title font-display md:text-9xl whitespace-nowrap bg-clip-text ">
        infiniteui
      </h1>
      <div className="my-8 text-center animate-fade-in">
        <h2 className="text-base font-medium text-transparent bg-gradient-to-r from-indigo-700 via-indigo-200/80 to-white/40 bg-clip-text">
          Beautiful components for your next React project
          <br />
          in one library, prompted by humans and designed by AI
        </h2>
      </div>
      <div className="my-8 text-center animate-fade-in">
        <Link
          href="#"
          className="bg-gradient-to-br from-red-900 via-indigo-700 to-zinc-900 text-white text-lg font-bold py-3 px-6 rounded-lg w-[200px] block mx-auto"
        >
          Pre-order
        </Link>
      </div>
    </div>
  );
}