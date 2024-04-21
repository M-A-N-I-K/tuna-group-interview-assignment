import { useForm, SubmitHandler } from "react-hook-form";
import type { SignUpSchemaType } from "../models/SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../models/SignUpSchema";

import { Form as SignupForm } from "@/components/Form";
import { Img } from "@/components/ui/Img";
const Register = () => {
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
		<div className="flex items-center justify-between ml-0 my-24 mx-2 gap-5 flex-col-reverse lg:flex-row lg:ml-24 ">
			<SignupForm
				subtitle="There are many variations of passages of Lorem Ipsu available but the majority have suffered alte."
				title="Create Your account"
				btnText="Register"
				signup
			/>
		</div>
	);
};

export default Register;
