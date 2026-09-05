import { Hono } from "hono"
import { getPoi } from "./map.repository"

export const mapRoutes = new Hono()
  // GET /map
  .get("/", async (c) => {
    const saints = await getPoi()
    return c.json(saints)
  })
