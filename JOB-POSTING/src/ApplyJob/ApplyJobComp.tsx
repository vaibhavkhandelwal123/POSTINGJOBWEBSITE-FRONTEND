import {
  Divider,
  
} from "@mantine/core";

import { timeAgo } from "../Services/Utilities";
import ApplicationForm from "./ApplicationForm";

const ApplyJobComp = (props:any) => {
  
  
  return (
    <>
      <div className="w-2/3 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-14" src={`/Logos/${props.company}.png`} alt="" />
            </div>
            <div>
              <div className="font-semibold text-2xl ">
                {props.jobTitle}
              </div>
              <div className="text-lg">
                {props.company} &#x2022; Posted {timeAgo(props.postTime)} &#x2022; {props.applicants?props.applicants.length:0} Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
        <ApplicationForm/>
      </div>
    </>
  );
};

export default ApplyJobComp;
