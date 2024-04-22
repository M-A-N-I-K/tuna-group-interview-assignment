import { Helmet } from "react-helmet";

import { Text } from "@/components/ui/Text";
import { Heading } from "@/components/ui/Heading";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import FoodRatingCard from "@/components/FoodRatngCard";
import FeedbackCard from "@/components/FeedbackCard";
import Collections from "@/components/Collections";
import Authorization from "@/components/Wrappers/Authorized";
import RecipeCard from "@/components/RecipeCard";
import { reviewsData, recipeData } from "@/lib/data";

function Home() {
	return (
		<>
			<Helmet>
				<title>Healthy Recipes for Summer - Tastebites</title>
				<meta
					name="description"
					content="Explore curated collections of healthy recipes on Tastebites, including summer smoothies, carrot ginger soup, and berry tarts. Perfect for any meal or party!"
				/>
			</Helmet>

			<div
				className="flex flex-col px-2 sm:px-6 lg:px-24 items-center"
				id="about"
			>
				<div className="flex flex-col gap-[117px] sm:gap-[58px] md:gap-[87px] md:p-5">
					<div className="flex flex-col gap-[20px] md:flex-row">
						{reviewsData.map((info, index) => (
							<FoodRatingCard
								key={"listratingbar" + index}
								info={info}
								index={index}
							/>
						))}
					</div>
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
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industry&#39;s standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
								It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and
								more recently with desktop publishing software like
								Aldus PageMaker including versions of Lorem Ipsum.
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
				</div>

				<Collections />

				<div className="mt-10 flex items-start mb-12 gap-[30px] flex-col p-5 md:p-0 md:flex-row">
					<div className="flex flex-1 flex-col gap-5 self-stretch md:self-auto">
						<div className="mt-[99px] flex flex-col items-start pl-14 pr-[183px] p-5 px-5 md:px-0 md:p-0">
							<Heading size="lg" as="h2" className="capitalize">
								Client Feedback
							</Heading>
						</div>
						<FeedbackCard />
						<FeedbackCard />
					</div>

					<div className="flex flex-col gap-[31px] w-full md:w-[30%]">
						<div className="mt-[99px] flex flex-col items-start pl-14 pr-[183px] p-5 px-5 md:px-0 md:p-0">
							<Heading size="lg" as="h2" className="capitalize">
								Fresh recipes
							</Heading>
						</div>
						{recipeData.map((recipe, index) => (
							<RecipeCard
								key={"recipe" + index}
								image={recipe.image}
								name={recipe.name}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Authorization(Home);
