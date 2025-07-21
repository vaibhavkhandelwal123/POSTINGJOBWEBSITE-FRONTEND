import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { Button, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../Slices/ProfileSlice";
import Notification from "./Notification";
const Header = () => {
  const user = useSelector((state:any) => state.user);
  const dispatch = useSelector((state:any) => state.dispatch);
  useEffect(() => {
    if (user && user.id) {
      getProfile(user.id)
        .then((data: any) => {
          dispatch(setProfile(data));
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, []);
  const location = useLocation();
  return location.pathname!="/signup"&& location.pathname!="/login" && location.pathname!="/forgot" &&
    <div className="text-white flex justify-between items-center px-6 h-20  bg-mine-shaft-950 font-['poppins']">
      <div className="flex items-center gap-2 text-bright-sun-400 ">
        <div className="font-bold text-3xl">
          <CrisisAlertIcon />
        </div>
        <Link to="/" className="text-3xl font-semibold cursor-pointer">TargetJobs</Link>
      </div>
      <NavLinks />
      <div className="flex gap-3 items-center">
          {user ? <ProfileHeader />:
          
          <Link to="/login">
            <Button variant="subtle" color="bright-sun.4">Login</Button>
          </Link>}
        {user ? <Notification/>:<></>}
        {/* <div className="bg-mine-shaft-900 rounded-full p-1.5">
          <SettingsIcon />
        </div> */}
      </div>
    </div>
};

export default Header;


