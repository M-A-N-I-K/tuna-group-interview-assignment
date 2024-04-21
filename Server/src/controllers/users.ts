import express from "express";

import { getAllUsers, getUserByEmail, deleteUserByEmail } from "../db/users";

export const getAll = async (req: express.Request, res: express.Response) => {
	try {
		const users = await getAllUsers();
		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.sendStatus(400);
	}
};

export const deleteByEmail = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { email } = req.params;

		const userExists = await getUserByEmail(email);

		if (!userExists) {
			return res.status(400).json({ error: "User not found" });
		}

		const deletedUser = await deleteUserByEmail(email);

		return res.json(deletedUser);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: "User not found" });
	}
};

export const getByEmail = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { email } = req.params;

		if (!email) {
			return res.status(400).json({ error: "Missing fields" });
		}

		const user = await getUserByEmail(email);

		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}

		return res.json(user);
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: "Error in your request" });
	}
};
