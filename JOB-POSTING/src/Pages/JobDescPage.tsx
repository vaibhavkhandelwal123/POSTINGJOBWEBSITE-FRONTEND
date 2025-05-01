import { Button, Divider } from "@mantine/core"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import JobDesc from "../JobDesc/JobDesc"
import Recommendedjob from "../JobDesc/Recommendedjob"

const JobDescPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        
        <Link className="my-4 inline-block" to="/find-jobs">
          <Button leftSection={<ArrowLeft size={20}/>} color="bright-sun.5" variant="light">Back</Button>
        </Link>
        <div className="flex gap-5 justify-around">
            <JobDesc/>
            <Recommendedjob/>
        </div>
    </div>
  )
}

export default JobDescPage