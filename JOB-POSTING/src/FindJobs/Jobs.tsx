
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../Services/JobService";

const Jobs = () => {
 const [jobList, setJobList] = useState([{}]);
 useEffect(()=>{
  getAllJobs().then((res) => {
      setJobList(res);
    }).catch((error) => {
      console.log("Failed to fetch jobs", error);
    })
 },[]);
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
