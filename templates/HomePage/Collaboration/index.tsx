import Section from "@/components/Section";
import Image from "next/image";

import { text, content, apps } from "@/mocks/collaboration";

type CollaborationProps = {};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Collaboration = ({}: CollaborationProps) => {
    return (
        <Section className="mt-40">
            <div className="container lg:flex">
                <div className="max-w-[32rem] mr-16">
                    <p className="h2 mb-4 md:mb-8">
                        Discover, protect, and control your data anywhere
                    </p>
                    <ul className="mb-10 md:mb-14">
                        {content.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <Image
                                        src={`${basePath}/images/check_blue.svg`}
                                        width={24}
                                        height={24}
                                        alt="Check"
                                    />
                                    <h6 className="body-2 ml-5">
                                        {item.title}
                                    </h6>
                                </div>
                                {item.bulletText && (
                                    <p className="body-2 mt-3 text-n-2">
                                        {item.bulletText}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="mt-15 lg:mt-0 lg:ml-auto xl:w-[37.5rem]">
                    <div className="relative lg:mx-auto">
                        <p className="body-2 mb-4 text-n-1 md:mb-16 lg:mb-[110px]">
                            {text}
                        </p>
                        <div className="relative left-1/2 flex w-[22.5rem] aspect-square border border-n-1/20 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-n-1/20 rounded-full">
                                <div className="w-[5.75rem] aspect-square m-auto p-[0.1875rem] bg-gradient-to-br from-n-9 to-[#fe08bf] rounded-full">
                                    <div className="flex items-center justify-center w-full h-full bg-n-11 rounded-full">
                                        <Image
                                            src={`${basePath}/images/collaboration/icon-database.svg`}
                                            width={48}
                                            height={48}
                                            alt="CipherTrust Data Security Platform"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {apps.map((app, index) => (
                                    <li
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.625rem] ${
                                            index === 1 && "rotate-[45deg]"
                                        } ${index === 2 && "rotate-[90deg]"} ${
                                            index === 3 && "rotate-[135deg]"
                                        } ${index === 4 && "rotate-[180deg]"} ${
                                            index === 5 && "rotate-[225deg]"
                                        } ${index === 6 && "rotate-[270deg]"} ${
                                            index === 7 && "rotate-[315deg]"
                                        } origin-bottom`}
                                        key={app.id}
                                    >
                                        <div
                                            className={`relative -top-[1.625rem] flex w-[3.25rem] h-[3.25rem] bg-n-7 border border-n-1/30 rounded-xl ${
                                                index === 1 && "-rotate-[45deg]"
                                            } ${
                                                index === 2 && "-rotate-[90deg]"
                                            } ${
                                                index === 3 &&
                                                "-rotate-[135deg]"
                                            } ${
                                                index === 4 &&
                                                "-rotate-[180deg]"
                                            } ${
                                                index === 5 &&
                                                "-rotate-[225deg]"
                                            } ${
                                                index === 6 &&
                                                "-rotate-[270deg]"
                                            } ${
                                                index === 7 &&
                                                "-rotate-[315deg]"
                                            }`}
                                        >
                                            <Image
                                                className="m-auto"
                                                src={`${basePath}${app.icon}`}
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
