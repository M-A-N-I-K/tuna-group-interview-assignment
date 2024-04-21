import React from "react";

const shapes = {
	square: "rounded-[0px]",
} as const;
const variants = {
	underline: {
		gray_200_01:
			"text-blue_gray-500 border-b border-gray-200_01 border-solid",
	},
} as const;
const sizes = {
	xs: "h-[38px] pr-[35px] text-lg",
} as const;

type InputProps = Omit<
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>,
	"size" | "prefix" | "type" | "onChange"
> &
	Partial<{
		className: string;
		name: string;
		placeholder: string;
		type: string;
		label: string;
		prefix: React.ReactNode;
		suffix: React.ReactNode;
		onChange: Function;
		shape: keyof typeof shapes;
		variant: keyof typeof variants;
		size: keyof typeof sizes;
		color: string;
	}>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className = "",
			name = "",
			placeholder = "",
			type = "text",
			children,
			label = "",
			prefix,
			suffix,
			onChange,
			shape,
			variant = "underline",
			size = "xs",
			color = "gray_200_01",
			...restProps
		},
		ref
	) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
			e.stopPropagation();
			if (e && e.target) {
				const { value } = e.target;
				if (onChange) onChange(value);
			}
		};

		return (
			<>
				<div
					className={`${className} flex items-center justify-center text-lg  ${
						(shape && shapes[shape]) || ""
					} ${
						variants[variant]?.[
							color as keyof (typeof variants)[typeof variant]
						] ||
						variants[variant] ||
						""
					} ${sizes[size] || ""}`}
				>
					{!!label && label}
					{!!prefix && prefix}
					<input
						ref={ref}
						type={type}
						name={name}
						onChange={handleChange}
						placeholder={placeholder}
						{...restProps}
					/>
					{!!suffix && suffix}
				</div>
			</>
		);
	}
);

export { Input };
