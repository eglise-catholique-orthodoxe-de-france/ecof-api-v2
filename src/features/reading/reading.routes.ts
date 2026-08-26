import { Hono } from "hono";
import { getReading } from "./reading.service";

export const readingRoutes = new Hono()
  // GET /reading:id
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const reading = await getReading(id);
    return c.json(reading);
  });
