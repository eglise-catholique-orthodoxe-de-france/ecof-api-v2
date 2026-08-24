import { Hono } from "hono";

export const mapSectionRoutes = new Hono().get("/", (c) => c.text("..."));
