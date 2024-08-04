type SectionProps = {
    className?: string;
    crosses?: boolean;
    crossesOffset?: string;
    customPaddings?: boolean;
    children: React.ReactNode;
};

const Section = ({
    className,
    crosses,
    crossesOffset,
    customPaddings,
    children,
}: SectionProps) => (
    <div
        className={`relative ${
            customPaddings ||
            `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        } ${className || ""}`}
    >
        {children}

        {crosses && (
            <>

            </>
        )}
    </div>
);

export default Section;
