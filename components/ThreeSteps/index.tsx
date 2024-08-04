import Image from "next/image";
import { roadmap } from "@/mocks/three-steps";

type RoadmapProps = {};

const Roadmap = ({}: RoadmapProps) => (
  <div className="mb-24 mt-24">
    <h2 className="h2 text-center mb-10">Three Steps to Secure Data</h2>
    <div className="relative grid gap-6 md:grid-cols-3 md:gap-4 z-1">
      {roadmap.map((item, index) => (
        <div
          className={`md:flex ${
            index % 2 !== 0 ? "md:translate-y-[4rem]" : ""
          } p-0.25 rounded-[2.5rem] ${
            item.colorful ? "bg-conic-gradient" : "bg-n-11"
          }`}
          key={item.id}
        >
          <div className="relative p-8 bg-n-11 rounded-[2.4375rem] overflow-hidden xl:p-10">
            <div className="relative z-1">
              <Image
                className="w-full p-4"
                src={item.imageUrl}
                width={628}
                height={426}
                alt={item.title}
              />

              <div className="font-code text-xl mb-1 text-[#00AB8E]">
                Step {item.step}.
              </div>
              <h4 className="h4 leading-tight mb-4">{item.title}</h4>
              <p className="body-2 text-n-2">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="-z-1 absolute top-1/2 right-1/2 opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-1/2 -translate-y-1/2">
          <Image
            className="w-full opacity-60"
            src="/images/gradient.png"
            width={942}
            height={942}
            alt="Gradient"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Roadmap;
