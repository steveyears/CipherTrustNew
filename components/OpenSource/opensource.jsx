import Link from "next/link";
import Image from "next/image";
import Section from "../Section/";
import { FaGithub } from "react-icons/fa";

const opensource = () => {
  return (
    <Section>
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative p-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[78rem] aspect-square border border-n-2/5 rounded-full -z-4">
                <div className="absolute top-1/2 left-1/2 w-[46.1125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-[35.9625rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-[25.2875rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-[16.1875rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            <Image
              src="/images/opensource/logo_opensource.webp"
              width={1200}
              height={1200}
              alt="Open Source"
            />
          </div>
          <div className="max-w-[32rem] ml-16">
            <p className="h2 mb-4 md:mb-8">Committed to open source</p>
            <p className="body-1 mb-6">
              As a strategic partner for open-source projects, Thales offers a
              full range of solutions to support your open-source systems today
              and in the future.
            </p>
            <ul className="mb-8">
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <h6 className="body-2 ml-5">
                    A strong commitment to R&D and active participation in the
                    standardization process.
                  </h6>
                </div>
              </li>
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <h6 className="body-2 ml-5">
                    A blended source approach to integrate open source
                    technologies with legacy systems.
                  </h6>
                </div>
              </li>
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <Image
                    src="/images/check_blue.svg"
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <h6 className="body-2 ml-5">
                    Proven methods and in-depth knowledge of our customers&apos;
                    businesses.
                  </h6>
                </div>
              </li>
            </ul>
            <Link href="https://thalesgroup.github.io/projects/" target="_blank" className="rounded-xl border border-n-1/15 px-4 py-4 font-code uppercase text-xs hover:border-n-9 hover:bg-n-9 transition-all"><FaGithub className="inline-block mr-2 -mt-0.5" size={18}/>View projects on GitHub</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default opensource;
