import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Scroll from "../Scroll"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import HomePage from "./HomePage"
import TalentProfile from "../FindTalent/TalentProfile"
import Forgot from "../SignUpLogin/Forgot"
import ApplyJob from "./ApplyJob"
import CompanyPage from "./CompanyPage"
import FindJobs from "./FindJobs"
import FindTalent from "./FindTalent"
import JobDescPage from "./JobDescPage"
import JobHistoryPage from "./JobHistoryPage"
import Postjobs from "./Postjobs"
import ProfilePage from "./ProfilePage"
import SignUpPage from "./SignUpPage"
import { useSelector } from "react-redux"

const AppRoutes = () => {
    const user = useSelector((state:any)=>state.user);
  return <BrowserRouter>
              <div className="relative">
                <Header />
                <Scroll />
                <Routes>
                  <Route path="/find-jobs" element={<FindJobs />} />
                  <Route path="/find-talent" element={<FindTalent />} />
                  <Route path="/jobs" element={<JobDescPage />} />
                  <Route path="/apply-job" element={<ApplyJob />} />
                  <Route path="/company" element={<CompanyPage />} />
                  <Route path="/posted-job" element={<Postjobs />} />
                  <Route path="/job-history" element={<JobHistoryPage />} />
                  <Route path="/post-job" element={<Postjobs />} />
                  <Route path="/signup" element={user?<Navigate to="/"/>:<SignUpPage />} />
                  <Route path="/login" element={user?<Navigate to="/"/>:<SignUpPage />} />
                  <Route path="/talent-profile" element={<TalentProfile />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/forgot" element={<Forgot />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
                <Footer />
              </div>
            </BrowserRouter>
}

export default AppRoutes