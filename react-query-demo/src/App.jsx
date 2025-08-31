import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: 16 }}>
      <h1>React Query Demo</h1>

      <button onClick={() => setShowPosts(s => !s)}>
        {showPosts ? "Hide" : "Show"} PostsComponent
      </button>

      <p style={{ opacity: 0.7 }}>
        Toggle the component to see cached data re-appear instantly.
      </p>

      {showPosts && <PostsComponent />}
    </div>
  );
}
