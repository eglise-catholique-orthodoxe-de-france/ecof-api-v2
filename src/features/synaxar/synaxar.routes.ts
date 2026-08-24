import { Hono } from "hono";

export const synaxarRoutes = new Hono().get("/", (c) => c.text("..."));
