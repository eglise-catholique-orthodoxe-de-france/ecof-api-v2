import { Hono } from "hono";

export const parishCalendarRoutes = new Hono().get("/", (c) => c.text("..."));
