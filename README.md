**Food Recipe Web App Project README**

---

### Project Overview

This project is a client-server architecture Food Recipe App web application built using TypeScript, Express.js, Prisma, React, and other technologies. It provides a structured setup for creating a full-stack application where the client interacts with the server via RESTful APIs.

### Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js and npm
- PostgreSQL (for the database)
- Git (optional, for version control)

### Setting Up the Server

1. Clone the repository from GitHub:

```bash
git clone <repository_url>
```

2. Navigate to the server directory:

```bash
cd server
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the server:

```plaintext
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
SESSION_SECRET="your_session_secret"
JWT_SECRET="your_jwt_secret"
```

Replace `username`, `password`, and `database_name` with your PostgreSQL credentials and database name. Also, generate random strings for `SESSION_SECRET` and `JWT_SECRET`.

5. Run the database migrations:

```bash
npx prisma migrate dev
```

6. Start the server:

```bash
npm start
```

The server should now be running on `http://localhost:8080`.

### Setting Up the Client

1. Navigate to the client directory:

```bash
cd ../client
```

2. Install dependencies:

```bash
npm install
```

3. Start the client:

```bash
npm run dev
```

The client should now be running on `http://localhost:5173`.

### Accessing the Application

You can now access the application by opening your web browser and navigating to `http://localhost:3000`.

### Additional Notes

- Ensure that the PostgreSQL server is running before starting the application.

---
