import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import HomePage from "./Pages/HomePage";
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#121212",
        "#1F1F1F",
        "#2B2B2B",
        "#3A3A3A",
        "#4D4D4D",
        "#606060",
        "#757575",
        "#8C8C8C",
        "#A0A0A0",
        "#B5B5B5",
      ],
      "bright-sun": [
        "#FFEA00",
        "#FFE600",
        "#FFE200",
        "#FFDD00",
        "#FFD800",
        "#FFD400",
        "#FFCF00",
        "#FFC900",
        "#FFC400",
        "#FFC000",
      ],
    },
  });
  return (
    <div className="overflow-x-hidden">
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/find-jobs" element={<FindJobs/>}/>
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </MantineProvider>
    </div>
  );
}

export default App;
