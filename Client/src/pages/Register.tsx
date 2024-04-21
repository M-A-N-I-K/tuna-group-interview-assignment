import { useForm, SubmitHandler } from "react-hook-form";
import { Helmet } from "react-helmet";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form as SignupForm } from "@/components/Form";

import { SignUpSchema } from "../models/SignUpSchema";
import type { SignUpSchemaType } from "../models/SignUpSchema";

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
		<>
			<Helmet>
				<title>Create Account - Register with Tastebites</title>
				<meta
					name="description"
					content="Join the Tastebites community by creating your account. Register with your email and phone number to discover new tastes, articles, and connect with food enthusiasts."
				/>
			</Helmet>
			<div className="flex items-center justify-between ml-0 my-24 mx-2 gap-5 flex-col-reverse lg:flex-row lg:ml-24 ">
				<SignupForm
					subtitle="There are many variations of passages of Lorem Ipsu available but the majority have suffered alte."
					title="Create Your account"
					btnText="Register"
					signup
				/>
			</div>
		</>
	);
};

export default Register;
