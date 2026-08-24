import { Hono } from "hono";

export const liturgicalCalendarRoutes = new Hono().get("/", (c) => c.text("..."));
