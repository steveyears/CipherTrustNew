import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Tagline from "@/components/Tagline";
import TipBox from "@/components/TipBox";
import { LuExternalLink } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import Image from "next/image";
import {
  BsSquareFill,
  Bs1Square,
  Bs2Square,
  Bs3Square,
  Bs4Square,
  Bs5Square,
  Bs6Square,
  Bs7Square,
  Bs8Square,
  Bs9Square,
} from "react-icons/bs";

import { navigation } from "@/mocks/getting-started";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    if (url.includes("aws-marketplace")) {
      return "text-[#00BBDD]";
    }
    return "text-n-2";
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Section>
      <div className="container md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="AWS Marketplace"
          textLarge="Easily deploy CipherTrust Community Edition via AWS Marketplace to leverage robust data security, encryption, and key management capabilities directly within your AWS environment"
        />
        <div className="lg:flex">
          <div className="mb-16 lg:flex-shrink-0 lg:w-[20rem] lg:mr-10 xl:mr-20">
            <div
              className="flex items-center justify-between w-full h-16 px-6 bg-n-7 rounded-xl cursor-pointer lg:hidden"
              onClick={() => setOpenNavigation(!openNavigation)}
            >
              <div className="h6 text-n-1/50">Getting started</div>
              <Image
                src={`${basePath}images/icons/chevron-down.svg`}
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
                        src={`${basePath}/images/icons/chevron-right.svg`}
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
              Installation Guide for CipherTrust Manager Community Edition on
              Amazon Web Services (AWS)
            </p>
            <p className="body-2 mb-6">
              This document is designed for open-source developers and IT
              professionals who seek a robust solution for managing encryption
              keys and securing sensitive data in a scalable cloud environment.
            </p>
            <p className="body-2 mb-6">
              CipherTrust Manager Community Edition offers an enterprise-grade
              encryption and key management system that integrates seamlessly
              with AWS infrastructure. This guide provides detailed,
              step-by-step instructions to deploy CipherTrust Manager on AWS,
              ensuring that you leverage the full potential of AWS&apos;s cloud
              capabilities.
            </p>
            <p className="h4">Prerequisites</p>
            <p>
              <ul className="body-2 mb-6">
                <li className="flex items-start py-4">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="body-2 ml-4">
                    <span className="font-bold">AWS Account:</span> Ensure you
                    have an active AWS account with appropriate permissions to
                    manage EC2 instances, security groups, and IAM roles.
                  </p>
                </li>
                <li className="flex items-start py-4">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="body-2 ml-4">
                    <span className="font-bold">IAM Role:</span> A role with
                    sufficient permissions to create and manage necessary
                    resources within AWS.
                  </p>
                </li>
              </ul>
            </p>
            <p className="h4">Guide Outline</p>
            <p>
              <ul className="body-2 mb-6">
                <li className="flex items-start py-4">
                  <p>
                    <p className="font-bold">
                      <span className="text-n-12">Step 1: </span>AWS Permissions
                    </p>
                    Setting up the necessary Identity Access Management (IAM)
                    roles.
                  </p>
                </li>
                <li className="flex items-start py-4">
                  <p>
                    <p className="font-bold">
                      <span className="text-n-12">Step 2: </span>Launching an
                      EC2 Instance:
                    </p>
                    Detailed instructions to launch an EC2 instance using the
                    CipherTrust Manager AMI from AWS Marketplace.
                  </p>
                </li>
                <li className="flex items-start py-4">
                  <p>
                    <p className="font-bold">
                      <span className="text-n-12">Step 3: </span>Accessing the
                      Instance:
                    </p>
                    Connecting to your EC2 instance and accessing the
                    CipherTrust Manager web interface.
                  </p>
                </li>
                <li className="flex items-start py-4">
                  <p>
                    <p className="font-bold">
                      <span className="text-n-12">Step 4: </span>Completing the
                      Setup:
                    </p>
                    Initial configuration steps within CipherTrust Manager to
                    get your environment up and running.
                  </p>
                </li>
              </ul>
            </p>
            <div className="border-t border-n-1/15 pt-16 mt-16">
              <Tagline>Step 1</Tagline>
              <p className="h3">AWS Permissions</p>
              <p className="body-2 mb-6 text-n-9">
                Setting up the necessary Identity Access Management (IAM) roles.
              </p>
              <p>
                <p className="mb-4">
                  <Bs1Square
                    className="inline-block mr-2 -mt-1 text-n-9"
                    size={20}
                  />{" "}
                  Navigate to IAM
                </p>
                <div className="ml-8">
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                      In the AWS Management Console, search for IAM and select
                      IAM to open the Identity and Access Management (IAM)
                      dashboard.
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  <Bs2Square
                    className="inline-block mr-2 -mt-1 text-n-9"
                    size={20}
                  />{" "}
                  Create a New Role
                </p>
                <div className="ml-8">
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                      Click on Roles in the left-hand menu.
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                      Click on the Create role button.
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  <Bs3Square
                    className="inline-block mr-2 -mt-1 text-n-9"
                    size={20}
                  />{" "}
                  Select Trusted Entity
                </p>
                <div className="ml-8">
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    Choose AWS service as the type of trusted entity.
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    For the service that will use this role, select EC2. <span className="font-bold">Click Next: Permissions.</span>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  <Bs4Square
                    className="inline-block mr-2 -mt-1 text-n-9"
                    size={20}
                  />{" "}
                  Attach Permissions Policies
                </p>
                <div className="ml-8">
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    <p className="mb-4">Attach the necessary policies for CipherTrust Manager. This typically includes:</p>
                    <p className="font-code text-n-12 mb-2">AmazonEC2FullAccess</p>
                    <p className="font-code text-n-12 mb-2">AmazonS3FullAccess</p>
                    <p className="font-code text-n-12">AmazonVPCFullAccess</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    After selecting the policies, click <span className="font-bold">Next: Tags.</span>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  <Bs5Square
                    className="inline-block mr-2 -mt-1 text-n-9"
                    size={20}
                  />{" "}
                  Add Tags (Optional)
                </p>
                <div className="ml-8">
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    Add tags to organize and manage your role if needed. Click <span className="font-bold">Next: Review.</span>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  <Bs6Square
                    className="inline-block mr-2 -mt-1 text-n-9"
                    size={20}
                  />{" "}
                  Name and Review
                </p>
                <div className="ml-8">
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    Provide a name for the role, such as <span className="font-code">CipherTrustManagerRole.</span>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    Review the role and the policies attached to it.
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="inline-block w-2 mr-4">
                      <BsSquareFill className="mt-2 text-n-9" size={8} />
                    </div>
                    <div className="inline-block w-full">
                    Click <span className="font-bold">Create role</span> to finish.
                    </div>
                  </div>
                </div>
              </p>
              <TipBox><p className="font-bold mb-2">Note the Role ARN</p>
              <p>Once the role is created, locate the role in the IAM dashboard.
              Click on the role name and copy the Role ARN. You&apos;ll need this ARN for setting up the CipherTrust Manager Community Edition virtual machine.</p></TipBox>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GettingStarted;
