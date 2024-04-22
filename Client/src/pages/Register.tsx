import { useForm, SubmitHandler } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { useSaveToken } from "@/hooks/save-token";
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
	const navigate = useNavigate();
	const saveToken = useSaveToken();

	const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
		console.log(data);
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		try {
			const response = await fetch("http://localhost:8080/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const jsonData = await response.json();
			const { token } = jsonData;

			saveToken(token);

			reset();
			toast.success("Account created successfully");
			navigate("/home");
		} catch (error) {
			toast.error("Something went wrong");
		}
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
