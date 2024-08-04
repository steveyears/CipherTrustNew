"use client";

import Link from "next/link";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";

const Custom404 = () => {
  return (
    <Section>
      <div className="container md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="¯\_(ツ)_/¯"
          textLarge="404 Page Not Found"
        />
        <div className="text-center">
          <Link href="/" className="font-code text-xs border border-n-1/10 px-6 py-4 rounded-xl uppercase hover:bg-n-9 hover:border-n-9 transition-all">Home
          </Link>
        </div>

      </div>
    </Section>
  );
};

export default Custom404;