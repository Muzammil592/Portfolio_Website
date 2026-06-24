import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

let cachedGithubData: any = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 2 * 60 * 1000; // Reduced to 2 minutes for fresher data

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/github/profile", async (_req, res) => {
    try {
      const now = Date.now();
      if (cachedGithubData && now - cacheTimestamp < CACHE_DURATION) {
        return res.json(cachedGithubData);
      }

      const [profileRes, reposRes] = await Promise.all([
        fetch("https://api.github.com/users/Muzammil592"),
        fetch("https://api.github.com/users/Muzammil592/repos?sort=pushed&per_page=6&order=desc"),
      ]);

      if (!profileRes.ok || !reposRes.ok) {
        return res.status(502).json({ error: "Failed to fetch GitHub data" });
      }

      const profile = await profileRes.json();
      const repos = await reposRes.json();

      const data = {
        avatar_url: profile.avatar_url,
        public_repos: profile.public_repos,
        followers: profile.followers,
        repos: Array.isArray(repos)
          ? repos.map((r: any) => ({
              name: r.name,
              description: r.description,
              language: r.language,
              stargazers_count: r.stargazers_count,
              html_url: r.html_url,
              updated_at: r.updated_at,
            }))
          : [],
      };

      cachedGithubData = data;
      cacheTimestamp = now;

      res.json(data);
    } catch (err) {
      console.error("GitHub API error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
