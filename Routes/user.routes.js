import {
  createUser,
  deleteOneUser,
  findOneUser,
  findUser,
  updateOneUser,
} from "../Controller/user.controller.js";
import express from "express";
import {
  userMiddlewareOne,
  userMiddlewareTwo,
  userMiddlewareThree,
} from "../Middleware/user.middleware.js";
const router = express.Router();

export function routes(app) {
  app.use("/", router);
  router.use(userMiddlewareOne, userMiddlewareTwo, userMiddlewareThree);
  router.post("/user", createUser);
  router.get("/users", findUser);
  router.get("/users/:id", findOneUser);
  router.put("/user/:id", updateOneUser);
  router.delete("/user/:id", deleteOneUser);
}
