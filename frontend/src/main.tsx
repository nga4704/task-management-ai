import React from "react";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  GoogleOAuthProvider,
} from "@react-oauth/google";

import App from "./App";

import "./index.css";

const queryClient =
  new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
      <BrowserRouter>
        <GoogleOAuthProvider
          clientId={
            import.meta.env
              .VITE_GOOGLE_CLIENT_ID
          }
        >
          <App />
          <Toaster position="top-right" />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);