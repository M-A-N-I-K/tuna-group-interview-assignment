import express from "express";

import {
	deleteUser,
	getAllUsers,
	getUserByEmail,
	getUserById,
	deleteUserByEmail,
} from "../db/users";
import { getAll, deleteByEmail } from "../controllers/users";
import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
	router.get("/users", getAll);
	router.get("/users/:email", isAuthenticated, deleteByEmail);
	router.delete("/users/:email", isAuthenticated, deleteByEmail);
};
