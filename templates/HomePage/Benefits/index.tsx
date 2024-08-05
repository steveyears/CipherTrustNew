import { useRef, useState } from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";

import { benefits } from "@/mocks/benefits";

type BenefitsProps = {};


const Benefits = ({}: BenefitsProps) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const ref = useRef<any>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        ref.current?.go(index);
    };

    return (
        <div className="overflow-hidden mt-44 mb-44">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Tools built to reduce drag on velocity"
                />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((item) => (
                            <div key={item.id}>
                                <Link
                                    className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                                    href="/features"
                                >
                                    <div className="relative z-2 flex flex-col h-[22.625rem] p-[2.375rem] pointer-events-none">
                                        <h5 className="h5 mb-5 text-n-1">
                                            {item.title}
                                        </h5>
                                        <p className="body-2 mb-6 text-n-2">
                                            {item.text}
                                        </p>
                                        <div className="flex items-center mt-auto">
                                            <Image
                                                src={`${basePath}${item.iconUrl}`} 
                                                width={48}
                                                height={48}
                                                alt={item.title}
                                            />
                                            <div className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                                Explore more
                                            </div>
                                            <svg
                                                className="ml-5 fill-n-1"
                                                width="24"
                                                height="24"
                                            >
                                                <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0.5 bg-n-11 border border-n-1/10 rounded-3xl"
                                    >
                                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                            {item.imageUrl && (
                                                <Image
                                                    className="w-full h-full object-cover rounded-3xl"
                                                    src={`${basePath}${item.imageUrl}`} 
                                                    width={380}
                                                    height={362}
                                                    alt={item.title}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Benefits;
