import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

type FeaturesProps = {};

const Features = ({}: FeaturesProps) => {
  return (
    <Section>
      <div className="container">
        <div className="-mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex items-center justify-center -mt-6">
              <Image
                src="/images/features/CipherTrust_Dashboard.webp"
                width="1000"
                height="1000"
                alt="Application Window"
                className="shadow-large-blur p-1 rounded-2xl"
              />
            </div>
            <div className="absolute top-1/2 -mt-32 right-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-y-1/2 opacity-60 mix-blend-color-dodge pointer-events-none">
              <div className="absolute top-0 -left-16 w-[58.85rem] h-[58.85rem] -translate-y-1/2">
                <Image
                  className="w-full"
                  src="/images/gradient.png"
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
                    src="/images/check_blue.svg"
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
                    src="/images/check_blue.svg"
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
                    src="/images/check_blue.svg"
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
                    src="/images/check_blue.svg"
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
                    src="/images/check_blue.svg"
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
                    src="/images/check_blue.svg"
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
                    src="/images/check_blue.svg"
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
