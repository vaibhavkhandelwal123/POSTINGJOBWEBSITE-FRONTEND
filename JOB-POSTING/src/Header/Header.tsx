import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
const Header = () => {
  const location = useLocation();
  return location.pathname!="/signup"&& location.pathname!="/login" &&
    <div className="text-white flex justify-between items-center px-6 h-20  bg-mine-shaft-950 font-['poppins']">
      <div className="flex items-center gap-2 text-bright-sun-400 ">
        <div className="font-bold text-3xl">
          <CrisisAlertIcon />
        </div>
        <Link to="/" className="text-3xl font-semibold cursor-pointer">TargetJobs</Link>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center">
          <ProfileHeader/>
        <div className="bg-mine-shaft-900 rounded-full p-1.5">
          <Indicator color="bright-sun.4" size={8} offset={6} processing><NotificationsNoneIcon /></Indicator>
          
        </div>
        <div className="bg-mine-shaft-900 rounded-full p-1.5">
          <SettingsIcon />
        </div>
      </div>
    </div>
};

export default Header;
