import React from "react";
import DDB from "../assets/DDB.png";
import SG from "../assets/SG.png";
import admatic from "../assets/admatic.jpeg";
import affinda from "../assets/affinda.jpeg";
import ffox from "../assets/flying_fox.svg";
import ripe from "../assets/ripe_logo.png";
import vesparum from "../assets/vesparum.png";

const items = [
  {
    name: "Admatic",
    title: "Admatic",
    image: admatic,
  },
  {
    name: "Affinda",
    title: "Affinda",
    image: affinda,
  },
  {
    name: "DDB",
    title: "DDB",
    image: DDB,
  },
  {
    name: "Flying Fox",
    title: "Flying Fox",
    image: ffox,
  },
  {
    name: "Ripe",
    title: "Ripe",
    image: ripe,
  },
  {
    name: "SG",
    title: "SG",
    image: SG,
  },
  {
    name: "Vesparum",
    title: "Vesparum",
    image: vesparum,
  },
];

export default function Feedbacks() {
  return (
    <div className={`mt-12 bg-primary rounded-[20px]`}>
      <div className="bg-primary rounded-2xl flex items-center justify-center">
        <h2 className="text-white text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] text-center">Trusted By.</h2>
      </div>
      <div className="relative flex max-w-[100vw] overflow-hidden pt-12">
        <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="h-full px-2.5">
              <div className="relative flex items-center justify-center h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
                <img src={item.image} className="h-24 max-w-48 flex-shrink-0" alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}