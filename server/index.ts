import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContact } from "./routes/contact";
import { handleInstagramPosts } from "./routes/instagram";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  
  // Contact form route
  app.post("/api/contact", handleContact);

  // Instagram posts route
  app.get("/api/instagram-posts", handleInstagramPosts);

  // Serve static files from public directory
  app.use(express.static(path.join(__dirname, "../public")));

  return app;
}
