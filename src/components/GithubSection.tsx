// components/GitHubSection.tsx
import React, { useEffect, useState } from "react";

interface GitHubUser {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  name: string;
  login: string;
  bio?: string;
}

interface GitHubSectionProps {
  username: string;
}

const GitHubSection: React.FC<GitHubSectionProps> = ({ username }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching GitHub data:", err);
        setLoading(false);
      });
  }, [username]);

  if (loading)
    return <p className="text-center text-gray-400">Loading GitHub data...</p>;

  if (!user)
    return (
      <p className="text-center text-red-400">
        Failed to load GitHub data. Try again later.
      </p>
    );

  return (
    <section className="w-full flex flex-col items-center gap-8 py-16">
      {/* Header */}
      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
        My GitHub Activity
      </h2>

      {/* Profile Card */}
      <div className="bg-gray-900/60 border border-white/10 rounded-3xl shadow-lg p-8 w-full max-w-xl text-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-28 h-28 rounded-full mx-auto border-2 border-indigo-500"
        />
        <h3 className="text-xl font-semibold mt-4">{user.name}</h3>
        <p className="text-gray-400">@{user.login}</p>
        {user.bio && <p className="text-gray-500 mt-2">{user.bio}</p>}

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold">{user.public_repos}</p>
            <p className="text-sm text-gray-400">Repos</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{user.followers}</p>
            <p className="text-sm text-gray-400">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{user.following}</p>
            <p className="text-sm text-gray-400">Following</p>
          </div>
        </div>

        {/* Link */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition"
        >
          View GitHub Profile →
        </a>
      </div>

      {/* Contributions Graph */}
      <div className="w-full max-w-4xl bg-gray-900/50 border border-white/10 rounded-3xl p-6 shadow-lg overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-300">
          Contribution Graph
        </h3>
        <img
          src={`https://ghchart.rshah.org/00c16a/${username}`}
          alt={`${username}'s GitHub contribution graph`}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default GitHubSection;
