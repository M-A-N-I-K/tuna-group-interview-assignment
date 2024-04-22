import { Link } from "react-router-dom";
import { Text } from "./ui/Text";
import { Img } from "./ui/Img";

interface RecipeCardProps {
	image: string;
	name: string;
}
const RecipeCard = ({ image, name }: RecipeCardProps) => {
	return (
		<Link to={"/recipe"} className="flex flex-col items-start gap-3.5">
			<Img
				src={image}
				alt={name}
				className="h-auto w-full object-cover md:h-[250px]"
			/>
			<Text size="s" as="p" className="capitalize">
				{name}
			</Text>
		</Link>
	);
};

export default RecipeCard;
