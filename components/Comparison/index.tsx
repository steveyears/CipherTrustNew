import Tippy from "@tippyjs/react";
import Heading from "@/components/Heading";
import Image from "next/image";
import Section from "@/components/Section";

import { comparison } from "@/mocks/comparison";

type ComparisonProps = {};

const Comparison = ({}: ComparisonProps) => {
    const check = (value: any, enterprise?: boolean) =>
        typeof value === "boolean" ? (
            value === true ? (
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/check_green.svg`}
                    width={24}
                    height={24}
                    alt="Check"
                    className="mx-auto"
                />
            ) : null
        ) : (
            value
        );

    return (
        <Section>
            <div className="container">
                <Heading
                    className="md:text-center"
                    title="CipherTrust Manager Features"
                />
                <div className="-mx-5 px-5 overflow-auto">
                    <table className="table-fixed w-full min-w-[32rem]">
                        <tbody>
                            <tr className="h6">
                                <td className="w-[50%] py-4 pr-10">Features</td>
                                <td className="p-4 text-center text-n-9">
                                    Community Edition
                                </td>
                                <td className="p-4 text-center text-[#7C7FAB]">
                                   Enterprise Edition
                                </td>
                            </tr>
                            {comparison.map((item) => (
                                <tr className="body-2" key={item.id}>
                                    <td className="w-[50%] h-[4.75rem] py-2.5 pr-2.5 border-t border-n-1/5">
                                        <div className="flex items-center">
                                            {item.title}
                                            <Tippy
                                                className="p-2.5 bg-n-8 text-n-2 text-sm text-code rounded-xl border border-n-1/10 drop-shadow-xl"
                                                content={item.tooltipContent}
                                                placement="right"
                                                animation="shift-toward"
                                            >
                                                <div className="flex-shrink-0 ml-3 opacity-30 transition-opacity hover:opacity-100">
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icons/help-circle.svg`}
                                                        width={24}
                                                        height={24}
                                                        alt="Help"
                                                    />
                                                </div>
                                            </Tippy>
                                        </div>
                                    </td>
                                    <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                                        {check(
                                            item.pricing[0],
                                        )}
                                    </td>
                                    <td className="h-[4.75rem] p-2.5 border-t border-n-1/5 text-center">
                                        {check(
                                            item.pricing[1],
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Section>
    );
};

export default Comparison;