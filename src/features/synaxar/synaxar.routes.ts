import { Hono } from "hono";
import { getSynaxar, getVita } from "./synaxar.repository";

export const synaxarRoutes = new Hono()
  // GET /synaxar
  .get("/", async (c) => {
    const saints = await getSynaxar();
    return c.json(saints);
  })
  // GET /synaxar/:id
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const vita = await getVita(id);
    return c.json(vita);
  });
