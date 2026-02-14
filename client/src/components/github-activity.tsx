import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
}

interface GithubProfile {
  avatar_url: string;
  public_repos: number;
  followers: number;
  repos: GithubRepo[];
}

const langColors: Record<string, string> = {
  JavaScript: "bg-chart-1",
  TypeScript: "bg-chart-2",
  Python: "bg-chart-3",
  "C++": "bg-chart-4",
  "C#": "bg-chart-5",
  HTML: "bg-chart-1",
  CSS: "bg-chart-2",
  Assembly: "bg-destructive",
  "Jupyter Notebook": "bg-chart-3",
};

export function GithubActivity() {
  const { data, isLoading, isError } = useQuery<GithubProfile>({
    queryKey: ["/api/github/profile"],
    staleTime: 10 * 60 * 1000,
  });

  if (isError) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <Github className="w-4 h-4 text-primary" />
        <h3 className="font-mono text-xs tracking-widest uppercase text-primary" data-testid="text-github-activity-label">
          Live GitHub Activity
        </h3>
      </div>

      {isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-full mb-3" />
                <Skeleton className="h-3 w-1/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : data ? (
        <>
          <div className="flex gap-4 mb-4">
            <span className="font-mono text-xs text-muted-foreground" data-testid="text-github-repos-count">
              {data.public_repos} repos
            </span>
            <span className="font-mono text-xs text-muted-foreground" data-testid="text-github-followers">
              {data.followers} followers
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.repos.slice(0, 6).map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-repo-${repo.name}`}
                >
                  <Card className="hover-elevate overflow-visible h-full">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-sm font-semibold truncate">{repo.name}</h4>
                        <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                      </div>
                      {repo.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-3">
                        {repo.language && (
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${langColors[repo.language] || "bg-gray-400"}`} />
                            <span className="text-xs text-muted-foreground font-mono">{repo.language}</span>
                          </div>
                        )}
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground font-mono">{repo.stargazers_count}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
}
