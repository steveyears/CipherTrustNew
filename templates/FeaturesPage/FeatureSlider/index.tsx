import { useRef } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Section from "@/components/Section";
import Image from "next/image";
import Tagline from "@/components/Tagline";

import { features } from "@/mocks/feature-slider";
import Arrows from "@/components/Arrows";

type FeaturesProps = {};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Features = ({}: FeaturesProps) => {
  const ref = useRef<any>(null);

  return (
    <Section className="py-10 md:pb-20 lg:pt-16 lg:pb-26 xl:pb-8 overflow-hidden my-36">
      <div className="container relative z-2">
        <Tagline className="mb-10">Tools Built to Reduce Drag on Velocity</Tagline>
        <Splide
          className="splide-custom splide-visible"
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
          }}
          hasTrack={false}
          ref={ref}
        >
          <SplideTrack>
            {features.map((item) => (
              <SplideSlide key={item.id}>
                <div className="lg:flex mb-10" key={item.id}>
                  <div className="lg:flex lg:flex-col lg:items-start lg:max-w-[30rem] lg:mr-auto">
                    <h2 className="h2 mb-6">{item.title}</h2>
                    <p className="body-1 mb-10 text-n-1">{item.text}</p>
                  </div>
                  <Arrows
                    className="my-10 lg:hidden"
                    prevClassName="mr-3"
                    onPrev={() => ref.current?.go("<")}
                    onNext={() => ref.current?.go(">")}
                  />
                  <div 
                      className="relative h-[27.5rem] border border-n-1/20 rounded-3xl md:rounded-[2.5rem] lg:flex-1 lg:max-w-[34.625rem] lg:h-[34.5rem] lg:ml-24 xl:h-[36rem] bg-n-8"
                      >
                    <div className="relative overflow-hidden w-full h-full">
                      <Image
                        className="object-cover h-full w-full"
                        src={`${basePath}${item.imageUrl}`}
                        width={1000}
                        height={1000}
                        alt="Figure"
                      />
                    </div>
                    <div
                      className="hidden absolute top-0 left-full ml-5 w-full h-full border border-n-1/10 rounded-[2.5rem] md:block"
                    ></div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <Arrows
            className="hidden -mt-12 lg:flex"
            prevClassName="mr-3"
            onPrev={() => ref.current?.go("<")}
            onNext={() => ref.current?.go(">")}
          />
        </Splide>
      </div>
    </Section>
  );
};

export default Features;
