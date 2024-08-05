import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";

const index = () => {
  return (
    <Section>
      <div className="container relative md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="Reduce the Drag on Your DevSecOps Processes with CipherTrust Platform Community Edition"
          textLarge="The CipherTrust Platform Community Edition bridges the gap between DevOps and SecOps, by providing a clear separation of duties for those who implement security policies, and those who manage/monitor the policies to assess compliance."
        />
        <div>
          <div className="inline-flex items-center bg-n-7 rounded-2xl p-6 mb-8 border border-n-1/10">
            <div className="mr-4 min-w-[48px]">
              <Image
                className="rounded-full border border-n-1/15"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/krishna.png`}
                width={60}
                height={60}
                alt="Krishna Ksheerabdhi"
              />
            </div>
            <div>
              <span className="text-n-2 text-xs">Posted by:</span> <br />
              Krishna Ksheerabdhi
            </div>
          </div>
          <h3 className="h3 mb-6">Introduction</h3>
          <p className="body-1 mb-6">
            DevSecOps is all about allowing the participants - Developers,
            Security, and Operations, to work together in securely developing,
            deploying and running applications in hybrid cloud infrastructures.
            The main goal is to reduce the drag on application deployment in
            legacy and multi-cloud infrastructures without sacrificing data
            security. Ultimately, organizations want to remain compliant with
            major data privacy regulations and protect their sensitive data in
            applications from being exposed when data breaches occur.
          </p>
          <p className="body-1 mb-6">
            DevOps (Development Operations) is always trying to maximize the
            velocity of software delivery, whereas SecOps (Security Operations)
            is always lagging behind to ensure that sensitive data does not get
            into the hands of bad actors or the competition. The CipherTrust
            Platform Community Edition bridges the gap between DevOps and
            SecOps, by providing a clear separation of duties for those who
            implement security policies, and those who manage/monitor the
            policies to assess compliance.
          </p>
          <p className="h4 mb-6">
            Adding Data Protection to Multi-cloud Applications can be
            Challenging
          </p>
          <p className="body-2 mb-6">
            DevSecOps teams face the following problems when protecting
            sensitive data in multi-cloud applications:
          </p>
          <p>
            <ul className="body-2 mb-6">
              <li className="flex items-start py-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Cloud applications need to be modified:
                  </span>{" "}
                  DevSecOps teams have to modify cloud applications to insert
                  RESTful calls for encrypting/tokenizing data. They cannot
                  modify these applications when they do not have access to the
                  source code or they do not have rights to modify the database
                  where the application&apos;s data is stored.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Data protection across a multi-cloud infrastructure is
                    complex:
                  </span>{" "}
                  Protecting data using each cloud provider&apos;s native
                  security services can soon become complex to manage, unless
                  you choose a single data security platform that works across a
                  multi-cloud infrastructure.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Implementing data security requires specialized skills:
                  </span>{" "}
                  Data protection involves knowledge of data security platforms
                  that provide centralized key management and
                  encryption/tokenization functionality to anonymize sensitive
                  data. Cryptographic-specific knowledge of incorporating data
                  security functionality is difficult to find in general
                  application developers.
                </p>
              </li>
            </ul>
          </p>
          <p className="h4 mb-6">
            CipherTrust Platform Community Edition Simplifies Data Protection
          </p>
          <p className="body-2 mb-6">
            The CipherTrust Platform Community Edition enables DevSecOps to
            rapidly deploy data protection controls into hybrid and multi-cloud
            applications. It simplifies deployment of centralized key
            management, encryption and tokenization controls into multi-cloud
            applications in minutes instead of weeks, as compared to other data
            security solutions available in the market today.
          </p>
          <p className="body-2 mb-6">
            The CipherTrust Platform Community Edition includes the following
            CipherTrust Data Security Platform products enabling DevSecOps to
            quickly deploy data protection into multi-cloud applications.
          </p>
          <p>
            <ul className="body-2 mb-6">
              <li className="flex items-start py-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    CipherTrust Manager Community Edition:
                  </span>{" "}
                  Includes a Virtual free-forever version of the CipherTrust
                  Manager that enables developers to protect sensitive data by
                  modifying applications using RESTful calls for centralized key
                  management and encryption operations.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    CipherTrust Data Protection Gateway:
                  </span>{" "}
                  Enables DevSecOps to transparently protect sensitive data in
                  REST APIs, without modifying cloud native or on-premise
                  applications.
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    CipherTrust Transparent Encryption for Kubernetes:
                  </span>{" "}
                  Enables DevSecOps to transparently protect data inside
                  containers or external storage accessible from containers,
                  without modifying containerized applications.
                </p>
              </li>
            </ul>
          </p>
          <p className="body-1 mb-6">
            Community Edition is available from Amazon Web Services, Microsoft
            Azure, and Google Cloud Marketplaces.
          </p>
          <p className="h4 mb-6">
            Ways to Protect Sensitive Data in Cloud Applications
          </p>
          <p className="body-1 mb-6">
            With CipherTrust Platform CE, DevSecOps have the following options
            to deploy data protection controls in a fraction of the time it
            takes with other solutions available in the market today.
          </p>

          <p>
            <ul className="body-2 mb-6">
              <li className="flex items-start py-4 mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">Centralized Key Management:</span>{" "}
                  Developers can use this option independent of the CipherTrust
                  connectors if they know data protection technologies and have
                  access to the source code of the corresponding applications.
                  Developers can insert RESTful calls into applications, to
                  incorporate key management and encryption/ tokenization
                  services centrally provided by the Virtual CipherTrust
                  Manager. This has to be done during application development
                  and test phase - well before deploying applications in
                  multi-cloud infrastructure.
                </p>
              </li>
              <li className="ml-10">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/illustration1.webp`}
                  height={1200}
                  width={1200}
                  alt="Illustration"
                  className="rounded-3xl border border-n-1/10 mb-8"
                />
              </li>
              <li className="flex items-start py-4 mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Data Protection for Kubernetes environments
                  </span>{" "}
                  DevSecOps who do not have access to the application source
                  code, can rapidly protect data in REST APIs by using
                  CipherTrust Data Protection Gateway. They can set up data
                  protection policies in CipherTrust Manager, to selectively
                  encrypt/decrypt sensitive data in specific REST API calls for
                  specific applications, without modifying the application.
                  Community Edition is fully compatible with Kubernetes
                  orchestration systems, such as Helm, Ansible, and Terraform,
                  and includes three Data Protection Gateway licenses to protect
                  three applications registered on CipherTrust Manager.
                </p>
              </li>
              <li className="ml-10">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/illustration2C.webp`}
                  height={1200}
                  width={1200}
                  alt="Illustration"
                  className="rounded-3xl border border-n-1/10 mb-8"
                />
              </li>
              <li className="flex items-start py-4 mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_blue.svg`}
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  <span className="font-bold">
                    Data Protection for Kubernetes environments
                  </span>{" "}
                  DevSecOps who do not have access to the source code of
                  containerized applications, can transparently protect data
                  inside containers and external storage accessible from
                  containers with CipherTrust Transparent Encryption for
                  Kubernetes. Community Edition includes three licenses to
                  protect file-systems/volumes accessible by a three-node
                  Kubernetes cluster.
                </p>
              </li>
              <li className="ml-10">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/illustration3.webp`}
                  height={1200}
                  width={1200}
                  alt="Illustration"
                  className="rounded-3xl border border-n-1/10 mb-8"
                />
              </li>
            </ul>
          </p>
          <p className="h4 mb-6">Speedup DevSecOps Processes</p>
          <p className="body-1 mb-6">
            Thales&appos; CipherTrust Platform Community Edition makes it easy
            for DevSecOps to deploy data protection controls into hybrid and
            multi-cloud applications in a fraction of the time it takes with
            other data protection solutions available in the market today.
          </p>
          <ul className="body-2 mb-6">
            <li className="flex py-4 mb-6 items-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/icon_automation_white.svg`}
                width={80}
                height={80}
                alt="Automation"
                className="mr-4"
              />
              <p className="body-2 ml-4">
                <span className="font-bold">Improve efficiency:</span> Enables
                DevSecOps to rapidly deploy data protection controls into hybrid
                and cloud-native infrastructure, with full separation of duties.
                It speeds-up continuous integration and cloud (CI/CD) processes
                required to protect data in cloud-ready applications.
              </p>
            </li>
            <li className="flex items-start py-4 mb-6">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/icon_key_management.svg`}
                width={80}
                height={80}
                alt="Key Management"
                className="mr-4"
              />
              <p className="body-2 ml-4">
                <span className="font-bold">
                  Simplify centralized key management and encryption functions:
                </span>{" "}
                Developers can centralize key management and encryption policies
                across multi-cloud applications using a Virtual CipherTrust
                Manager. When required, one can upgrade to a version of
                CipherTrust Manager that works with a FIPS 140-2 Level 3
                certified Thales&apos; Luna Hardware Security Module to provide
                a secure root of trust.
              </p>
            </li>
            <li className="flex items-start py-4 mb-6">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/resources/articles/icon_node_white.svg`}
                width={80}
                height={80}
                alt="Mulitcloud"
                className="mr-4"
              />
              <p className="body-2 ml-4">
                <span className="font-bold">
                  Transparently Deploy Data Protection into Multi-cloud
                  Applications:
                </span>{" "}
                DevSecOps can rapidly protect data in legacy and cloud-native
                applications in minutes rather than weeks. They can protect
                sensitive data in RESTful calls and containers without modifying
                a single line of application source code.
              </p>
            </li>
          </ul>
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
