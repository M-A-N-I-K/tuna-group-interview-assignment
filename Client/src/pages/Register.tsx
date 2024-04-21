import { useForm, SubmitHandler } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form as SignupForm } from "@/components/Form";

import { FormSchema } from "../models/FormSchema";
import type { FormSchemaType } from "../models/FormSchema";

const Register = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
		console.log(data);
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		reset();
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
					handleSubmit={handleSubmit(onSubmit)}
					register={register}
					errors={errors}
				/>
			</div>
		</>
	);
};

export default Register;
