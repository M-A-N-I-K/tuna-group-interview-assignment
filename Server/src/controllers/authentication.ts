import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { updateSessionToken } from "../db/users";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ error: "Missing fields" });
		}
		const user = await prisma.users.findUnique({
			where: { email },
		});
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}

		// Verify password
		const passwordMatch = await bcrypt.compare(password, user.password_hash);
		if (!passwordMatch) {
			return res.status(403).json({ error: "Wrong password" });
		}

		// Generate JWT
		const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET);

		// Generate session
		const sessionToken = jwt.sign(
			{ userId: user.user_id },
			process.env.SESSION_SECRET
		);

		// Update session
		await updateSessionToken(user.user_id, sessionToken);

		// Set cookie
		res.cookie("AUTH", sessionToken, {
			domain: "localhost",
			path: "/",
			sameSite: "none",
			secure: true,
		});

		const userWithoutPassword = {
			...user,
			password_hash: undefined as any,
		};

		res.status(200).json({ user: userWithoutPassword, token }).end();
	} catch (error) {
		console.log(error);
		res.status(400);
	}
};

export const register = async (req: Request, res: Response) => {
	try {
		const { email, phone_number, password } = req.body;
		if (!email || !phone_number || !password) {
			return res.status(400).json({ error: "Missing fields" });
		}

		const existingUserWithEmail = await prisma.users.findUnique({
			where: { email },
		});

		if (existingUserWithEmail) {
			return res
				.status(400)
				.json({ error: "User with this email already exists" });
		}

		const existingUserWithPhone = await prisma.users.findUnique({
			where: { phone_number },
		});

		if (existingUserWithPhone) {
			return res
				.status(400)
				.json({ error: "User with this phone number already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = await prisma.users.create({
			data: {
				email,
				phone_number,
				password_hash: hashedPassword,
			},
			select: {
				user_id: true,
				email: true,
				phone_number: true,
				created_at: true,
			},
		});

		return res.status(200).json(newUser).end();
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Internal server error" });
	}
};
