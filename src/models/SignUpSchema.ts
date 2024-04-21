import { z } from "zod";

export const SignUpSchema = z.object({
	firstname: z
		.string()
		.min(2, { message: "First name must be at least 2 characters" })
		.trim(),
	lastname: z
		.string()
		.min(2, { message: "Last name must be at least 2 characters" })
		.trim(),
	email: z
		.string()
		.min(1, { message: "Email address is required" })
		.trim()
		.email({ message: "Invalid email address" }),
	phone: z
		.string()
		.min(10, { message: "Phone numbers are minimum of 10 digits" })
		.regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
		.length(10, { message: "Ten numbers are required" })
		.transform(
			(value) =>
				`${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`
		),
	password: z.string().min(6, { message: "Invalid password" }).trim(),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
