import { Avatar, TextInput } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400 ">
          Find your<span>dream </span>
          <span>job</span> with us
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good company.Start exploring thousands of jobs
          at one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100  [&_input]:text-mine-shaft-100"
            variant="unstyled"
            label="Job title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100  [&_input]:text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
          />
          <div className="flex items-center h-10 justify-center mt-3 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 cursor-pointer hover:bg-bright-sun-500 transition-all duration-300">
            <SearchIcon className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex justify-center items-center">
        <div className="w-[30rem] relative">
          <img src="/Boy.png" alt="boy" className="" />
          <div className="absolute w-fit -right-10 top-[50%] border-bright-sun-400 p-2 border rounded backdrop-blur-md">
            <div className="text-cente text-mine-shaft-100 mb-1 text-sm">10k+ got job</div>
            <Avatar.Group>
              <Avatar src="avatar-7.png" />
              <Avatar src="avatar-8.png" />
              <Avatar src="avatar-9.png" />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute w-fit -left-5 top-[27%] border-bright-sun-400 p-2 border rounded backdrop-blur-md gap-3 flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img className="" src="/Google.png" alt="Google" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            
            <div className="flex gap-2 text-mine-shaft-50 text-xs justify-around">
              <span>
                1 day ago</span>
                <span>
                  120 Applicants
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
