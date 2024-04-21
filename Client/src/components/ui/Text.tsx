import React from "react";

const sizes = {
	xs: "text-base font-medium",
	lg: "text-5xl font-bold md:text-[52px] sm:text-[46px]",
	md: "text-3xl font-normal md:text-[52px] sm:text-[46px]",
	s: "text-md font-normal",
};

export type TextProps = Partial<{
	className: string;
	as: any;
	size: keyof typeof sizes;
}> &
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
	children,
	className = "",
	as,
	size = "xs",
	...restProps
}) => {
	const Component = as || "p";

	return (
		<Component
			className={`text-black-900 font-worksans ${className} ${sizes[size]}`}
			{...restProps}
		>
			{children}
		</Component>
	);
};

export { Text };
