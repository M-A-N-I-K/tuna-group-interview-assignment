import { Helmet } from "react-helmet";
import { Text } from "@/components/ui/Text";
import { Heading } from "@/components/ui/Heading";
import { Img } from "@/components/ui/Img";

export default function RecipePage() {
	return (
		<>
			<Helmet>
				<title>Pumpkin Marshmallow Pie Recipe - Tastebites</title>
				<meta
					name="description"
					content="Try this simple and delicious Pumpkin Marshmallow Pie recipe from Tastebites. A perfect blend of pumpkin puree, spices, and marshmallows for a sweet treat."
				/>
			</Helmet>
			<div className="flex justify-center items-center w-full">
				<div className="mt-[50px] flex justify-center items-center w-full max-w-[1080px] p-0 flex-col gap-[26px] sm:gap-[53px] md:p-5">
					<Img
						src="images/img_intersect_410x1328.png"
						alt="intersect_one"
						className="h-[320px] sm:h-[410px] object-cover"
					/>
					<div className="flex flex-col items-center">
						<Heading size="4xl" as="h1" className="capitalize">
							Pumpkin marshmallow pie
						</Heading>
					</div>

					<div className="flex flex-col items-center gap-[45px] bg-gray-50 py-[78px] ml-2 sm:pl-[78px] pr-14 p-5 md:px-24 md:p-0">
						<Heading
							size="xl"
							as="h2"
							className="ml-7 capitalize md:ml-0"
						>
							Recipe
						</Heading>
						<Text
							size="s"
							as="p"
							className="mb-[188px] ml-0  w-full md:w-[97%] !font-normal capitalize leading-10 md:ml-7"
						>
							<>
								Here&#39;s a simple recipe for Pumpkin Marshmallow Pie:
								<br />
								<br />
								Ingredients:
								<br />- 1 9-inch pie crust (pre-made or homemade)
								<br />- 1 cup canned pumpkin puree
								<br />- 3/4 cup granulated sugar
								<br />- 1 tsp ground cinnamon
								<br />- 1/2 tsp ground ginger
								<br />- 1/4 tsp ground nutmeg
								<br />- 1/4 tsp salt
								<br />- 2 large eggs
								<br />- 1 cup evaporated milk
								<br />- 1 cup mini marshmallows
								<br />
								<br />
								Instructions:
								<br />
								1. Preheat your oven to 425°F (220°C).
								<br />
								2. Place the pie crust in a 9-inch pie dish and crimp
								the edges as desired.
								<br />
								3. In a large mixing bowl, combine the pumpkin puree,
								sugar, cinnamon, ginger, nutmeg, and salt. Mix until
								well combined.
								<br />
								4. Beat in the eggs, one at a time, until fully
								incorporated.
								<br />
								5. Gradually stir in the evaporated milk until the
								mixture is smooth.
								<br />
								6. Pour the pumpkin mixture into the prepared pie crust.
								<br />
								7. Bake the pie in the preheated oven for 15 minutes.
								<br />
								8. After 15 minutes, remove the pie from the oven and
								carefully sprinkle the mini marshmallows over the top.
								<br />
								9. Return the pie to the oven and bake for an additional
								20-25 minutes, or until the marshmallows are golden
								brown and the filling is set.
								<br />
								10. Once done, remove the pie from the oven and allow it
								to cool completely before serving.
								<br />
								<br />
								Enjoy your delicious Pumpkin Marshmallow Pie!
							</>
						</Text>
					</div>
				</div>
			</div>
		</>
	);
}
