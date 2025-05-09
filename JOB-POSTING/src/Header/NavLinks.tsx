import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Job", url: "post-job" },
    { name: "Posted Job", url: "posted-job" },
    { name:"Job History", url: "job-history" },
    { name:"Sign Up", url: "signup" },
  ];
  const location = useLocation();
  return (
    <div className="flex gap-5 h-full items-center text-min-shaft-300 ">
      {links.map((link, index) => (
        <div
          className={`border-t-[3px] h-full flex items-center border-transparent hover:border-bright-sun-400 transition-all duration-300 ${
            location.pathname === `/${link.url}` ? "border-bright-sun-400" : ""
          }`}
          key={index}
        >
          <Link key={index} to={link.url}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
