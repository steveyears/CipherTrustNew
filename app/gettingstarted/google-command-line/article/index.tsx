import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";

import { navigation } from "@/mocks/getting-started";

type GettingStartedProps = {};

const GettingStarted = ({}: GettingStartedProps) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>("g0");

  useEffect(() => {
    const url = window.location.href;
    const groupIdFromUrl =
      navigation.find((group) => url.includes(group.id))?.id || "g0";
    setOpenGroupId(groupIdFromUrl);
  }, []);

  const getColorClass = (url: string) => {
    if (url.includes("google-command-line")) {
      return "text-[#00BBDD]"; 
    }
    return "text-n-2"; 
  };

  return (
    <Section>
      <div className="container md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="Google Cloud Command Line Interface (CLI)"
          textLarge="Get started with CipherTrust Platform Community Edition automatically on Google Cloud using a Terraform configuration file"
        />
        <div className="lg:flex">
          <div className="mb-16 lg:flex-shrink-0 lg:w-[20rem] lg:mr-10 xl:mr-20">

            <div
              className="flex items-center justify-between w-full h-16 px-6 bg-n-7 rounded-xl cursor-pointer lg:hidden"
              onClick={() => setOpenNavigation(!openNavigation)}
            >
              <div className="h6 text-n-1/50">Getting started</div>
              <Image
                src="/images/icons/chevron-down.svg"
                width={24}
                height={24}
                alt="Arrow"
              />
            </div>

            <div
              className={`pt-4 ${
                openNavigation ? "block" : "hidden"
              } lg:block lg:pt-0`}
            >
              {navigation.map((group) => (
                <div className="mb-5" key={group.id}>
                  <button
                    className="flex items-start py-3.5"
                    onClick={() => setOpenGroupId(group.id)}
                  >
                    <div
                      className={`relative w-6 min-w-[24px] h-6 my-0.5 mr-5 p-0.5 ${
                        group.id === openGroupId
                          ? "bg-n-7 border-[0.125rem] border-n-1/15 rounded-md"
                          : ""
                      }`}
                    >
                      <Image
                        className={`relative z-1 w-full transition-transform ${
                          group.id === openGroupId ? "rotate-90" : ""
                        }`}
                        src="/images/icons/chevron-right.svg"
                        width={16}
                        height={16}
                        alt="Arrow"
                      />
                    </div>
                    <div className="text-xl text-left">{group.title}</div>
                  </button>
                  <div
                    className={`grid grid-rows-[0fr] transition-all ${
                      group.id === openGroupId ? "grid-rows-[1fr]" : ""
                    }`}
                  >
                    <ul className="overflow-hidden">
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.url}
                            target={item.url_suffix}
                            className={`block py-3.5 pl-12 hover:text-n-9/70 ${getColorClass(
                              item.url
                            )}`}
                          >
                            {item.title}{" "}
                            {item.url_icon === "LuExternalLink" ? (
                              <LuExternalLink className="inline-block -mt-1" />
                            ) : item.url_icon === "IoMdDownload" ? (
                              <IoMdDownload className="inline-block -mt-1" /> // Ensure this usage is correct
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <p className="h3 mb-16 pb-8 border-b border-n-1/15">
              Hello World
            </p>
            <div className="relative mb-16">

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GettingStarted;
