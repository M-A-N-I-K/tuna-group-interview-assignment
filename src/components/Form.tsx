import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Input } from "@/components/ui/Input";
import { Img } from "./ui/Img";
import { Link } from "react-router-dom";

interface FormProps {
	title: string;
	subtitle: string;
	btnText: string;
	image?: string;
	login?: boolean;
	signup?: boolean;
	message?: boolean;
}

export function Form({
	title,
	subtitle,
	btnText,
	login,
	signup,
	image = "images/img_intersect_5.png",
	message,
}: FormProps) {
	return (
		<>
			<div className="flex mt-12 flex-col items-start w-full lg:w-[35%] px-12 lg:px-0">
				<Heading size="xl" as="h1" className="uppercase !text-indigo-900">
					{title}
				</Heading>
				<div className="mt-[27px] h-[7px] w-[72%] bg-red-A700" />
				<div className="mt-[43px] flex flex-col gap-[42px] self-stretch">
					<Text size="s" as="p" className="leading-6 !text-blue_gray-400">
						{subtitle}
					</Text>
					<Input
						shape="square"
						type="text"
						name="name"
						placeholder={`Name*`}
						className="!text-gray-600 sm:pr-5"
					/>
					<Input
						shape="square"
						type="email"
						name="email"
						placeholder={`Email*`}
						className="!text-gray-600 sm:pr-5"
					/>
				</div>
				{signup ||
					(message && (
						<Input
							shape="square"
							type="text"
							name="phone"
							placeholder={`Phone Number*`}
							className="mt-[42px] self-stretch sm:pr-5"
						/>
					))}
				{signup ||
					(login && (
						<Input
							shape="square"
							type="password"
							name="password"
							placeholder={`Enter Password*`}
							className="mt-[42px] self-stretch sm:pr-5"
						/>
					))}
				{signup && (
					<Input
						shape="square"
						type="password"
						name="confirmPassword"
						placeholder={`Re-enter Password*`}
						className="mt-[42px] self-stretch sm:pr-5"
					/>
				)}
				{message && (
					<Input
						shape="square"
						type="text"
						name="message"
						placeholder={`Message*`}
						className="mt-[42px] pb-24 self-stretch sm:pr-5"
					/>
				)}
				{login && (
					<Link to="/" className="mt-[15px] self-end">
						<Text size="s" as="p" className="text-right !text-red-A700">
							Forgot password?
						</Text>
					</Link>
				)}
				<Button
					color="black_900"
					variant="fill"
					shape="round"
					className="mt-[31px] min-w-[182px] font-semibold capitalize sm:px-5"
				>
					{btnText}
				</Button>
				{login && (
					<Link to="/register">
						<Text size="s" as="p" className="mt-[39px]">
							<span className="text-black-900">
								Don’t have an account?&nbsp;
							</span>
							<span className="font-semibold text-black-900">
								Register now!
							</span>
						</Text>
					</Link>
				)}
				{signup && (
					<Link to="/">
						<Text size="s" as="p" className="mt-[39px]">
							<span className="text-black-900">
								Already have an account?&nbsp;
							</span>
							<span className="font-semibold text-black-900">
								Login now!
							</span>
						</Text>
					</Link>
				)}
			</div>
			<Img
				src={image}
				alt="intersect_one"
				className="h-[500px] rounded-bl-[80px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[80px] object-contain  lg:rounded-br-[0px] lg:rounded-tr-[0px]"
			/>
		</>
	);
}
