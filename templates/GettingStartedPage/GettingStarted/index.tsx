import { useState } from "react";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import ThreeSteps from "@/components/ThreeSteps";
import { LuExternalLink } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { navigation } from "@/mocks/getting-started";

type HowToUseProps = {};

const HowToUse = ({}: HowToUseProps) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>("g0");

  return (
    <Section>
      <div className="container md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="Getting Started"
          textLarge="Follow these easy steps to swiftly install the CipherTrust Platform Community Edition and start protecting your data in no time!"
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
                            className={`block py-3.5 pl-12 hover:text-n-9/70`}
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
            <h2 className="h2">
              Installing the CipherTrust Platform Community Edition
            </h2>
            <h3 className="text-2xl mt-4 mb-8 pb-8 border-b border-n-1/15 text-n-2">
              Enable DevSecOps teams to deploy data protection controls in
              minutes instead of weeks.
            </h3>
            <div className="relative mb-16">
              <div className="mb-10">
                <p className="body-2 mb-8">
                  CipherTrust Platform Community Edition offers a free-forever
                  license that includes two full enterprise-edition connectors:
                  Data Protection Gateway and Transparent Encryption for
                  Kubernetes.These connectors empowers users to manage and
                  secure sensitive data within their cloud applications and
                  Kubernetes environments at no additional cost.{" "}
                </p>
                <p className="body-2 mb-8">
                  The Data Protection Gateway provides advanced encryption and
                  tokenization, ensuring data is secured before it leaves the
                  organization's control. Transparent Encryption for Kubernetes
                  delivers seamless encryption of data at rest, enhancing
                  compliance and security without disrupting existing workflows
                  or requiring changes to application code. With these
                  enterprise-grade features, SecOps can effectively protect
                  their data without slowing down DevOps efficiency.
                </p>
                <p className="body-2">
                  Installing the CipherTrust Platform Community Edition is a
                  straightforward process designed to get you up and running
                  quickly. Whether you're a security professional or a developer
                  exploring data protection solutions, CipherTrust offers an
                  intuitive setup that simplifies deployment. The platform
                  provides comprehensive guides and resources to assist users
                  through each step, ensuring a hassle-free installation. With
                  its user-friendly interface and robust support, even those
                  with minimal technical experience can install and start using
                  the platform efficiently. This ease of installation allows you
                  to focus on leveraging CipherTrust's powerful features to
                  secure your data without getting bogged down by complex setup
                  procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ThreeSteps />
      </div>
    </Section>
  );
};

export default HowToUse;
