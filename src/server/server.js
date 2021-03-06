import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";
import https from "https";
import compression from "compression";
import helmet from "helmet";

// только для тестирования. Отключает SSL
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const PORT = process.env.PORT || 3000;
const SERVER =
	process.env.SERVER !== "undefined"
		? process.env.SERVER
		: "http://localhost:" + PORT;

const app = express();

app.use(compression());
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

app.use("/static", express.static("./dist/client/"));

app.get("/auth", (req, res) => {
	axios
		.post(
			"https://www.reddit.com/api/v1/access_token",
			`grant_type=authorization_code&code=${req.query.code}&redirect_uri=${SERVER}/auth`,
			{
				auth: {
					username: process.env.CLIENT_ID,
					password: process.env.SECRET,
				},
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				httpAgent: new https.Agent({
					rejectUnauthorized: false,
				}),
			}
		)
		.then(({ data }) => {
			res.send(
				indexTemplate(ReactDOM.renderToString(App()), data["access_token"])
			);
		})
		.catch(console.log);
});

app.get("*", (req, res) => {
	res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
	console.log(`Server started on ${SERVER}`);
});
