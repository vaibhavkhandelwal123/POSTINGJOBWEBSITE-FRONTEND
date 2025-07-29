import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { Button} from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../Slices/ProfileSlice";
import Notification from "./Notification";
import { setUser } from "../Slices/UserSlice";
import { jwtDecode } from "jwt-decode";
import { setUpResponseInterceptor } from "../Interceptor/AxiosInterceptor";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state:any) => state.user);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") || "";
  useEffect(()=>{
    setUpResponseInterceptor(navigate);
  },[navigate])
  useEffect(() => {
    if (token!=""){
      const decoded = jwtDecode(localStorage.getItem("token")||"");
      dispatch(setUser({...decoded,email:decoded.sub}));
    }
    if( token && user?.profileId){
      getProfile(user?.profileId)
        .then((data: any) => {
          dispatch(setProfile(data));
        })
        .catch((error: any) => {
          console.error(error);
        });
      }
  }, [token,navigate]);
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


