import { Img } from "./ui/Img";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

const LatestRecipePostCard = () => {
	return (
		<div className="flex flex-1 flex-col items-center border border-solid border-gray-300 pb-5 md:pb-[50px]">
			<Img
				src="images/img_intersect_450x900.png"
				alt="image"
				className=" w-full object-cover h-auto md:h-[450px]"
			/>
			<Heading
				size="s"
				as="h2"
				className="mt-[34px] self-start capitalize ml-0 md:ml-10"
			>
				Pumpkin marshmallow pie
			</Heading>
			<Text
				as="p"
				className="mt-[13px]  !font-normal leading-[27px] !text-blue_gray-600 w-full md:w-[91%]"
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry&#39;s standard dummy
				text ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book.{" "}
			</Text>
			<div className="flex  items-center justify-between w-full p-4">
				<div className="flex w-[25%] items-start justify-center gap-2.5">
					<Img
						src="images/img_intersect_50x50.png"
						alt="john_doe_one"
						className="h-[50px] w-[50px] rounded-[50%]"
					/>
					<Text as="p" className="mt-3.5 !font-normal capitalize">
						John Doe
					</Text>
				</div>
				<Text
					as="p"
					className="mb-[13px] self-end text-center !font-normal capitalize !text-gray-600"
				>
					yesterday
				</Text>
			</div>
		</div>
	);
};

export default LatestRecipePostCard;
