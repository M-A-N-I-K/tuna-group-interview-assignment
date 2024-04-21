import { PrismaClient, users } from "@prisma/client";

const prisma = new PrismaClient();

// Function to get a user by user_id
export async function getUserById(userId: number): Promise<users | null> {
	return prisma.users.findUnique({
		where: { user_id: userId },
	});
}

// Function to get a user by email
export async function getUserByEmail(email: string): Promise<users | null> {
	return prisma.users.findUnique({
		where: { email },
	});
}

// Function to get all users
export async function getAllUsers(): Promise<users[]> {
	return prisma.users.findMany();
}

// Function to delete a user by user_id
export async function deleteUser(userId: number): Promise<users | null> {
	return prisma.users.delete({
		where: { user_id: userId },
	});
}

// Function to get a user by session token
export async function getUserBySessionToken(
	sessiontoken: string
): Promise<users | null> {
	return prisma.users.findFirst({
		where: { sessiontoken },
	});
}

export async function deleteUserByEmail(email: string): Promise<users | null> {
	return prisma.users.delete({
		where: { email },
	});
}

export async function updateSessionToken(
	user_id: number,
	sessiontoken: string
): Promise<users | null> {
	return prisma.users.update({
		where: { user_id },
		data: { sessiontoken },
	});
}
