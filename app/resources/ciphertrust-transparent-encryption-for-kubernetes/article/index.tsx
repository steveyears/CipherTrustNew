import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import Tagline from "@/components/Tagline";
import { LuExternalLink } from "react-icons/lu";

const index = () => {
  return (
    <Section>
      <div className="container relative md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="CipherTrust Transparent Encryption for Kubernetes"
          textLarge="Implement robust encryption for data at rest within your Kubernetes environments, ensuring compliance and enhancing security without disrupting your workflows"
        />
        <div>
          <div className="flex flex-col lg:flex-row justify-left w-full">
            <Link href="https://cpl.thalesgroup.com/sites/default/files/content/product_briefs/field_document/2023-02/ciphertrust-transparent-encryption-for-kubernetes-pb.pdf">
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
              href="https://thalesdocs.com/ctp/cte-con/cte-k8s/1.2.0/"
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
          <p className="h3 mb-6">
            Challenge: Securing Applications for Kubernetes Environments
          </p>
          <p className="body-1 mb-6">
            Modern applications are increasingly built using containers, which
            are microservices packaged with their configurations and
            dependencies. Kubernetes is an open-source software for deploying
            and managing these containers. Containerized applications can be
            delivered, deployed and managed faster with Kubernetes to provide
            improved efficiency through re-usable modular components, cost
            savings through optimized resource utilization and reduced licensing
            expenses. However, there are several risks:
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
                  <span className="font-bold">Privileged user abuse.</span> By
                  default, Docker processes run with root privileges,
                  administrators have full access to all tenant secrets. This
                  level of untethered access poses multiple risks. Organizations
                  could be subject to privilege escalation attacks, if
                  administrators have unchecked access to container images and
                  the data stored within them.
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
                  <span className="font-bold">Cross container access.</span>{" "}
                  Poor configuration of permissions can result in multiple
                  containers having access to information that should remain
                  private. Further, when containers are hosted in shared
                  virtualized or cloud environments, critical information can be
                  exposed to third parties.
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
                  <span className="font-bold">Compliance risks.</span> Many
                  compliance mandates require stringent access controls and
                  auditing data access. However, many security teams have
                  limited controls available to manage and track access to data
                  held within containers and images. As a result, these teams
                  find it difficult to comply with relevant security policies
                  and regulatory mandates.
                </p>
              </li>
            </ul>
          </p>
          <p className="h4 mb-6">
            Solution: CipherTrust Transparent Encryption for Kubernetes
          </p>
          <p className="body-2 mb-6">
            CipherTrust Transparent Encryption for Kubernetes delivers
            in-container capabilities for encryption, access controls, and data
            access logging, that enables organizations to establish strong
            safeguards around data in Kubernetes environments. With this
            extension for CipherTrust Transparent Encryption, data protection
            can be applied on a per-container basis, both to secure data inside
            of containers and in external storage accessible from containers,
            all centrally managed from the CipherTrust Manager.
          </p>

          <p className="mb-6">
            <Image
              src="/images/resources/articles/illustration3.webp"
              height={1200}
              width={1200}
              alt="Illustration"
              className="rounded-3xl border border-n-1/10 mb-8"
            />
          </p>
          <p className="h4 mb-6">Benefits</p>
          <p className="body-2 mb-6">
            CipherTrust Transparent Encryption for Kubernetes provides a
            comprehensive set of capabilities to protect sensitive data in
            Kubernetes environments.
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
                  <span className="font-bold">Compliance.</span> This extension
                  of CipherTrust Transparent Encryption addresses compliance
                  requirements and regulatory mandates for protecting sensitive
                  data such as— payment cards, healthcare records or other
                  sensitive assets.
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
                    Protection from privileged-user threats.
                  </span>{" "}
                  The solution offers encryption with data access controls,
                  enabling privileged users, such as Docker or OpenShift cluster
                  administrators, to operate as regular users, without gaining
                  unauthorized access to sensitive data.
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
                  <span className="font-bold">Achieve robust security.</span>{" "}
                  CipherTrust Transparent Encryption for Kubernetes enforces
                  data security policies wherever the container is stored or
                  used - data centers, virtualized environments, even in cloud
                  implementations. Deploy and use containers where needed for
                  cost effectiveness, control, or performance without having to
                  make any changes to applications, containers, or
                  infrastructure sets.
                </p>
              </li>
            </ul>
          </p>
          <p className="h4 mb-6">Features</p>
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
                    Comprehensive Data Security Safeguards.
                  </span>{" "}
                  This extension of CipherTrust Transparent Encryption addresses
                  compliance requirements and regulatory mandates for protecting
                  sensitive data such as— payment cards, healthcare records or
                  other sensitive assets.
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
                    Scalable Transparent Encryption.
                  </span>{" "}
                  Provides data security controls without having to make any
                  changes to applications, containers or infrastructure sets. It
                  enables a single policy to be applied to all containers within
                  a Kubernetes cluster, or distinct policies applied to each
                  container within a cluster. This solution can scale up or
                  shrink down a Kubernetes environments as business needs
                  change.
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
                    Granular Access Controls and Visibility.
                  </span>{" "}
                  CipherTrust Transparent Encryption for Kubernetes offers the
                  detailed visibility and control you need to comply with the
                  most stringent policies and mandates. With this Kubernetes
                  security solution, enterprises can establish granular access
                  policies based on specific users, processes, and resource sets
                  within containers. Finally, this solution can establish
                  isolation between containers, so only authorized containers
                  can access sensitive information.
                </p>
              </li>
            </ul>
          </p>
          <div className="mt-20 mb-8">
            <Tagline>CipherTrust Platform Community Edition</Tagline>
            <p className="h3 mt-2">Also Included</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
              <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
                <Image
                  src="/images/how-it-works/image-1.webp"
                  height={400}
                  width={400}
                  alt="CipherTrust Manager"
                  className="w-full h-full object-cover md:-translate-y-[8rem] -translate-y-[4rem]"
                />
                <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[14rem] bg-n-11 flex rounded-b-2xl">
                  <div className="p-4 md:p-8">
                    <p className="h5 text-n-1 mb-2">CipherTrust Manager</p>
                    <p className="mb-4 md:mb-8">
                      Enterprise key management solution that enables
                      organizations to centrally manage encryption keys
                    </p>
                    <Link
                      href="resources/ciphertrust-platform-community-edition"
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
