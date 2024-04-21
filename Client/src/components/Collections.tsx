import { Heading } from "./ui/Heading";
import { Img } from "./ui/Img";
import { Button } from "./ui/Button";

const Collections = () => {
	return (
		<div className="relative mt-[110px] h-auto bg-gray-50 self-stretch">
			<Heading size="3xl" as="h2" className="capitalize">
				Curated collections
			</Heading>
			<div className="m-auto flex h-max w-full justify-center  py-[68px] md:py-5">
				<div className="mb-[23px] grid  gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-0">
					<div className="flex w-full flex-col items-start gap-[61px] sm:gap-[30px]">
						<div className="flex flex-col items-start gap-5 self-stretch">
							<Img
								src="images/img_japanese_food_sushi_sashimi.png"
								alt="image"
								className="h-[270px] w-full object-cover md:h-auto"
							/>
							<Heading
								size="md"
								as="h3"
								className="w-[86%] capitalize leading-10 md:w-full"
							>
								<>
									Sushi combos for your <br />
									next party
								</>
							</Heading>
							<Button
								shape="round"
								className="min-w-[160px] !rounded-[3px] capitalize sm:px-5"
							>
								150 Recipes
							</Button>
						</div>
					</div>
					<div className="flex w-full flex-col items-start">
						<Img
							src="images/img_bagel_sandwich.png"
							alt="bagelsandwich"
							className="h-[270px] w-full object-cover md:h-auto"
						/>
						<Heading size="md" as="h4" className="mt-[27px] capitalize">
							Everything Bagel
						</Heading>
						<Button
							shape="round"
							className="mt-[63px] min-w-[160px] !rounded-[3px] capitalize sm:px-5"
						>
							150 Recipes
						</Button>
					</div>
					<div className="flex w-full flex-col items-start">
						<Img
							src="images/img_indian_traditio.png"
							alt="indiantraditio"
							className="h-[270px] w-full object-cover md:h-auto"
						/>
						<Heading size="md" as="h5" className="mt-[27px] capitalize">
							Biriyani combos
						</Heading>
						<Button
							shape="round"
							className="mt-[63px] min-w-[160px] !rounded-[3px] capitalize sm:px-5"
						>
							150 Recipes
						</Button>
					</div>
					<div className="flex w-full flex-col items-start">
						<Img
							src="images/img_cheese_mayyonai.png"
							alt="cheesemayyonai"
							className="h-[270px] w-full object-cover md:h-auto"
						/>
						<Heading size="md" as="h6" className="mt-[27px] capitalize">
							Dinner recipe ideas
						</Heading>
						<Button
							shape="round"
							className="mt-[63px] min-w-[160px] !rounded-[3px] capitalize sm:px-5"
						>
							150 Recipes
						</Button>
					</div>
					<div className="flex w-full flex-col items-start gap-5">
						<Img
							src="images/img_delicious_cooki.png"
							alt="deliciouscooki"
							className="h-[270px] w-full object-cover md:h-auto"
						/>
						<Heading
							size="md"
							as="h4"
							className="w-[86%] capitalize leading-10 md:w-full"
						>
							<>
								The ultimate cookie
								<br />
								frenzy
							</>
						</Heading>
						<Button
							shape="round"
							className="min-w-[160px] !rounded-[3px] capitalize sm:px-5"
						>
							150 Recipes
						</Button>
					</div>
					<div className="flex w-full flex-col items-start gap-5">
						<Img
							src="images/img_pexels_alisha_m.png"
							alt="pexelsalisham"
							className="h-[270px] w-full object-cover md:h-auto"
						/>
						<Heading
							size="md"
							as="h4"
							className="w-[86%] capitalize leading-10 md:w-full"
						>
							<>
								for the love of
								<br />
								donuts
							</>
						</Heading>
						<Button
							shape="round"
							className="min-w-[160px] !rounded-[3px] capitalize sm:px-5"
						>
							150 Recipes
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collections;
