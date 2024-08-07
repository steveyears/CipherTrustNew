import Section from "@/components/Section";
import Tagline from "@/components/Tagline";
import Image from "next/image";
import Link from "next/link";

type FeaturesProps = {};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Features = ({}: FeaturesProps) => {
  return (
    <Section>
      <div className="container">
        <div className="mb-48 -mt-20">
          <div className="mt-20 mb-8">
            <Tagline>CipherTrust Platform Community Edition</Tagline>
            <p className="h3 mt-2">Included in the Community Edition</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-8">
            <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
              <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
                <Image
                  src={`${basePath}/images/how-it-works/image-1.webp`}
                  height={400}
                  width={400}
                  alt="CipherTrust Manager"
                  className="w-full h-full object-cover md:-translate-y-[8rem] -translate-y-[4rem] opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[17rem] bg-n-11 flex rounded-b-2xl">
                  <div className="p-6">
                    <p className="h5 text-n-1 mb-2">CipherTrust Manager</p>
                    <p className="mb-4 md:mb-8">
                      Enterprise key management solution that enables
                      organizations to centrally manage encryption keys
                    </p>
                    <div className="lg:absolute lg:bottom-8">
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
            </div>
            <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
              <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
                <Image
                  src={`${basePath}/images/how-it-works/image-3.webp`}
                  height={400}
                  width={400}
                  alt="CipherTrust Manager"
                  className="w-full h-full object-cover md:-translate-y-[8rem] -translate-y-[4rem] opacity-80"
                />
                  <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[17rem] bg-n-11 flex rounded-b-2xl">
                  <div className="p-6">
                    <p className="h5 text-n-1 mb-2">
                      Transparent Encryption for Kubernetes
                    </p>
                    <p className="mb-4 md:mb-8">
                      Implement robust encryption for data at rest within your
                      Kubernetes environments
                    </p>
                    <div className="lg:absolute lg:bottom-8">
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
            </div>

            <div className="relative z-9 rounded-xl border border-n-1/10 h-full flex flex-col justify-end">
              <div className="w-full min-h-[24rem] md:min-h-[32rem] overflow-hidden rounded-2xl">
                <Image
                  src={`${basePath}/images/how-it-works/image-2.webp`}
                  height={400}
                  width={400}
                  alt="CipherTrust Manager"
                  className="w-full h-full object-cover md:-translate-y-[6rem] -translate-y-[3rem] opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full min-h-[10rem] md:min-h-[17rem] bg-n-11 flex rounded-b-2xl">
                  <div className="p-6">
                    <p className="h5 text-n-1 mb-2">
                      Data Protection Gateway
                    </p>
                    <p className="mb-4 md:mb-8">
                      CipherTrust Connector that keeps data in transit secure
                      without the need to edit application source code
                    </p>
                    <div className="lg:absolute lg:bottom-8">
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

        <div className="-mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex items-center justify-center -mt-6">
              <Image
                src={`${basePath}/images/features/CipherTrust_Dashboard.webp`}
                width="1000"
                height="1000"
                alt="Application Window"
                className="shadow-large-blur p-1 rounded-2xl"
              />
            </div>
            <div className="absolute top-1/2 mt-60 -ml-40 right-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-y-1/2 opacity-60 mix-blend-color-dodge pointer-events-none">
              <div className="absolute top-0 -left-16 w-[58.85rem] h-[58.85rem] -translate-y-1/2">
                <Image
                  className="w-full"
                  src={`${basePath}/images/gradient.png`}
                  width={942}
                  height={942}
                  alt="Gradient"
                />
              </div>
            </div>
            <div>
              <h4 className="h4 mb-4">
                Improve Efficiency with Full Separation of DevSecOps Duties
              </h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    <span className="font-bold">
                      Enhanced Security Management:
                    </span>{" "}
                    By separating security tasks from development and
                    operations, the platform ensures specialized security
                    oversight, reducing the risk of vulnerabilities being
                    introduced during the development process.
                  </p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    <span className="font-bold">Streamlined Workflows:</span>{" "}
                    Clearly defined roles for development, security, and
                    operations teams help in streamlining workflows and reducing
                    bottlenecks.
                  </p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    <span className="font-bold">
                      Improved Compliance and Auditability:
                    </span>{" "}
                    The separation of duties ensures that security measures are
                    properly implemented and easily audited, facilitating
                    compliance with regulatory requirements.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="h4 mb-4">
                Transparently Protect Sensitive Data in Cloud Apps & File Stores
              </h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    Protect sensitive data in legacy and cloud-native
                    applications using CipherTrust Data Protection Gateway by
                    implementing advanced encryption and tokenization
                    techniques. This gateway ensures that data is secured before
                    it leaves your environment, providing robust protection
                    against unauthorized access.
                  </p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    Protect persistent data accessed by containers using
                    CipherTrust Transparent Encryption for Kubernetes by
                    seamlessly encrypting data at rest within your Kubernetes
                    environment. This ensures that sensitive information stored
                    in containerized applications remains secure, even in
                    dynamic and scalable environments.
                  </p>
                </li>
              </ul>
            </div>
            <div></div>
            <div></div>
            <div>
              {" "}
              <h4 className="h4 mb-4">
                Centralize Management of Keys and Policies
              </h4>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    Enable DevSecOps to incorporate key management into their
                    infrastructure by seamlessly integrating CipherTrust's key
                    management solutions. This allows development, security, and
                    operations teams to automate the generation, storage, and
                    lifecycle management of cryptographic keys within their
                    CI/CD pipelines.
                  </p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <Image
                    src={`${basePath}/images/check_blue.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">
                    Centralize key management for all applications in
                    development by using a unified platform that handles the
                    creation, distribution, and lifecycle management of
                    cryptographic keys. This approach ensures that all
                    applications adhere to consistent security policies and
                    standards, reducing the complexity and risk associated with
                    managing keys in disparate systems.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
