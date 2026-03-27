import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github, Star, ExternalLink } from "lucide-react";
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
      className="mt-10"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="h-px w-6 bg-primary/60 block" />
        <Github className="w-3.5 h-3.5 text-primary" />
        <h3 className="font-mono text-xs tracking-widest uppercase text-primary" data-testid="text-github-activity-label">
          Live GitHub Activity
        </h3>
        {data && (
          <span className="font-mono text-xs text-muted-foreground ml-auto">
            <span data-testid="text-github-repos-count">{data.public_repos} repos</span>
            <span className="mx-2 opacity-30">·</span>
            <span data-testid="text-github-followers">{data.followers} followers</span>
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border/60 p-4">
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-full mb-3" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          ))}
        </div>
      ) : data ? (
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
                <div className="group h-full rounded-xl border border-border/60 bg-card/50 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-card/80 hover:shadow-[0_0_0_1px_hsl(190_100%_50%/0.1)]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{repo.name}</h4>
                    <ExternalLink className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  {repo.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${langColors[repo.language] || "bg-muted-foreground/40"}`} />
                        <span className="text-xs text-muted-foreground font-mono">{repo.language}</span>
                      </div>
                    )}
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-muted-foreground/60" />
                        <span className="text-xs text-muted-foreground font-mono">{repo.stargazers_count}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
}
