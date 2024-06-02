//import elysia
import { Elysia } from "elysia";

//import routes
import Routes from "./routes";

//initiate elysia
const app = new Elysia()

  //route home
  .get("/", () => "Hello Elysia!")

  //add routes
  .group("/api", (app) => app.use(Routes))

  //start server on port 3000
  .listen(3000);
console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
