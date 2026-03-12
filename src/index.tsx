import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProfileInfo } from "./screens/ProfileInfo";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProfileInfo />
  </StrictMode>,
);
