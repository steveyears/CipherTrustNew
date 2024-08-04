import { BsInfoSquareFill } from "react-icons/bs";

type TipBoxProps = {
    className?: string;
    children: React.ReactNode;
};

const TipBox = ({ className, children }: TipBoxProps) => (
    <div className={`tipbox flex relative ${className || ""}`}>
        <div className="relative my-8 text-n-1 font-thin  p-6 border border-l-0 border-r-0 w-full pl-16 border-t-n-9/50 border-b-n-9/50 bg-n-9/5 [">{children}</div>
        <div className="absolute left-0 top-15 flex justify-center w-16 h-full text-n-9">
            <BsInfoSquareFill size={32}/>   </div>
    </div>
);

export default TipBox;