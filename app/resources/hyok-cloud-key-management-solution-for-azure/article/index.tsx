import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Image from "next/image";

const index = () => {
  return (
    <Section>
      <div className="container relative md:py-10 lg:pt-16 xl:pt-20">
        <Heading
          textAlignClassName="text-center"
          titleLarge="HYOK Cloud Key Management Solution for Azure"
          textLarge="Thales' CipherTrust Data Protection Gateway integrates with Microsoft Azure, Azure Stack, and M365 to simplify data security by offering centralized key management, reducing operational burdens, and enhancing efficiency with automated policies"
        />
        <div>
          <div className="inline-flex items-center bg-n-7 rounded-2xl p-6 mb-8 border border-n-1/10">
            <div className="mr-4 min-w-[48px]">
              <Image
                className="rounded-full border border-n-1/15"
                src="/images/resources/scotti.jpg"
                width={60}
                height={60}
                alt="Scotti Woolery-Price"
              />
            </div>
            <div>
              <span className="text-n-2 text-xs">Posted by:</span> <br />
              Scotti Woolery-Price
            </div>
          </div>
          <h3 className="h3 mb-6">Uncover Your Cybersecurity Blind Spots</h3>
          <p className="body-1 mb-6">
            Cybersecurity is a strategic risk that should be managed at the
            highest levels of an organization. In fact, the World Economic
            Forum&apos; Global Risk Report 2023 again ranked wide-spread
            cybercrime as a top-ten critical global threat. Of all the potential
            global risks to economies and societies including natural disasters,
            geopolitical conflict, energy supply, global debt and rising
            inflation, widespread cybercrime ranks #8 on both short term and
            long-term outlooks.
          </p>
          <p className="body-1 mb-6">
            Ranking in the top ten critical global threats is eye-opening! To
            help mitigate the risk and unshroud organizational blind spots,
            today&apos;s enterprises must look for leading-edge solutions that
            help with data governance and compliance.
          </p>
          <p className="h4 mb-6">
            Thales Solutions for Microsoft Azure, Azure Stack and M365
          </p>
          <p className="body-2 mb-6">
            You can simplify the way your organization discovers, protects, and
            controls your sensitive data. With our platform, Thales has
            integrated the CipherTrust Cloud Key Management (CCKM) solution with
            Microsoft Azure, Azure Stack and Microsoft 365.
          </p>
          <p className="body-2 mb-6">
            CCKM reduces your operational burden and increases efficiency. CCKM
            manages and synchronizes native keys, even if you have already
            created thousands of native cloud keys at your cloud provider. CCKM
            can help customers demonstrate compliance with internal, industry
            and national regulatory requirements so that you have the confidence
            to unblock sensitive workloads that may be stuck on-premises and
            move them to Azure.
          </p>
          <p className="h5">CCKM Benefits:</p>
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
                  Simplify compliance by taking control of your encryption keys
                  and your data
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
                  Achieve cost savings using automated key lifecycle management
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
                  Single pane of glass to help eliminate security holes
                  introduced by human error &ndash; set policies to be applied
                  consistently wherever data is stored
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
                  Support strategies for workload portability to increase
                  operational resilience as part of a robust business continuity
                  and disaster recovery plan
                </p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">Support all major public clouds</p>
              </li>
              <li className="flex items-start py-4 border-t border-n-6">
                <Image
                  src="/images/check_blue.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">
                  Flexible deployment options: on-premises, hybrid cloud, and as
                  a Service
                </p>
              </li>
            </ul>
          </p>
          <p className="body-2 mb-6">
            “Thales is a global Microsoft partner focused on delivering
            solutions for Azure Cloud, Azure Stack and M365, on-premises storage
            systems, intelligent edge appliances, and cloud-based Microsoft
            Azure Services. They are working to help customers transform their
            businesses to drive digital transformation for people,
            organizations, and industries worldwide. CipherTrust Cloud Key
            Management has been verified against Microsoft key products, is
            available on the Azure Marketplace and is simple to adopt for Azure
            customers.” &mdash; David Nunez Tejerina, Principal Product Manager,
            Microsoft
          </p>
          <p className="h4 mb-6">Bring Your Own Key</p>
          <p className="body-2 mb-6">
            With Thales&apos; Bring Your Own Key (BYOK) functionality, customers
            can maintain control of sensitive data using external key management
            services ensuring full encryption capabilities, key lifecycle
            management, and centralized key management across clouds, regions,
            accounts, subscriptions, projects, applications, org ids and more.
            CCKM helps manage native Azure keys, Standard/Premium Key Vaults as
            well as Managed HSM pools, in addition to BYOK. CipherTrust Manager
            as well as Luna Network HSM can be used as a key source.
          </p>
          <p className="h4 mb-6">Single Pane of Glass, Single Vendor</p>
          <p className="body-2 mb-6">
            According to the Thales 2023 Data Threat Report, 93% of
            organizations use four or more key management solutions (includes
            enterprise key manager vendors and cloud provider key managers).
            CCKM manages all of your encryption keys across clouds and services
            with a single pane of glass from a trusted vendor.
          </p>
          <p className="body-2 mb-6">
            CCKM integrated with Microsoft Azure, Azure Stack and Microsoft 365
            increases efficiency by reducing the operational burden. Giving
            customers lifecycle control, centralized management within and among
            clouds, and unparalleled visibility of cloud encryption keys reduces
            key management complexity and operational costs. Thousands of keys
            and native key stores are difficult to manage manually, and
            organizations may be stretched to consistently apply key lifecycle
            management policies such as rotation, backup and role-based access
            management across their entire digital estate &ndash; leading to security
            holes and failed audits. 99% of data breaches occur because of human
            error. You can shrink the threat surface introduced by human error
            when you use centralized automated key lifecycle management provided
            by CCKM.
          </p>
          <p className="h4 mb-6">Multi-Cloud Support</p>
          <p className="body-2 mb-6">
            Organizations with multi-cloud are struggling to protect their
            sensitive data, because while cloud delivers a multitude of benefits
            these can often be offset by a multitude of challenges. It can also
            be very time consuming to manage the different native stores and
            native key management tools across different clouds and on-premises
            since there is no industry standard. Based on customer testimonials,
            CCKM can provide a 30x savings in time and cost in managing
            thousands of native key stores across hybrid multi-cloud
            environments which can free up IT teams to focus on other urgent
            business priorities. 
          </p>
          <p className="h4 mb-6">Operational Sovereignty</p>
          <p className="body-2 mb-6">
            CCKM helps organizations to control their digital sovereignty across
            major public and government clouds including Microsoft Azure, Azure
            Government, Amazon Web Services, Google Cloud, Oracle Cloud,
            Salesforce and SAP. The solution enables you to run in different
            environments to support a strong business continuity plan. CCKM can
            provide an organization with a holistic view of where all key
            workloads and sensitive data are located.
          </p>
         
        </div>
        <div className="absolute top-[20rem] left-[20rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
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
