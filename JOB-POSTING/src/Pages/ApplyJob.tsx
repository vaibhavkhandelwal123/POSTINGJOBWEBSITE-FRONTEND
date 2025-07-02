import { Button } from "@mantine/core"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import ApplyJobComp from "../ApplyJob/ApplyJobComp"

const ApplyJob = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Link className="my-4 inline-block" to="/jobs/">
          <Button leftSection={<ArrowLeft size={20}/>} color="bright-sun.5" variant="light">Back</Button>
        </Link>
        <ApplyJobComp/>
    </div>
  )
}

export default ApplyJob