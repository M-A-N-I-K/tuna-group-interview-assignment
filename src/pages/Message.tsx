import { useForm, SubmitHandler } from "react-hook-form";
import type { SignUpSchemaType } from "../models/SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../models/SignUpSchema";

import { Form as MessageForm } from "@/components/Form";
import { Img } from "@/components/ui/Img";
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
		<div className="flex items-center bg-white-A700 justify-between ml-0 my-24 mx-2 gap-5 flex-col-reverse lg:flex-row lg:ml-24 ">
			<MessageForm
				subtitle="There are many variations of passages of Lorem Ipsu available but the majority have suffered alte."
				title="Leave us a message"
				btnText="Submit"
				image="images/burger.png"
				message
			/>
		</div>
	);
};

export default Message;
