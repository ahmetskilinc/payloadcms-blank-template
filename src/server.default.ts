import dotenv from "dotenv";
import path from "path";

import express from "express";
import payload from "payload";

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
	res.redirect("/admin");
});

const start = async (): Promise<void> => {
	await payload.init({
		secret: process.env.PAYLOAD_SECRET || "",
		express: app,
		onInit: () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
	});

	app.listen(PORT, async () => {
		payload.logger.info(`App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`);
	});
};

start();
