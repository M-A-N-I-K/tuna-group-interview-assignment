import { Img } from "./ui/Img";
import { RatingBar } from "./ui/RatingBar";
import { Heading } from "./ui/Heading";
import { Link } from "react-router-dom";
interface FoodRatingCardProps {
	info: {
		image: string;
		description: string;
	};
	index: number;
}

const FoodRatingCard = ({ info, index }: FoodRatingCardProps) => {
	return (
		<Link to="/" target="_blank">
			<div
				key={"listratingbar" + index}
				className="flex w-full flex-col items-start gap-[18px]"
			>
				<Img
					src={info.image}
					alt="image"
					className="w-full object-contain"
				/>
				<RatingBar
					value={4}
					isEditable={true}
					color="#ededed"
					activeColor="#e50000"
					size={30}
					className="ml-[23px] flex justify-between rounded-[1px] md:ml-0"
				/>
				<Heading
					size="s"
					as="h1"
					className="ml-[26px]  capitalize leading-6 md:ml-0 w-full md:w-[76%]"
				>
					{info.description}
				</Heading>
			</div>
		</Link>
	);
};

export default FoodRatingCard;
