import Section from "@/components/Section";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type JoinProps = {};

const Join = ({}: JoinProps) => (
  <Section crosses>
    <div className="container">
      <div className="relative max-w-[43.125rem] mx-auto py-8 md:py-14 xl:py-0">
        <div className="relative z-1 text-center">
          <h1 className="h1 mb-12">
            Be part of the future of{" "}
            <span className="inline-block relative">
              CipherTrust
              <Image
                className="absolute top-full left-0 w-full"
                src={`${basePath}/images/curve_new.png`}
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 mb-8 text-n-1">
            Join the community of developers transforming data security and take
            your projects to the next level. Don’t wait—download CipherTrust
            Platform Community Edition now and secure your data with confidence!
          </p>

          <div className="relative z-10 text-center mx-auto">
            <Link
              href="https://github.com/ThalesGroup/learn-ciphertrust"
              target="_blank"
            >
              <div className="rounded-2xl border border-n-3 px-12 py-6 text-white text-xl max-w-[22rem] mx-auto font-code uppercase bg-n-11/30 hover:text-n-9 hover:bg-n-11 hover:border-n-9 transition-all">
                <FaGithub
                  className="relative inline-block items-center mr-2 -mt-1"
                  size={24}
                />
                Clone Repository
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[39.25rem] h-[39.25rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[30.625rem] h-[30.625rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[21.5rem] h-[21.5rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[13.75rem] h-[13.75rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute top-1/2 left-[32rem] w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-color-dodge pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <Image
              className="w-full"
              src={`${basePath}/images/gradient.png`}
              width={942}
              height={942}
              alt="Gradient"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Join;
