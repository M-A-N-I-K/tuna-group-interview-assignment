import { useForm, SubmitHandler } from "react-hook-form";
import { Helmet } from "react-helmet";

import { zodResolver } from "@hookform/resolvers/zod";
import type { SignUpSchemaType } from "../models/SignUpSchema";
import { SignUpSchema } from "../models/SignUpSchema";
import { Form as MessageForm } from "@/components/Form";

const Message = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchemaType>({
		resolver: zodResolver(SignUpSchema),
	});

	const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
		console.log(data);
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
					message
				/>
			</div>
		</>
	);
};

export default Message;
