import { useForm, SubmitHandler } from "react-hook-form";
import { Helmet } from "react-helmet";

import { zodResolver } from "@hookform/resolvers/zod";
import type { FormSchemaType } from "../models/FormSchema";
import { FormSchema } from "../models/FormSchema";
import { Form as MessageForm } from "@/components/Form";

const Message = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
		console.log(data);
		reset();
	};

	return (
		<>
			<Helmet>
				<title>Contact Tastebites - Get in Touch Today</title>
				<meta
					name="description"
					content="Have questions or feedback? Leave us a message on our contact page. Tastebites is here to help with all your culinary inquiries."
				/>
			</Helmet>
			<div className="flex items-center bg-white-A700 justify-between ml-0 my-24 mx-2 gap-5 flex-col-reverse lg:flex-row lg:ml-24 ">
				<MessageForm
					subtitle="There are many variations of passages of Lorem Ipsu available but the majority have suffered alte."
					title="Leave us a message"
					btnText="Submit"
					image="images/burger.png"
					handleSubmit={handleSubmit(onSubmit)}
					register={register}
					errors={errors}
					message
				/>
			</div>
		</>
	);
};

export default Message;
