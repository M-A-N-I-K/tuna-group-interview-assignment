import React from "react";

const sizes = {
	"3xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
	"2xl": "text-[38px] font-semibold md:text-4xl sm:text-[34px]",
	xl: "text-[33px] font-bold md:text-[31px] sm:text-[29px]",
	"4xl": " font-semibold text-[20px] sm:text-[41px] md:text-[45px]",
	s: "text-xl font-semibold",
	md: "text-2xl font-semibold md:text-[22px]",
	xs: "text-[15px] sm:text-base font-bold",
	lg: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
};

export type HeadingProps = Partial<{
	className: string;
	as: any;
	size: keyof typeof sizes;
}> &
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
	children,
	className = "",
	size = "xs",
	as,
	...restProps
}) => {
	const Component = as || "h6";

	return (
		<Component
			className={`text-black-900 font-worksans ${className} ${sizes[size]}`}
			{...restProps}
		>
			{children}
		</Component>
	);
};

export { Heading };
