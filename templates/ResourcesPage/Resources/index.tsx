import dynamic from "next/dynamic";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AWSVideo from "@/components/ModalVideos/video_AWS_commandline"

import { LuExternalLink } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";



const Grid = dynamic(() => import("./Grid"), { ssr: false });

import { resources } from "@/mocks/resources";

type ResourcesProps = {};

const Resources = ({}: ResourcesProps) => {

  return (
    <Section>
      <div className="container">
        <Heading
          textAlignClassName="text-center"
          titleLarge="Resources"
          textLarge="Explore this collection of articles, documents, and videos to help you better understand the CipherTrust Platform Community Edition"
        />
        <div className="relative">
          <div className="relative z-10 mb-8 pb-8 border-b border-n-1/15">
            <ResponsiveMasonry
              className="relative z-2"
              columnsCountBreakPoints={{ 1:1, 768: 2, 1280: 3 }}
            >
              <Masonry gutter="1.5rem">
              <div className="flex flex-col bg-n-8 border border-n-1/15 rounded-2xl">
                  <div className="flex items-start px-5 py-6 bg-n-7 rounded-t-[0.9375rem] md:px-10">
                    <div className="mr-4 min-w-[48px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/icon_video.svg`}
                        width={42}
                        height={42}
                        alt="icon"
                        className="opacity-60"
                      />
                    </div>

                    <div className="mr-5">
                      <h6 className="h6 leading-tight mb-1">
                        Video Tutorials
                      </h6>
                      <div className="caption text-n-1/25">Online Refererence</div>
                    </div>
                  </div>
                  <div className="body-2 flex-1 px-5 py-6 md:px-10">
                  <ul className="body-2">
                      <li className="flex items-start py-4">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                          <p className="ml-4">
                          <AWSVideo />
                          </p>
                      </li>
                      </ul>
                  </div>
                  </div>
                <div className="flex flex-col bg-n-8 border border-n-1/15 rounded-2xl">
                  <div className="flex items-start px-5 py-6 bg-n-7 rounded-t-[0.9375rem] md:px-10">
                    <div className="mr-4 min-w-[48px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/icon_documentation.svg`}
                        width={42}
                        height={42}
                        alt="icon"
                        className="opacity-60"
                      />
                    </div>

                    <div className="mr-5">
                      <h6 className="h6 leading-tight mb-1">
                        Online Product Documentation
                      </h6>
                      <div className="caption text-n-1/25">Online Refererence</div>
                    </div>
                  </div>
                  <div className="body-2 flex-1 px-5 py-6 md:px-10">
                    <ul className="body-2">
                      <li className="flex items-start py-4">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://thalesdocs.com/ctp/cm/latest/"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                            CipherTrust Manager
                            <LuExternalLink className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                      <li className="flex items-start py-4 border-t border-n-6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://thalesdocs.com/ctp/cte-con/cte-k8s/latest/"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          CipherTrust Transparent Encryption for Kubernetes
                            <LuExternalLink className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                      <li className="flex items-start py-4 border-t border-n-6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://thalesdocs.com/ctp/con/dpg/latest/"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          CipherTrust Data Protection Gateway (DPG)
                            <LuExternalLink className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col bg-n-8 border border-n-1/15 rounded-2xl">
                  <div className="flex items-start px-5 py-6 bg-n-7 rounded-t-[0.9375rem] md:px-10">
                    <div className="mr-4 min-w-[48px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/icon_pdf.svg`}
                        width={42}
                        height={42}
                        alt="icon"
                        className="opacity-60"
                      />
                    </div>

                    <div className="mr-5">
                      <h6 className="h6 leading-tight mb-1">
                        Product Data Sheets
                      </h6>
                      <div className="caption text-n-1/25">PDF Downloads</div>
                    </div>
                  </div>
                  <div className="body-2 flex-1 px-5 py-6 md:px-10">
                    <ul className="body-2">
                      <li className="flex items-start py-4">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://cpl.thalesgroup.com/sites/default/files/content/product_briefs/field_document/2022-10/ciphertrust-platform-community-edition.pdf"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          CipherTrust Platform Community Edition
                            <IoMdDownload className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                      <li className="flex items-start py-4 border-t border-n-6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://cpl.thalesgroup.com/sites/default/files/content/product_briefs/field_document/2023-02/ciphertrust-transparent-encryption-for-kubernetes-pb.pdf"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          CipherTrust Transparent Encryption for Kubernetes
                            <IoMdDownload className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                      <li className="flex items-start py-4 border-t border-n-6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://cpl.thalesgroup.com/sites/default/files/content/product_briefs/field_document/2022-07/ciphertrust-dp-gateway-pb.pdf"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          CipherTrust Data Protection Gateway (DPG)
                            <IoMdDownload className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col bg-n-8 border border-n-1/15 rounded-2xl">
                  <div className="flex items-start px-5 py-6 bg-n-7 rounded-t-[0.9375rem] md:px-10">
                    <div className="mr-4 min-w-[48px]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/icon_cloud.svg`}
                        width={42}
                        height={42}
                        alt="icon"
                        className="opacity-60"
                      />
                    </div>

                    <div className="mr-5">
                      <h6 className="h6 leading-tight mb-1">
                        Cloud Marketplace Installation Links 
                      </h6>
                      <div className="caption text-n-1/25">Online Marketplace Links</div>
                    </div>
                  </div>
                  <div className="body-2 flex-1 px-5 py-6 md:px-10">
                    <ul className="body-2">
                      <li className="flex items-start py-4">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://aws.amazon.com/marketplace/pp/prodview-adjvglziiunpg"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          Amazon Web Services
                            <LuExternalLink className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                      <li className="flex items-start py-4 border-t border-n-6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/thalesdiscplusainc1596561677238.cm_ce?tab=Overview"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          Microsoft Azure
                            <LuExternalLink className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                      <li className="flex items-start py-4 border-t border-n-6">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                          width={24}
                          height={24}
                          alt="Check"
                        />
                        <Link
                          href="https://console.cloud.google.com/marketplace/product/thales-cpl/ciphertrust-manager-ce-thales-cpl-public"
                          target="_blank"
                          className="hover:text-n-9 transition-all"
                        >
                          <p className="ml-4">
                          Google Cloud Platform
                            <LuExternalLink className="inline-block -mt-1 ml-2" />
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
            <Grid items={resources} />
          <div className="absolute top-[18.25rem] -left-[18rem] w-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
              <Image
                className="w-full"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/gradient.png`}
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
};

export default Resources;
