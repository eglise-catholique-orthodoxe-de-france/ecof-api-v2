import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { synaxarRoutes } from "./features/synaxar/synaxar.routes";

const app = new Hono();

// Static pages
app.use("/*", serveStatic({ root: "./src/public" }));

// Features
app.route("/synaxar", synaxarRoutes);

export default app;
