import { useRef, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Section from "@/components/Section";
import Image from "next/image";
import Arrows from "@/components/Arrows";
import Heading from "@/components/Heading";
import Link from "next/link";

import { howItWorks } from "@/mocks/how-it-works";

type HowItWorksProps = {};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const HowItWorks = ({}: HowItWorksProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ref = useRef<any>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  };

  return (
    <Section className="mb-36">
      <div className="container">
        <Splide
          className="splide-custom"
          options={{
            type: "fade",
            rewind: true,
            pagination: false,
          }}
          hasTrack={false}
          ref={ref}
        >
          <Heading
            className="md:max-w-md lg:max-w-3xl"
            title="What's included"
            textLarge="CipherTrust Platform Community Edition includes a free-forever version of CipherTrust Manager with licenses for two full enterprise-edition CipherTrust Connectors which enable DevSecOps teams to deploy data protection controls in minutes instead of weeks"
          />
          <SplideTrack>
            {howItWorks.map((item, index) => (
              <SplideSlide key={item.id}>
                <div className="lg:flex lg:flex-row-reverse">
                  <div className="">
                    <div className="mb-4 lg:mb-6 font-code uppercase text-[#00AB8E]">
                      [ What's included 0{index + 1}. ]
                    </div>
                    <h2 className="h2 mb-4 lg:mb-6">{item.title}</h2>
                    <p className="body-2 mb-10 text-n-1">{item.text}</p>
                    <Link href="#">
                      <Link
                        href={item.url}
                        className="font-code uppercase text-xs px-4 py-4 border border-n-1/15 w-[200px] text-center rounded-xl hover:border-n-9 hover:bg-n-9 transition-all"
                      >
                        Learn More
                      </Link>
                    </Link>
                    <Arrows
                      className="my-10 lg:hidden"
                      prevClassName="mr-3"
                      onPrev={() => ref.current?.go("<")}
                      onNext={() => ref.current?.go(">")}
                    />
                  </div>
                  <div className="relative lg:w-[29.375rem] lg:flex-shrink-0 lg:mr-[7.125rem] xl:w-[34.375rem] xl:mr-40">
                    <div className="pt-0.25 pl-0.25 overflow-hidden bg-gradient-to-tl from-n-1/0 via-n-1/0 to-n-1/15 rounded-3xl">
                      <div className="h-[30.5rem] bg-n-8 rounded-[1.4375rem] xl:h-[35.625rem]">
                        <Image
                          className="w-full h-full object-cover opacity-80"
                          src={`${basePath}${item.image}`}
                          width={550}
                          height={570}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="absolute -right-6 top-8 bottom-8 w-6 bg-n-8/50 rounded-r-3xl"></div>
                    <div className="absolute -right-12 top-16 bottom-16 w-6 bg-n-8/30 rounded-r-3xl"></div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <Arrows
            className="hidden justify-center mt-12 lg:flex lg:mt-15 xl:hidden"
            prevClassName="mr-3"
            onPrev={() => ref.current?.go("<")}
            onNext={() => ref.current?.go(">")}
          />
          <div className="absolute top-0 -left-[10rem] w-[29.5rem] h-[29.5rem] mix-blend-color-dodge opacity-20 pointer-events-none">
            <Image
              className="absolute top-1/2 left-1/2 w-[55.5rem] max-w-[55.5rem] h-[61.5rem] -translate-x-1/2 -translate-y-1/2"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/how-it-works/gradient.png`}
              width={1024}
              height={1024}
              alt="Gradient"
            />
          </div>
          <div className="hidden grid-cols-3 gap-12 mt-20 xl:grid">
            {howItWorks.map((item, index) => (
              <div
                className="group cursor-pointer"
                onClick={() => handleClick(index)}
                key={item.id}
              >
                <div
                  className={`h-[0.125rem] mb-10 transition-colors ${
                    index === activeIndex
                      ? "bg-color-1"
                      : "bg-[#D9D9D9]/10 group-hover:bg-[#D9D9D9]/50"
                  }`}
                ></div>
                <div className="tagline mb-1 text-n-3">0{index + 1}.</div>
                <h2 className="mb-[0.625rem] text-2xl leading-8">
                  {item.title}
                </h2>
                <p className={`body-2 text-n-2 font-[100] transition-opacity`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Splide>
      </div>
    </Section>
  );
};

export default HowItWorks;
