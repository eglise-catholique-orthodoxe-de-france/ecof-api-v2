import { Hono } from "hono";
import { liturgicalCalendarRoutes } from "./features/liturgical-calendar/liturgical-calendar.routes";
import { mapSectionRoutes } from "./features/map-section/map-section.routes";
import { newsSectionRoutes } from "./features/news-section/news-section.routes";
import { parishCalendarRoutes } from "./features/parish-calendar/parish-calendar.routes";
import { synaxarRoutes } from "./features/synaxar/synaxar.routes";

const app = new Hono();

app.route("/liturgical-calendar", liturgicalCalendarRoutes);
app.route("/map-section", mapSectionRoutes);
app.route("/news-section", newsSectionRoutes);
app.route("/parish-calendar", parishCalendarRoutes);
app.route("/synaxar", synaxarRoutes);

export default app;
