import express from "express";
import morgan from "morgan";
import router from "./root-router";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.get("/", (req, res) => {
  return res.send("hello");
});

app.listen({ port: 3000 }, () => {
  console.log("http://127.0.0.1:3000");
});
