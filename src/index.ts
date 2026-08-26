import { Hono } from "hono";
import { synaxarRoutes } from "./features/synaxar/synaxar.routes";
import { mapRoutes } from "./features/map/map.routes";
import { readingRoutes } from "./features/reading/reading.routes";
import { newsRoutes } from "./features/news-section/news-section.routes";

const app = new Hono();

app.route("/synaxar", synaxarRoutes);
app.route("/map", mapRoutes);
app.route("/reading", readingRoutes);
app.route("/news", newsRoutes);

export default app;
