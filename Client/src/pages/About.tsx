import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Heading } from "@/components/ui/Heading";

const About = () => {
	return (
		<div className="flex items-start justify-between gap-5 bg-white-A700  shadow-sm flex-col  p-5 sm:p-[30px] md:flex-row">
			<Img
				src="images/img_intersect_610x490.png"
				alt="intersect_one"
				className="h-[320px] sm:h-[610px] object-cover w-full"
			/>
			<div className="flex flex-col items-start gap-7 mr-0 w-full md:w-[54%] md:mr-[60px]">
				<Heading size="2xl" as="h4" className="capitalize">
					About US
				</Heading>
				<Text
					size="s"
					as="p"
					className="leading-[35px] !text-blue_gray-600"
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&#39;s standard dummy
					text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book. It has
					survived not only five centuries, but also the leap into
					electronic typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of
					Lorem Ipsum.
				</Text>
				<Button
					color="black_900"
					variant="fill"
					shape="round"
					className="min-w-[144px] font-semibold px-5 sm:px-0"
				>
					READ MORE
				</Button>
			</div>
		</div>
	);
};

export default About;
