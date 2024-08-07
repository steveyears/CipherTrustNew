import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link className={`block w-[11.875rem] ${className || ""}`} href="/">
        <Image
            src={`${basePath}/images/logo.svg`}   
            width={190}
            height={40}
            priority={true}
            alt="Thales Logo"
        />
    </Link>
);

export default Logo;
