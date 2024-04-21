import express from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CustomRequest extends express.Request {
	identity?: any;
}

export const isAuthenticated = async (
	req: CustomRequest,
	res: express.Response,
	next: express.NextFunction
) => {
	try {
		const sessionToken = req.cookies["AUTH"];

		if (!sessionToken) {
			return res
				.status(403)
				.json("You need to be logged in to access this resource");
		}

		const decodedToken: any = jwt.verify(
			sessionToken,
			process.env.SESSION_SECRET
		);

		if (!decodedToken || !decodedToken.userId) {
			return res
				.status(403)
				.json("You need to be logged in to access this resource");
		}

		const existingUser = await prisma.users.findUnique({
			where: { user_id: decodedToken.userId },
		});

		if (!existingUser) {
			return res
				.status(403)
				.json("You need to be logged in to access this resource");
		}

		req.identity = existingUser;

		next();
	} catch (error) {
		console.log(error);
		res.status(400).json("You need to be logged in to access this resource");
	}
};
