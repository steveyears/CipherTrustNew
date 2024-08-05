import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock";
import Tagline from "@/components/Tagline";
import TipBox from "@/components/TipBox";
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
    if (url.includes("aws-command-line")) {
      return "text-[#00BBDD]";
    }
    return "text-n-2";
  };

  const codeString1 = `
git clone https://github.com/ThalesGroup/learn-ciphertrust.git
`;

  const codeString2 = `
cd learn-ciphertrust/deploy/terraform/aws/
`;

  const codeString3 = `
aws configure
`;

  const codeString4 = `
terraform innit
`;

  const codeString5 = `
terraform apply
`;

  return (
    <Section>
      <div className="container md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="AWS Command Line Interface (CLI)"
          textLarge="Get started with CipherTrust Platform Community Edition automatically on AWS using a Terraform configuration file"
        />
        <div className="lg:flex">
          <div className="mb-16 lg:flex-shrink-0 lg:w-[20rem] lg:mr-10 xl:mr-20">
            <div
              className="flex items-center justify-between w-full h-16 px-6 bg-n-7 rounded-xl cursor-pointer lg:hidden"
              onClick={() => setOpenNavigation(!openNavigation)}
            >
              <div className="h6 text-n-1/50">Getting started</div>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icons/chevron-down.svg`}
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
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icons/chevron-right.svg`}
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
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <h3 className="h3 pb-8 ">Introduction</h3>
              <p className="body-2 mb-8">
                The page provides a step-by-step guide to deploying CipherTrust
                Manager Community Edition (CE) on Amazon Web Services (AWS)
                using a Terraform configuration file. It includes prerequisites
                like installing Git, Terraform CLI, and AWS CLI. The process
                involves cloning the CipherTrust repository, configuring AWS
                CLI, initializing Terraform modules, and applying Terraform
                configurations. This allows users to quickly set up CipherTrust
                Manager on AWS. Hello world
              </p>
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <h3 className="h3 pb-8">Demonstration Video </h3>
              <div className="mb-8 relative pt-[56.25%]">
                <iframe
                  src="https://app.heygen.com/embeds/001355cc46ae4a03b9529d8a9f2068e9"
                  title="Install CipherTrust Platform Community Edition on AWS"
                  allow="encrypted-media; fullscreen;"
                  className="rounded-2xl shadow-large-blur m4 absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <h3 className="h3 pb-8 ">Prerequisites</h3>
              <p className="body-2 mb-8">
                Before you begin, ensure you have the following installed on the
                machine you are installing from:
                <ul className="body-2">
                  <li className="flex items-start py-4 border-t border-n-6">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                      width={24}
                      height={24}
                      alt="Check"
                    />
                    <p className="ml-4">
                      <Link
                        className="text-n-9 hover:text-n-12 transition-all font-bold"
                        href="https://git-scm.com/downloads"
                        target="_blank"
                      >
                        Git Command Line Tools:
                      </Link>{" "}
                      The <span className="font-mono">&apso;git clone&apos;</span> command
                      is used to create a local copy of a remote Git repository.
                      This command downloads all the project files, history, and
                      branches, enabling users to work on the project locally.
                    </p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                      width={24}
                      height={24}
                      alt="Check"
                    />
                    <p className="ml-4">
                      <Link
                        className="text-n-9 hover:text-n-12 transition-all font-bold"
                        href="https://developer.hashicorp.com/terraform/install"
                        target="_blank"
                      >
                        Terraform Command Line Tools:
                      </Link>{" "}
                      Terraform is used to deploy projects by defining
                      infrastructure as code in configuration files. These
                      configuration files provision and manages the specified
                      resources across various cloud providers.
                    </p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                      width={24}
                      height={24}
                      alt="Check"
                    />
                    <p className="ml-4">
                      <Link
                        className="text-n-9 hover:text-n-12 transition-all font-bold"
                        href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
                        target="_blank"
                      >
                        AWS Command Line Tools:
                      </Link>{" "}
                      With one tool to download and configure, you can control
                      multiple AWS services from the command line and automate
                      them through scripts.
                    </p>
                  </li>
                  <li className="flex items-start py-4 border-t border-n-6">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                      width={24}
                      height={24}
                      alt="Check"
                    />
                    <p className="ml-4">
                      <Link
                        className="text-n-9 hover:text-n-12 transition-all font-bold"
                        href="https://aws.amazon.com/marketplace/pp/prodview-adjvglziiunpg"
                        target="_blank"
                      >
                        Subscribe to the CipherTrust Manager Community Edition
                        in AWS Marketplace:
                      </Link>{" "}
                      Before you can deploy CipherTrust Manager Community
                      Edition on AWS, you must subscribe to the product in the
                      AWS Marketplace and accept the terms of service
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <Tagline>Step 1</Tagline>
              <h3 className="h3 pb-8 ">Clone the GitHub Repository</h3>
              <p className="body-2 mb-6">
                In a terminal window, navigate to the directory where you want
                to clone the repository and run the following command:
                <CodeBlock language="bash" value={codeString1} />
              </p>
              <p className="body-2 mb-6">
                After the repository finishes downloading, navigate into the{" "}
                <span className="font-mono">
                  learn-ciphertrust/deploy/terraform/aws
                </span>{" "}
                directory:
                <CodeBlock language="bash" value={codeString2} />
              </p>
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <Tagline>Step 2</Tagline>
              <h3 className="h3 pb-8 ">Configure AWS Settings</h3>
              <p className="body-2 mb-6">
                In a terminal window, navigate to the directory where you want
                to clone the repository and run the following command:
                <CodeBlock language="bash" value={codeString3} />
              </p>
              <p>
                You will need to enter your account configuration details for:
                AWS Access Key ID, AWS Secret Access Key, Default region name,
                and Default output format.{" "}
              </p>
              <TipBox>
                <p className="mb-4">
                  To find your AWS Access Key and AWS Secret Access Key, follow
                  these steps:
                </p>
                <ol className="list-decimal list-inside ml-4 mb-4">
                  <li className="ml-2 mb-1">
                    Sign in to the AWS Management Console.
                  </li>
                  <li className="ml-2 mb-1">
                    Navigate to the IAM (Identity and Access Management)
                    Dashboard.
                  </li>
                  <li className="ml-2 mb-1">
                    Select &quot;Users&quot; from the left-hand menu.
                  </li>
                  <li className="ml-2 mb-1">
                    Select &quot;Users&quot; from the left-hand menu.
                  </li>
                  <li className="ml-2 mb-1">Click on your username.</li>
                  <li className="ml-2 mb-1">
                    Go to the &quot;Security credentials&quot; tab.
                  </li>
                  <li className="ml-2 mb-1">
                    Scroll down to the &quot;Access keys&quot; section.
                  </li>
                  <li className="ml-2 mb-1">
                    Click &quot;Create access key&quot; if you don&apos;t already have one.
                  </li>
                </ol>
                <p>
                  For more detailed instructions, refer to the{" "}
                  <Link
                    href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"
                    className="font-normal"
                  >
                    AWS documentation.
                  </Link>
                </p>
              </TipBox>
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <Tagline>Step 3</Tagline>
              <h3 className="h3 pb-8 ">Initialize the Terraform Config File</h3>
              <p className="body-2 mb-6">
                We now prepare the Terraform configuration file for deployment.
                This will initialize the working directory, the backend,
                download plugins, and install modules.
                <CodeBlock language="bash" value={codeString4} />
              </p>
              <p>
                This will initialize the working directory, the backend,
                download plugins, and install modules.
              </p>
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <Tagline>Step 4</Tagline>
              <h3 className="h3 pb-8 ">Apply Terraform Config File</h3>
              <p className="body-2 mb-6">
                We will now deploy CipherTrust Manager to AWS.
                <CodeBlock language="bash" value={codeString5} />
              </p>
              <p className="body-2 mb-6">
                This is the key command that will begin the deployment of
                CipherTrust Manager Community Edition to AWS. Terraform will
                read the configuration files and tell you what is going to be
                deployed.
              </p>
              <p className="body-2 mb-6">
                Simply press <span className="font-code">yes</span> to accept
                the default values for deployment.
              </p>
              <p className="body-2 mb-6">
                After the Terraform apply process completes, you will see two
                pieces of important information. The first is the public IP
                address of the AWS EC2 instance where CipherTrust Manager
                Community Edition is running. The other is the RSA-SSH key for
                the administrator, necessary for authentication when we
                configure CipherTrust manager in the next step
              </p>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/getting-started/AWS_Terminal_Screen.webp`}
                width={1200}
                height={800}
                alt="AWS Terminal Screen"
                className="rounded-3xl"
              />
            </div>
            <div className="relative border-b border-n-1/15 pb-8 mb-16">
              <Tagline>Step 5</Tagline>
              <h3 className="h3 pb-8 ">Initial Setup of CipherTrust Manager</h3>
              <p className="body-2 mb-6">
                To configure CipherTrust Manager, open a web browser and enter
                the IP address you were given after the Terraform script
                completed - make sure you use HTTPS. You will be warned that
                this site is not secure.
              </p>
              <p className="body-2 mb-6">
                You can simply bypass this warning by ignoring the security
                alert in your browser. If you want to avoid this alert, you can
                modify the security group associated with this EC2 instance in
                the AWS console to allow inbound traffic for HTTPS, typically on
                port 443.{" "}
              </p>
              <p className="body-2 mb-6">
                Your browser should now show the authentication screen.
              </p>
              <p className="body-2 mb-6">
                Next, copy your RSA SSH key that was generated by the Terraform
                script to your clipboard. Click on the SSH Public Key input box,
                paste your key, and click add.
              </p>
              <p className="body-2 mb-6">
                After a few seconds you will see some system startup messages,
                and then the initial login screen. Login with the default
                username &quot;admin&quot; and the default password &quot;admin,&quot; and click the
                Log In button.
              </p>
              <p className="body-2 mb-6">
                You will then be required to set a new password. Enter the
                current default password &quot;admin,&quot; then create a new, secure
                password for the admin account. Re-enter your new password for
                confirmation and click the Change Password button. After
                successfully changing your password, you will be logged out and
                will have to log in again.
              </p>
              <p className="body-2 mb-6">
                Login with the Username admin, and your newly reset password.
              </p>
              <p className="body-2 mb-6">
                You will then be presented with the main dashboard of
                CipherTrust Manager Community Edition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GettingStarted;
