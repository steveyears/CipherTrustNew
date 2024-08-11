import { BsInfoSquareFill } from "react-icons/bs";

type TipBoxProps = {
    className?: string;
    children: React.ReactNode;
};

const TipBox = ({ className, children }: TipBoxProps) => (
    <div className={`tipbox flex relative ${className || ""}`}>
        <div className="relative my-8 text-n-1 font-thin p-6 border-4 border-l-n-9 border-r-0 w-full pl-20 border-t-0 border-b-0 bg-n-9/10">{children}</div>
        <div className="absolute left-3 top-15 flex justify-center w-16 h-full text-n-9">
            <BsInfoSquareFill size={32}/>
        </div>
    </div>
);

export default TipBox;