import { useForm, SubmitHandler } from "react-hook-form";
import type { SignUpSchemaType } from "../models/SignUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../models/SignUpSchema";

import { Form as LoginForm } from "@/components/Form";
import { Img } from "@/components/ui/Img";
const Login = () => {
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
		<div className="flex mb-16 items-center justify-between ml-0 my-24 mx-2 gap-5 flex-col-reverse lg:flex-row lg:ml-24">
			<LoginForm
				subtitle="There are many variations of passages of Lorem Ipsu available but the majority have suffered alte."
				title="Login to Your account"
				btnText="Login"
				login
			/>
		</div>
	);
};

export default Login;
