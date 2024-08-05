"use client";

import React from "react";
import { useRef, useState } from "react";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

import { testimonial } from "@/mocks/testimonial";

type CommunityProps = {};

const Community = ({}: CommunityProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const ref = useRef<any>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    ref.current?.go(index);
  };

  return (
    <Section>
      <div className="container py-28">
        <div className="relative p-0.25 bg-gradient-to-b from-[#00bbdd] from-[4.5rem] via-color-1/40 via-[9rem] to-n-1/15 rounded-3xl">
          <div className="pt-20 px-5 py-10 bg-n-7 rounded-[1.5rem] md:pt-20 md:px-20 mb:pb-16 lg:py-28 lg:pr-48">
            {testimonial.map((comment) => (
              <div className="flex" key={comment.id}>
                <div className="flex flex-col lg:flex-row lg:items-start">
                  <div className="quote mb-6 md:mb-12 lg:mb-0 font-[00] leading-[2.25rem]">
                    {comment.text}
                    <br />
                    <button className="py-4 px-8 border border-n-1/15 w-auto font-code text-xs rounded-xl mt-4 hover:bg-n-9 hover:border-n-9 transition-all uppercase">
                      <Link href={comment.url}>Read more</Link>
                    </button>
                  </div>

                  <div className="flex items-center mt-auto lg:block lg:mt-0 lg:ml-20">
                    <div className="w-20 mr-6 lg:w-40 lg:mr-0 lg:mb-11">
                      <Image
                        className="w-full rounded-full border border-n-1/15"
                        src={`${basePath}${comment.avatarUrl}`}
                        width={160}
                        height={160}
                        alt={comment.name}
                      />
                    </div>
                    <div>
                      <h6 className="h6 leading-tight mb-2">{comment.name}</h6>
                      <div className="caption text-n-1/25">{comment.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute -top-14 left-0 z-2 font-code text-[11.25rem] text-color-1 leading-none md:left-12">
            “
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Community;
