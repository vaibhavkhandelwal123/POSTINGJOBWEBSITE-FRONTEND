import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import HomePage from "./Pages/HomePage";
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalent from "./Pages/FindTalent";
import TalentProfile from "./FindTalent/TalentProfile";
import Postjobs from "./Pages/Postjobs";
import "@mantine/tiptap/styles.css";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJob from "./Pages/ApplyJob";
import Scroll from "./Scroll";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobs from "./Pages/PostedJobsPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import Forgot from "./SignUpLogin/Forgot";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import store from "./Store";
function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins,sans-serif",
    primaryColor: "bright-sun",
    primaryShade: 4,
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
    <div className="overflow-x-hidden min-h-[100vh]">
      <Provider store={store}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Notifications position="top-center" zIndex={1000} />
          <BrowserRouter>
            <div className="relative">
              <Header />
              <Scroll />
              <Routes>
                <Route path="/find-jobs" element={<FindJobs />} />
                <Route path="/find-talent" element={<FindTalent />} />
                <Route path="/jobs" element={<JobDescPage />} />
                <Route path="/apply-job" element={<ApplyJob />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/posted-job" element={<PostedJobs />} />
                <Route path="/job-history" element={<JobHistoryPage />} />
                <Route path="/post-job" element={<Postjobs />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<SignUpPage />} />
                <Route path="/talent-profile" element={<TalentProfile />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </MantineProvider>
      </Provider>
    </div>
  );
}

export default App;
