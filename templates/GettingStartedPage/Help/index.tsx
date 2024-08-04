import Section from "@/components/Section";
import Image from "next/image";
import { CgCommunity } from "react-icons/cg";
import { LuExternalLink } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

type HelpProps = {};

const Help = ({}: HelpProps) => (
  <Section>
    <div className="container pt-10 pb-10 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center lg:p-0">
      <div className="absolute z-0 top-1/2 w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <Image
            className="w-full opacity-60"
            src="/images/gradient.png"
            width={942}
            height={942}
            alt="Gradient"
          />
        </div>
      </div>
      <div className="hidden lg:block z-1">
        <div>
          <Image
            src="/images/help/need_help2.webp"
            width={500}
            height={500}
            alt="Help"
            className="p-10"
          />
        </div>
      </div>
      <div>
        <h2 className="h2 mb-4 md:mb-6">Need help?</h2>
        <p className="body-2 mb-5 text-n-1">
          If you are looking for more information or have a question, consider
          these resources:
        </p>
        <ul>
          <li className="flex items-center py-10 border-b border-n-1/15">
            <div className="flex items-center justify-center w-15 h-15 mr-10 bg-n-7 border border-n-1/15 rounded-xl">
              <CgCommunity size={36} className="text-n-9" />
            </div>
            <Link href="https://ciphertrust.dev" target="_blank">
              <div className="group">
                <h6 className="h6 text-n-1 group-hover:text-n-9 transition-all">
                  Join our community
                  <LuExternalLink className="inline-block ml-2 -mt-1" />
                </h6>
                <p className="body-2 text-n-2 group-hover:text-n-9 transition-all">
                  Discuss anything with other users and experts
                </p>
              </div>
            </Link>
          </li>
          <li className="flex items-center py-10">
            <div className="flex items-center justify-center w-15 h-15 mr-10 bg-n-7 border border-n-1/15 rounded-xl">
              <IoDocumentTextOutline size={30} className="text-n-9" />
            </div>
            <Link href="https://thalesdocs.com/ctp/cm/latest/" target="_blank">
              <div className="group">
                <h6 className="h6 text-n-1 group-hover:text-n-9 transition-all">
                  Review the documentation
                  <LuExternalLink className="inline-block ml-2 -mt-1" />
                </h6>
                <p className="body-2 text-n-2 group-hover:text-n-9 transition-all">
                  Comprehensive guides and tutorials for CipherTrust
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Help;
