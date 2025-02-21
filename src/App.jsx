import { ThemeProvider } from "@emotion/react";
import MainLayout from "./layout/main-layout/main-layout";
import { customTheme } from "./matrial-ui/matrial-ui";
import Hero from "./pages/hero/hero";
import Sections from "./pages/sections/sections";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <MainLayout>
          <Hero />
          <Sections />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
