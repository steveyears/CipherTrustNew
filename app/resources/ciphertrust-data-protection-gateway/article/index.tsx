import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import Tagline from "@/components/Tagline";

const index = () => {
  return (
    <Section>
      <div className="container relative md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="CipherTrust Data Protection Gateway (DPG)"
          textLarge="Protect sensitive data across diverse environments with CipherTrust Data Protection Gateway, offering advanced encryption and tokenization for cloud, on-premises, and hybrid applications without modifying existing workflows"
        />
        <div>
          <div className="flex flex-col lg:flex-row justify-left w-full">
            <Link href="https://cpl.thalesgroup.com/sites/default/files/content/product_briefs/field_document/2022-07/ciphertrust-dp-gateway-pb.pdf">
              <div className="inline-flex items-center bg-n-7 rounded-2xl px-6 py-4 mb-8 border border-n-1/10 text-code uppercase text-xs hover:bg-n-9 transition-all lg:mr-4">
                <div className="mr-4">
                  <Image
                    className="opacity-60"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/icon_pdf.svg`}
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
              href="https://thalesdocs.com/ctp/con/dpg/latest/"
              target="_blank"
              className=""
            >
              <div className="inline-flex items-center bg-n-7 rounded-2xl px-6 py-4 mb-8 border border-n-1/10 text-code uppercase text-xs hover:bg-n-9 transition-all">
                <div className="mr-4">
                  <Image
                    className="opacity-60"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/icon_documentation.svg`}
                    width={28}
                    height={28}
                    alt="Online Documentation"
                  />
                </div>
                Online Documentation
              </div>
            </Link>
          </div>

          <p className="body-1 mb-6">
            Transparently protect PII and sensitive data so that random people
            cannot see the data in the chain. CipherTrust Data Protection
            Gateway (DPG) protects the data at the earliest possible point,
            allowing the data to travel securely through the solution to its
            destination. Every single prying eye sees only the encrypted data.
            Only authorized people or applications can access the clear text.
          </p>
          <p className="body-2 mb-6">
            For many new and evolving applications, the DevOps team may face a
            challenge: protect data for web services-based applications without
            having access to the application and database or data store.
          </p>
          <p className="body-2 mb-6">
            Deployment architectures such as containers and cloud-scalability
            solutions (e.g., Kubernetes, Helm) demand data protection solutions
            that integrate seamlessly and easily.
          </p>
          <p className="body-2 mb-6">
            To meet these challenges, DPG offers transparent data protection to
            any RESTful web service or microservice leveraging REST APIs.
          </p>
          <p className="body-2 mb-6">
            DPG is deployed inline between the client and web service and
            transparently protects sensitive data inline without modifying
            legacy or cloud native applications. DPG interprets RESTful data and
            performs protection operations based on policies defined centrally
            in the Thales CipherTrust Manager, operating seamlessly with other
            pod-supporting services.
          </p>
          <p className="h4 mb-6">Architectural Overview</p>

          <p className="mb-12">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/illustration2C.webp`}
              height={1200}
              width={1200}
              alt="Illustration"
              className="rounded-3xl border border-n-1/10 mb-8"
            />
          </p>
          <p className="h4 mb-6">Protection Methods</p>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
            <div className="px-6">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/illustration_protection_policy.webp`}
                height={1200}
                width={1200}
                alt="Illustration"
              />
              <p className="text-center text-n-2">
                Creating a Protection Policy
              </p>
            </div>
            <div>
              <p className="body-1 mb-6">
                We enable the data security admin to define a protection policy
                selecting from an ever-growing list of encryption algorithms
                across the AES, DES and FPE families.
              </p>
            </div>
          </div>

          <p className="h4 mb-6">Protecting Sensitive Data In REST</p>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
            <div className="px-6">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/illustration_sensitive_data.webp`}
                height={1200}
                width={1200}
                alt="Illustration"
              />
              <p className="text-center text-n-2">
                Configuring a REST field for protection
              </p>
            </div>
            <div>
              <p className="body-1 mb-6">
                Selecting which fields to protect is fast and easy. Field
                selection, and protection and/or access policy, are configured
                centrally on CipherTrust Manager, delivering full separation of
                duties.
              </p>
            </div>
          </div>
          <p className="h4 mb-6">Cloud-Ready and Cloud-Scale</p>
          <p className="body-2 mb-6">
            CipherTrust Data Protection Gateway is deployed as a container and
            is fully compatible with Kubernetes orchestration systems such as
            Helm, Ansible and Terraform, and, of course, Kubernetes horizontal
            scaling. DPG can be deployed as a standalone container for legacy
            production deployments in addition to being used in development and
            testing use cases.
          </p>
          <p className="h4 mb-6">Thales Application-Layer Protection</p>
          <p className="body-2 mb-6">
            CipherTrust Data Protection Gateway is deployed as a container and
            is fully compatible with Kubernetes orchestration systems such as
            Helm, Ansible and Terraform, and, of course, Kubernetes horizontal
            scaling. DPG can be deployed as a standalone container for legacy
            production deployments in addition to being used in development and
            testing use cases.
          </p>
          <p className="h4 mb-6">CipherTrust Data Security Platform</p>
          <p className="body-2 mb-6">
            DPG is part of the CipherTrust Data Security Platform, which unifies
            data discovery, classification, data protection, and unprecedented
            granular access controls, all with centralized key management. This
            simplifies data security operations, accelerates time to compliance,
            secures cloud migrations and reduces risk across your business. You
            can rely on the Thales CipherTrust Data Security Platform to help
            you discover, protect and control your organization&apos;s sensitive
            data, wherever the data resides.
          </p>

          <div className="mt-20 mb-8">
            <Tagline>CipherTrust Platform Community Edition</Tagline>
            <p className="h3 mt-2">Also Included</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
              <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/how-it-works/image-3.webp`}
                  height={400}
                  width={400}
                  alt="CipherTrust Manager"
                  className="w-full h-full object-cover md:-translate-y-[8rem] -translate-y-[4rem] opacity-80"
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
                      href="/resources/ciphertrust-transparent-encryption-for-kubernetes"
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
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/how-it-works/image-1.webp`}
                  height={400}
                  width={400}
                  alt="CipherTrust Manager"
                  className="w-full h-full object-cover md:-translate-y-[8rem] -translate-y-[4rem] opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[14rem] bg-n-11 flex rounded-b-2xl">
                  <div className="p-4 md:p-8">
                    <p className="h5 text-n-1 mb-2">CipherTrust Manager</p>
                    <p className="mb-4 md:mb-8">
                      Enterprise key management solution that enables
                      organizations to centrally manage encryption keys
                    </p>
                    <Link
                      href="/resources/ciphertrust-platform-community-edition"
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
        <div className="absolute top-[20rem] left-[20rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
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
