import { Text } from "./ui/Text";
import { Heading } from "./ui/Heading";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="px-12 w-[100%-6rem] lg:px-24 py-12 bg-[#F9F9F9]">
			<div className="flex justify-between items-center  flex-col md:flex-row">
				<Text size="md" as="p" className="!font-yesteryear">
					Tastebites
				</Text>

				<ul className="flex mt-8  w-full justify-between items-center gap-5 md:gap-[71px] md:mt-0 md:w-[50%] ">
					<li>
						<Link to="/home">
							<Heading
								as="p"
								className="text-center !text-blue_gray-900"
							>
								Home
							</Heading>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<Heading as="p" className="!text-blue_gray-900">
								About
							</Heading>
						</Link>
					</li>
					<li>
						<Link to="/message">
							<Heading as="p" className="!text-blue_gray-900">
								Contact
							</Heading>
						</Link>
					</li>
					<li>
						<Link to="/article">
							<Heading as="p" className="!text-blue_gray-900">
								Article
							</Heading>
						</Link>
					</li>
				</ul>
			</div>
			<div className="h-px self-stretch bg-gray-400_01 my-10" />
			<Text as="p" className="!font-normal text-center">
				2024 © Copyright | All Rights Reserved
			</Text>
		</footer>
	);
}
