import { useForm, SubmitHandler } from "react-hook-form";
import type { SignUpSchemaType } from "../models/SignUpSchema";
import { SignUpSchema } from "../models/SignUpSchema";
import { Helmet } from "react-helmet";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form as LoginForm } from "@/components/Form";

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
		<>
			<Helmet>
				<title>User Login - Access Your Tastebites Account</title>
				<meta
					name="description"
					content="Log in to your Tastebites account to access exclusive content, manage your preferences, and enjoy a personalized experience. Enter your email and password to start your food journey."
				/>
			</Helmet>
			<div className="flex mb-16 items-center justify-between ml-0 my-24 mx-2 gap-5 flex-col-reverse lg:flex-row lg:ml-24">
				<LoginForm
					subtitle="There are many variations of passages of Lorem Ipsu available but the majority have suffered alte."
					title="Login to Your account"
					btnText="Login"
					login
				/>
			</div>
		</>
	);
};

export default Login;
