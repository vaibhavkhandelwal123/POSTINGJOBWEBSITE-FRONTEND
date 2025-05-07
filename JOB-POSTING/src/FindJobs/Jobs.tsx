
import { jobList } from "../Data/JobData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
 
  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Recommanded Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      </div>
    </div>
  );
};

export default Jobs;
