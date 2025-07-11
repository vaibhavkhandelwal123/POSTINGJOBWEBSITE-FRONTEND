import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = (props:any) => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        {props.jobTitle}
      </div>
      <Badge variant="light" ml="sm" color="bright-sun.4" size="sm">
        {props.jobStatus}
      </Badge>
      <div className="font-medium text-mine-shaft-300 mb-5">
        {props.location}
      </div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>*]:w-full ">
            <JobDesc {...props} edit={true} />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 flex flex-wrap gap-5 justify-around">
              {props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED").map((talent:any, index:any) => (
                <TalentCard key={index} {...talent} posted />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="mt-10 flex flex-wrap gap-5  justify-around">
              {props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING").map((talent:any, index:any) => (
                <TalentCard key={index} {...talent} posted />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDesc;
