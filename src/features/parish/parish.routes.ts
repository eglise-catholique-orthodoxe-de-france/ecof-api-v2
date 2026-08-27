import { Hono } from "hono";
import { getParishInfo } from "./parish.service";

export const parishRoutes = new Hono()
  // GET /parish/:id
  .get("/:parish", async (c) => {
    const parish = c.req.param("parish");
    const events = await getParishInfo(parish);
    return c.json(events);
  });
