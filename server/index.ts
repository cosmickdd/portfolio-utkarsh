import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import path from "path";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Serve static files from public directory
  app.use(express.static(path.join(__dirname, "../public")));

  // Catch-all route to serve index.html for SPA
  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  return app;
}
