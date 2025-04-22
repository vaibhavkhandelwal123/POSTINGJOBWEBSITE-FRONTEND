import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { footerLinks } from "../Data/Data";
const Footer = () => {
  return (
    <div className="pt-20 pb-5 flex gap-5 justify-around  bg-mine-shaft-950 font-['poppins']">
      <div className="flex items-center text-bright-sun-400 flex-col w-1/4 gap-4 ">
        <div className="font-bold text-3xl flex items-center gap-2">
          <CrisisAlertIcon />
          <div className="text-3xl font-semibold">TargetJobs</div>
        </div>
        <div className="text-mine-shaft-300 text-sm">
          Job Portal with user profiles, skill updates, certifications,work
          experience and admin job postings
        </div>
        <div className="flex gap-4 text-bright-sun-400 justify-center items-center">
          <div className="bg-mine-shaft-900 p-3 rounded-full hover:bg-bright-sun-400 cursor-pointer hover:text-mine-shaft-600 transition-all duration-300 ease-in-out">
            <FacebookIcon />
          </div>
          <div className="bg-mine-shaft-900 p-3 rounded-full hover:bg-bright-sun-400 cursor-pointer hover:text-mine-shaft-600 transition-all duration-300 ease-in-out">
            <InstagramIcon />
          </div>
          <div className="bg-mine-shaft-900 p-3 rounded-full hover:bg-bright-sun-400 cursor-pointer hover:text-mine-shaft-600 transition-all duration-300 ease-in-out">
            <XIcon />
          </div>
        </div>
      </div>
      {
        footerLinks.map((item, index) => (
          <div key={index}>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
            {item.link.map((link, linkIndex) => (
              <div
                key={linkIndex}
                className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
              >
                {link}
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
};

export default Footer;
