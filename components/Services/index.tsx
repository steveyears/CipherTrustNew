import Section from "@/components/Section";
import Image from "next/image";
import Heading from "@/components/Heading";
import { FaAws } from "react-icons/fa";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { SiOracle } from "react-icons/si";
import { RiAlibabaCloudFill } from "react-icons/ri";

type ServicesProps = {
  containerClassName?: string;
};

const Services = ({ containerClassName }: ServicesProps) => (
  <Section>
    <div className={`container ${containerClassName || ""}`}>
      <Heading
        title="Improve efficiency with full separation of DevSecOps duties"
        textLarge="Rapidly secure, deploy and run cloud-native workloads across cloud service providers while speeding-up continuous integration and continuous delivery processes"
      />
      <div className="relative">
        <div className="relative bg-gradient-to-br from-n-11/30 to-n-11  z-1 flex items-center h-[38.75rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:h-[38.75rem] lg:p-20 xl:h-[40rem]">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <Image
              className="w-full h-full object-cover object-right"
              src="/images/services/devops3_bg.webp"
              width={797}
              height={733}
              alt="Full separation of DevSecOps duties"
            />
          </div>
          <div className="relative z-1 max-w-[32rem] mr-auto">
            <h4 className="h4 mb-4">Optimized DevSecOps Integration</h4>
            <p className="bpdy-2 mb-[3.125rem] text-n-1">
              Streamline security with CipherTrust Manager: empower your
              DevSecOps with seamless integration and automation
            </p>
            <ul className="body-2">
              {[
                "Provides a unified platform for managing encryption keys, policies, and access controls, reducing the complexity of managing security across various environments",
                "Ensures that only authorized personnel have access to sensitive data and critical security operations, enabling clear separation of duties",
                "Allows DevSecOps teams to define and enforce data protection policies consistently across on-premises, cloud, and hybrid environments.",
              ].map((item, index) => (
                <li
                  className="flex items-start py-4 border-t border-n-6"
                  key={index}
                >
                  <Image
                    src="/images/check_blue.svg"
                    width={24}
                    height={24}
                    alt="Check"
                  />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative bg-n-11 min-h-[38.75rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute top-0 w-full">
              <Image
                className="w-full h-full"
                src="/images/services/kubernetes_bg.webp"
                width={900}
                height={748}
                alt="Kubernetes"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Containers are covered</h4>
              <p className="body-2 text-n-1">
                {`CipherTrust Manager protects persistent volumes in Kubernetes by integrating with
                  Kubernetes storage classes and leveraging encryption
                  mechanisms to secure data-at-rest. It ensures that all data
                  stored in persistent volumes is encrypted using robust key
                  management practices, providing an additional layer of
                  security and compliance within Kubernetes environments.`}
              </p>
            </div>
          </div>
          <div className="relative bg-n-11 border border-n-1/10 rounded-3xl overflow-hidden lg:min-h-[45.75rem]">
            <div className="py-12 px-8 xl:px-16">
              <h4 className="h4 mb-4">Cloud native</h4>
              <p className="body-2 mb-[2.25rem] text-n-1">
                CipherTrust Manager is a cloud-native solution integrating
                seamlessly with major cloud providers enabling efficient key
                lifecycle management, automated policy enforcement, and
                real-time monitoring of data activities.
              </p>
              <ul className="flex items-center justify-between">
                    <li className="rounded-xl bg-n-6 p-4"><FaAws size={32}/></li>
                    <li className="rounded-xl bg-n-6 p-4"><VscAzure size={32}/></li>
                    <li className="rounded-xl bg-n-6 p-4"><BiLogoGoogleCloud size={32}/></li>
                    <li className="rounded-xl bg-n-6 p-4"><SiOracle size={32}/></li>
                    <li className="rounded-xl bg-n-6 p-4"><RiAlibabaCloudFill size={32}/></li>
              </ul>
            </div>
            <div className="absolute bottom-0 w-full pointer-events-none">
              <Image
                className="w-full"
                src="/images/services/cloud4_bg.webp"
                width={517}
                height={400}
                alt="Cloud Native"
              />
            </div>
          </div>    
        </div>
        <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
          <Image
            className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
            src="/images/gradient.png"
            width={1417}
            height={1417}
            alt="Gradient"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default Services;
