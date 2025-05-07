import { Divider } from "@mantine/core"
import PostedJob from "../PostedJob/PostedJob"
import PostedJobDesc from "../PostedJob/PostedJobDesc"

const PostedJobsPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
                <Divider size="xs"/>
                  
                <div className="flex gap-5 justify-between">
                    <PostedJob/>
                    <PostedJobDesc/>
                </div>
            </div>
      )
}

export default PostedJobsPage