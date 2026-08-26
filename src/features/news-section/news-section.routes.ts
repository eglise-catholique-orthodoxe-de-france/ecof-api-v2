import { Hono } from "hono";
import { getAllNews } from "./news-section.repository";
import { getNewsById } from "./news-section.service";

export const newsRoutes = new Hono()
  // GET /news
  .get("/", async (c) => {
    const news = await getAllNews();
    return c.json(news);
  })
  // GET /news/:id
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const news = await getNewsById(id);
    return c.json(news);
  });
