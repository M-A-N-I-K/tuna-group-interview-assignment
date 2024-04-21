import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { getPgVersion } from "./configs/db_config";
// import router from "./routes";

require("dotenv").config();

const app = express();
getPgVersion();
app.use(
	cors({
		credentials: true,
	})
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
	console.log("Server listening on https://localhost:8080/");
});

// app.use("/", router());
