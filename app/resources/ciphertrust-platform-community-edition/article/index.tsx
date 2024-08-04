import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import Comparison from "@/components/Comparison";
import Tagline from "@/components/Tagline";

const index = () => {
  return (
    <Section>
      <div className="container relative md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="CipherTrust Platform Community Edition"
          textLarge="Discover how CipherTrust Platform Community Edition provides robust encryption, key management, and seamless integration for cloud, on-premises, and hybrid infrastructures. Reduce the drag associated with adding data protection — in minutes instead of weeks!"
        />
        <div>
          <div className="flex flex-col lg:flex-row justify-left w-full">
            <Link href="https://cpl.thalesgroup.com/sites/default/files/content/product_briefs/field_document/2022-10/ciphertrust-platform-community-edition.pdf">
              <div className="inline-flex items-center bg-n-7 rounded-2xl px-6 py-4 mb-8 border border-n-1/10 text-code uppercase text-xs hover:bg-n-9 transition-all lg:mr-4">
                <div className="mr-4">
                  <Image
                    className="opacity-60"
                    src="/images/resources/icon_pdf.svg"
                    width={28}
                    height={28}
                    alt="Download PDF"
                  />
                </div>

                <div className="hover:text-n-9 transition-all text-code uppercase text-xs">
                  Download PDF Version
                </div>
              </div>
            </Link>
            <Link
              href="https://www.thalesdocs.com/ctp/cm/2.6/"
              target="_blank"
              className=""
            >
              <div className="inline-flex items-center bg-n-7 rounded-2xl px-6 py-4 mb-8 border border-n-1/10 text-code uppercase text-xs hover:bg-n-9 transition-all">
                <div className="mr-4">
                  <Image
                    className="opacity-60"
                    src="/images/resources/icon_documentation.svg"
                    width={28}
                    height={28}
                    alt="Online Documentation"
                  />
                </div>
                Online Documentation
              </div>
            </Link>
          </div>
          <p className="h3 mb-6">Business Problems</p>

          <p className="body-1 mb-6">
            You can accomplish more, in less time, when you remove the drag
            associated with adding data protection.{" "}
          </p>

          <p className="body-1 mb-6">
            Traditional data protection tools require applications to be
            modified -- requiring developers to modify their code to insert data
            protection. Every time there are changes to the data (a new field, a
            deleted field), or changes in how to protect the data (change in the
            cipher/key/parameters), traditional data protection tools require
            developers to modify the data protection code.
          </p>

          <p className="body-1 mb-6">
            Changes to the data or how it is protected can happen often.
            Developers using traditional data protection tools perform with
            lower velocity on other projects due to repeated interruptions to
            their focus to modify traditional data protection code.
          </p>

          <p className="h4 mb-6">CipherTrust Solutions</p>
          <p className="body-2 mb-6">
            Thales CipherTrust Platform Community Edition protects data and
            files — and your velocity by automating data protection instead of
            forcing a new step in the development process. CipherTrust Platform
            Community Edition provides a free-forever version of Thales
            CipherTrust Manager, three licenses for the Data Protection Gateway
            Connector and three licenses for the CipherTrust Transparent
            Encryption for Kubernetes Connector.
          </p>
          <p>
            <ul className="body-2 mb-6">
              <li className="flex items-start py-4">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Data Protection Gateway (DPG)
                  </span>{" "}
                  is a CipherTrust Connector that transparently protects
                  sensitive data in RESTful calls in legacy and cloud-native
                  applications without requiring code modifications. DPG offers
                  Data Security teams full control over how data is protected
                  and who has the right to access that data and how they can
                  access it. Concurrently, DPG offers DevOps an
                  easy-to-orchestrate pull and deploy model for simple
                  integrations with their current environment.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    CipherTrust Transparent Encryption for Kubernetes (CTE-K8s)
                  </span>{" "}
                  transparently protects sensitive data in Kubernetes file
                  stores using an inclusion list to determine authorized users
                  and processes. Even if a threat actor succeeds in escalating
                  their privilege, if they choose a user who is not on the
                  inclusion list, the threat actor will not be able to exercise
                  the elevated privilege. For example, ransomware encrypts data
                  in a hard drive. CTE-K8s protects the file, prohibiting
                  unauthorized reads and writes from users and processes --
                  which prevents ransomware from damaging/locking up/encrypting
                  files within a persistent volume.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">CipherTrust Manager</span> is an
                  industry-leading enterprise key management solution that
                  enables organizations to centrally manage encryption keys, and
                  configure and control security policies and access controls at
                  a granular level. CipherTrust Manager is the foundation of the
                  CipherTrust Data Security Platform, serving as the central
                  management point for CipherTrust Connectors which provide an
                  integrated suite of data-centric security products that unify
                  data discovery, protection and control on a single platform.
                </p>
              </li>
            </ul>
          </p>
          <p className="h4 mb-6">Use Cases Supported</p>
          <p className="body-2 mb-6">
            CipherTrust Platform Community Edition enables DevSecOps teams to
            rapidly implement the following use cases.
          </p>
          <p>
            <ul className="body-2 mb-6">
              <li className="flex items-start py-4">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">App-level Data Protection:</span>{" "}
                  Transparently protect sensitive data in RESTful calls in
                  legacy or cloud native applications with CipherTrust Data
                  Protection Gateway.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Kubernetes File Protection: T
                  </span>{" "}
                  Transparently protect data inside containers or external
                  storage accessible from containers deployed in Kubernetes
                  environments with CipherTrust Transparent Encryption for
                  Kubernetes.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">Key Management:</span> Protect
                  applications using RESTful calls with a robust centralized key
                  management and encryption solution, CipherTrust Manager
                  Community Edition.
                </p>
              </li>
            </ul>
          </p>
        </div>
      </div>

      <Comparison />

      <div className="container">
        <div className="mt-20 mb-8">
          <Tagline>CipherTrust Platform Community Edition</Tagline>
          <p className="h3 mt-2">Also Included</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
            <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
              <Image
                src="/images/how-it-works/image-3.webp"
                height={400}
                width={400}
                alt="CipherTrust Manager"
                className="w-full h-full object-cover md:-translate-y-[8rem] -translate-y-[4rem]"
              />
              <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[14rem] bg-n-11 flex rounded-b-2xl">
                <div className="p-4 md:p-8">
                  <p className="h5 text-n-1 mb-2">
                    Transparent Encryption for Kubernetes
                  </p>
                  <p className="mb-4 md:mb-8">
                    Implement robust encryption for data at rest within your
                    Kubernetes environments
                  </p>
                  <Link
                    href="resources/ciphertrust-transparent-encryption-for-kubernetes"
                    className="text-xs font-code uppercase px-4 py-2 md:px-6 md:py-4 border border-n-1/10 rounded-xl hover:border-n-9 hover:bg-n-9 transition-all"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
            <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
              <Image
                src="/images/how-it-works/image-2.webp"
                height={400}
                width={400}
                alt="CipherTrust Manager"
                className="w-full h-full object-cover md:-translate-y-[6rem] -translate-y-[3rem]"
              />
              <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[14rem] bg-n-11 flex rounded-b-2xl">
                <div className="p-4 md:p-8">
                  <p className="h5 text-n-1 mb-2">
                    Data Protection Gateway (DPG)
                  </p>
                  <p className="mb-4 md:mb-8">
                    CipherTrust Connector that keeps data in transit secure
                    without the need to edit application source code
                  </p>
                  <Link
                    href="resources/ciphertrust-data-protection-gateway"
                    className="text-xs font-code uppercase px-4 py-2 md:px-6 md:py-4 border border-n-1/10 rounded-xl hover:border-n-9 hover:bg-n-9 transition-all"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[24rem] left-[37rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <Image
            className="w-full"
            src="/images/gradient.png"
            width={942}
            height={942}
            alt="Gradient"
          />
        </div>
      </div>

      <div className="absolute -top-0 left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-56 -z-4">
        <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-1/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </Section>
  );
};

export default index;
