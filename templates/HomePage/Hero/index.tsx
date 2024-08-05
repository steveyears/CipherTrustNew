import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const parallaxRef = useRef<any>(null);

  return (
    <Section
      className="-mt-[4.75rem] pt-[8.25rem] pb-4 overflow-hidden md:pt-[9.75rem] md:pb-[4.8rem] lg:-mt-[5.25rem] lg:-mb-40 lg:pt-[12.25rem] lg:pb-[22rem]"
      customPaddings
    >
      <div className="container relative">
        <div className="relative z-10 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[8.25rem]">
          <h1 className="h1 mb-6">
            Protect data, files, and velocity{" "}
            <span className="inline-block relative">
              (for free)
              <Image
                className="absolute top-full left-0 w-full"
                src="{`${process.env.NEXT_PUBLIC_BASE_PATH}/images/curve_new.png"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 text-2xl mx-auto text-n-9 lg:pt-8">
            Using automated pull and deploy, CipherTrust Platform Community
            Edition gives you key management, transparent encryption, and
            tokenization with a free-forever license
          </p>
        </div>
        <div className="relative text-center max-w-[23.25rem] mx-auto md:max-w-5xl xl:mb-24 -mt-8">
          <Image
            className="w-[75%] mx-auto z-10 -mt-8 mb-12"
            src="/images/hero/infinity2.webp"
            width={1024}
            height={490}
            alt="CipherTrust Manager Community Edition"
          />

          <div className="relative z-10 text-center mx-auto">
            <Link href="https://github.com/ThalesGroup/learn-ciphertrust" target="_blank">
              <div className="rounded-2xl border border-n-3 px-12 py-6 text-white bg-n-11/30 text-xl max-w-[22rem] mx-auto font-code uppercase hover:text-n-9 hover:bg-n-11 hover:border-n-9 transition-all">
                <FaGithub className="relative inline-block items-center mr-2 -mt-1" size={24}/>Clone Repository
              </div>
            </Link>
          </div>
          <div className="absolute top-[15rem] left-[15rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <Image
            className="w-full"
            src="/images/gradient.png"
            width={942}
            height={942}
            alt="Gradient"
          />
        </div>
      </div>
          <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[28rem] -z-4">
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
