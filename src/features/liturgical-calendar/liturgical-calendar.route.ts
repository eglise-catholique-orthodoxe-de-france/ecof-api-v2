import { Hono } from "hono"
import { getSaintsByDate } from "./liturgical-calendar.service"

export const calendarRoutes = new Hono()
  // GET /calendar/:date
  .get("/:date", async (c) => {
    const date = c.req.param("date")
    const calendar = await getSaintsByDate(date)
    return c.json(calendar)
  })
