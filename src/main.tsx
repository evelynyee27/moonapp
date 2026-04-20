import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.tsx";
import Lobby from "./Lobby.tsx";
import StudyTimer from "./StudyTimer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/timer" element={<StudyTimer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
