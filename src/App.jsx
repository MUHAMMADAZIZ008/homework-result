import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import routes from "./router/routes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ comp: Page, path }, index) => (
            <Route
              key={index}
              index={!path ? true : false}
              path={path}
              element={<Page />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
