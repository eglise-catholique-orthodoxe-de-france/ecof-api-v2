import { Hono } from "hono";
import { synaxarRoutes } from "./features/synaxar/synaxar.routes";
import { mapRoutes } from "./features/map/map.routes";

const app = new Hono();

app.route("/synaxar", synaxarRoutes);
app.route("/map", mapRoutes);

export default app;
