import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chats from "./pages/Chats";
import LandingPage from "./pages/LandingPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "chat",
    element: <Chats />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
