
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "../Logo";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import { navigation } from "@/constants/navigation";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [openNavigation, setOpenNavigation] = useState<boolean>(false);
    const searchParams = useSearchParams(); // Initialize searchParams here

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const pathname = usePathname();

    const handleClick = () => {
        enablePageScroll();
        setOpenNavigation(false);
    };

    useEffect(() => {
        enablePageScroll();
        setOpenNavigation(false);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 z-50 w-full ${
                openNavigation ? "bg-n-8" : " bg-n-8/90 backdrop-blur-sm"
            } border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}
        >
            <div className="flex items-center h-[4.75rem] px-5 lg:h-[5.2rem] lg:px-7.5 xl:px-10">
                <Logo className="xl:mr-8"/>
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[4.8125rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <Link
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname
                                        ? "z-2 lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                href={item.url}
                                onClick={() =>
                                    item.url.startsWith(pathname) &&
                                    handleClick()
                                }
                                key={item.id}
                            >
                                {item.title}
                                <div
                                    className={`hidden mx-auto absolute left-0 translate bottom-0 w-full h-0 bg-n-6 lg:block ${
                                        pathname === item.url
                                            ? "lg:h-1.5 lg:bg-n-9"
                                            : ""
                                    }`}
                                ></div>
                            </Link>
                        ))}
                    </div>
                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                        </div>
                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>
                </nav>
                <Link
                    className={`button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block ${
                        searchParams.has("new") ? "lg:text-n-1" : ""
                    }`}
                    href="https://ciphertrust.dev" target="_blank"
                >
                    Community <LuExternalLink className="inline-block -mt-1"/>
                </Link>
                <Link
                    className={`button hidden mr-8 text-n-1 transition-all bg-n-9 hover:text-n-1 hover:bg-n-12 lg:block px-4 py-2 rounded-lg  ${
                        searchParams.has("sign") ? "lg:text-n-1" : ""
                    }`}
                    href="https://github.com/ThalesGroup/learn-ciphertrust" 
                    target="_blank"
                >
                    <FaGithub className="inline-block mr-2 -mt-0.5"/>Clone Repository
                </Link>
 
                <div
                    className="ml-auto lg:hidden"
                    onClick={toggleNavigation}
                >
                    <svg
                        className="overflow-visible"
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                    >
                        <rect
                            className="transition-all origin-center"
                            y={openNavigation ? "5" : "0"}
                            width="20"
                            height="2"
                            rx="1"
                            fill="white"
                            transform={`rotate(${openNavigation ? "45" : "0"})`}
                        />
                        <rect
                            className="transition-all origin-center"
                            y={openNavigation ? "5" : "10"}
                            width="20"
                            height="2"
                            rx="1"
                            fill="white"
                            transform={`rotate(${
                                openNavigation ? "-45" : "0"
                            })`}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
