import { Divider } from "@mantine/core"
import PostedJob from "../PostedJob/PostedJob"
import PostedJobDesc from "../PostedJob/PostedJobDesc"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {  getJobPostedBy } from "../Services/JobService"

const PostedJobsPage = () => {
    const {id} =useParams();
    const user = useSelector((state:any) => state.user);
    const [jobList, setJobList] = useState<any[]>([]);
    const [job, setJob] = useState<any>({});
    useEffect(() => {
        window.scrollTo(0, 0);
        getJobPostedBy(user.id).then((res)=>{
            setJobList(res);
            setJob(res.find((item:any) => item.id == id));
            
        }).catch((error)=>{
            console.error("Error fetching jobs:", error);
        });
    },[id]);
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
                <Divider size="xs"/>
                  
                <div className="flex gap-5 justify-between">
                    <PostedJob job={job} jobList={jobList} />
                    <PostedJobDesc {...job} />
                </div>
            </div>
      )
}

export default PostedJobsPage