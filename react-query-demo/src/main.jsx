import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Good demo defaults
      staleTime: 60 * 1000,       // 1 min: serves cached data as "fresh"
      gcTime: 5 * 60 * 1000,      // 5 min: keep cache around (TanStack v5 uses gcTime)
      refetchOnWindowFocus: false // don’t auto-refetch when tab regains focus
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
