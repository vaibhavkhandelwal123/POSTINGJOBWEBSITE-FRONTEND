import { Button, Divider } from "@mantine/core"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Profile from "../TalentProfile/Profile"

const TalentProfile = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Divider size="xs"/>
        <Link className="my-4 inline-block" to="/find-talent">
          <Button leftSection={<ArrowLeft size={20}/>} color="bright-sun.5" variant="light">Back</Button>
        </Link>
        <div className="flex gap-5">
            <Profile/>
        </div>
    </div>
  )
}

export default TalentProfile