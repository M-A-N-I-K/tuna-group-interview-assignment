import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="flex items-center flex-col justify-between bg-white-A700 shadow-xs my-2 px-12 md:flex-row lg:px-24 py-4">
			<Text size="lg" as="p" className="!font-yesteryear">
				Tastebites
			</Text>
			<div className="mt-[15px] flex w-full items-center justify-between gap-5 self-end md:w-[50%] flex-col md:flex-row md:mt-[0px]">
				<ul className="flex justify-between items-center gap-[71px] md:gap-8">
					<li>
						<Link to="/home">
							<Heading
								as="h6"
								className="text-center !text-blue_gray-900"
							>
								Home
							</Heading>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<Heading as="h6" className="!text-blue_gray-900">
								About Us
							</Heading>
						</Link>
					</li>
					<li>
						<Link to="/message">
							<Heading as="h6" className="!text-blue_gray-900">
								Contact
							</Heading>
						</Link>
					</li>
					<li>
						<Link to="/">
							<Button
								color="blue_gray_900_01"
								variant="fill"
								shape="round"
								className="min-w-[160px] font-bold sm:px-5"
							>
								Login/Register
							</Button>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
