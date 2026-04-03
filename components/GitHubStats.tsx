import { Suspense } from "react";

interface Repo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  topics: string[];
}

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/mehul4mak/repos?sort=updated&per_page=6&type=public",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((r: Repo) => !r.name.startsWith("."));
  } catch {
    return [];
  }
}

const langColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  Jupyter: "#DA5B0B",
  HTML: "#e34c26",
};

async function RepoGrid() {
  const repos = await fetchRepos();
  if (repos.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-border p-5 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-white text-sm font-semibold group-hover:text-[#818cf8] transition-colors truncate">
              {repo.name}
            </h3>
            <svg className="w-4 h-4 text-slate-600 shrink-0 group-hover:text-slate-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          {repo.description && (
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{repo.description}</p>
          )}

          <div className="flex items-center gap-4 mt-auto text-xs text-slate-600">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: langColors[repo.language] ?? "#8b8b8b" }}
                />
                {repo.language}
              </span>
            )}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {repo.stargazers_count}
              </span>
            )}
            {repo.forks_count > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                </svg>
                {repo.forks_count}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}

export default function GitHubStats() {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 max-w-8 bg-gradient-to-r from-[#818cf8] to-[#22d3ee]" />
        <span className="text-sm font-semibold text-[#818cf8] uppercase tracking-widest">
          GitHub
        </span>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white font-bold text-2xl">Open Source</h2>
        <a
          href="https://github.com/mehul4mak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#818cf8] hover:text-[#22d3ee] transition-colors font-medium"
        >
          View all →
        </a>
      </div>
      <Suspense
        fallback={
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="gradient-border p-5 h-28 animate-pulse" />
            ))}
          </div>
        }
      >
        <RepoGrid />
      </Suspense>
    </div>
  );
}
