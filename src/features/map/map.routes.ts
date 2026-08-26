import { Hono } from "hono";
import { getPOI } from "./map.repository";

export const mapRoutes = new Hono()
  // GET /map
  .get("/", async (c) => {
    const saints = await getPOI();
    return c.json(saints);
  });
