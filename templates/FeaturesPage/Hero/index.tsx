import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

type HeroProps = {};

const Hero = ({}: HeroProps) => (
  <Section className="relative overflow-visible md:mb-4 lg:mb-12">
    <div className="container relative z-2 md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-6">
      <div className="md:mt-12 lg:mt-20">
        <Heading
          textAlignClassName="md:text-left"
          titleLarge="Reduce the drag of adding data security"
        />
        <p className="body-1 text-2xl mx-auto text-n-9 -mt-12">
          CipherTrust Platform Community Edition allows you to deploy data
          protection - in minutes instead of weeks
        </p>
      </div>
      <div className="relative">


      </div>

    </div>
    <div className="hidden lg:block absolute left-1/2 top-0 w-full -mt-20 -ml-24">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}//images/features/cloud_bg2.webp`}
            width={860}
            height={860}
            alt="Gradient"
            className="opacity-[85%]"
          />  
        </div>
  </Section>
);

export default Hero;
