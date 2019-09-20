import express from "express";
import bodyParser from "body-parser";
import Model from "./models";
import userRoutes from "./routes/users";
import taskRoutes from "./routes/tasks.js";
import http from "http";
import IO from "socket.io";
import cors from "cors";

const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);

const io = IO(server);
app.set("socketIo", io);
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

// Sync sequelize
Model.sequelize.sync({});

server.listen(port, () =>
  console.log(`Task management app listening on port ${port}!`)
);

module.exports = app;
