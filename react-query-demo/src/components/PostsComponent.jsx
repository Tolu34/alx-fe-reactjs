import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,   // true during background refetch
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // You can set per-query options here too if you like:
    // staleTime: 60_000,
    // gcTime: 5 * 60_000,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => refetch()}>Refetch now</button>

        <button
          onClick={() => {
            // Simulate “data changed elsewhere”: mark it stale
            queryClient.invalidateQueries({ queryKey: ["posts"] });
          }}
        >
          Invalidate cache (mark stale)
        </button>

        <span style={{ fontSize: 12, opacity: 0.7 }}>
          {isFetching ? "background updating…" : "idle"}
        </span>
      </div>

      <ul style={{ marginTop: 12 }}>
        {data.slice(0, 10).map(p => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>#{p.id}</strong> {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
