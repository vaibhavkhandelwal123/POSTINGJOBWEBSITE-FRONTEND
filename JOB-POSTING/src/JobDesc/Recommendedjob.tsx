import { jobList } from "../Data/JobData"
import JobCard from "../FindJobs/JobCard"

const Recommendedjob = () => {
  return (
    <div>
        <div className="text-xl font-semibold mb-5 text-bright-sun-400">Recommended Jobs</div>
    <div className="flex flex-col flex-wrap gap-5">
        {jobList.map((job: any, index: any) => index < 6 && <JobCard key={index} {...job} />)}
    </div>
    </div>
  )
}

export default Recommendedjob