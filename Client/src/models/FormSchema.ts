import { z } from "zod";

export const FormSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email address is required" })
		.trim()
		.email({ message: "Invalid email address" }),
	phone: z.optional(
		z
			.string()
			.min(10, { message: "Phone numbers are minimum of 10 digits" })
			.regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
			.length(10, { message: "Ten numbers are required" })
			.transform(
				(value) =>
					`${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`
			)
	),
	password: z.optional(
		z.string().min(6, { message: "Invalid password" }).trim()
	),
	confirmPassword: z.optional(
		z.string().min(6, { message: "Invalid Confirm password" }).trim()
	),
	name: z.optional(z.string().min(2, { message: "Invalid Name" }).trim()),
	message: z.optional(
		z.string().min(10, { message: "Message is too short" }).trim()
	),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
