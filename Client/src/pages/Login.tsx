import { useForm, SubmitHandler } from "react-hook-form";
import type { FormSchemaType } from "../models/FormSchema";
import { FormSchema } from "../models/FormSchema";
import { Helmet } from "react-helmet";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form as LoginForm } from "@/components/Form";
import { useSaveToken } from "@/hooks/save-token";

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});
	const navigate = useNavigate();
	const saveToken = useSaveToken();

	const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
		try {
			const response = await fetch("http://localhost:8080/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Login failed");
			}

			const jsonData = await response.json();
			console.log(jsonData);

			const { token } = jsonData;
			saveToken(token);
			reset();
			navigate("/home");
			toast.success("Login successful");
		} catch (error) {
			console.log(error);
			toast.error("Login failed");
		}
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
					handleSubmit={handleSubmit(onSubmit)}
					register={register}
					errors={errors}
				/>
			</div>
		</>
	);
};

export default Login;
