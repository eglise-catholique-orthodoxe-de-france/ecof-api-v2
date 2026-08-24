import { Hono } from "hono";

export const newsSectionRoutes = new Hono().get("/", (c) => c.text("..."));
