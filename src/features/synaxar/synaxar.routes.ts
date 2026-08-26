import { Hono } from "hono";
import { getSynaxar } from "./synaxar.repository";
import { getVitaHtml } from "./synaxar.service";

export const synaxarRoutes = new Hono()
  // GET /synaxar
  .get("/", async (c) => {
    const saints = await getSynaxar();
    return c.json(saints);
  })
  // GET /synaxar/:id
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const vita = await getVitaHtml(id);
    return c.json(vita);
  });
