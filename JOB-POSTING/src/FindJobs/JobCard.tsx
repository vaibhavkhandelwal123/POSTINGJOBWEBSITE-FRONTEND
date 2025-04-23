import { Divider, Text } from "@mantine/core";
import { Bookmark, Clock } from "lucide-react";

const JobCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img src={`/Logos/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs">{props.company} &#x2022; {props.applicants} Applicants</div>
          </div>
        </div>
        <div>
          <Bookmark size={20} className="text-mine-shaft-300 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-2 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        lineClamp={2}
        className="!text-xs text-justify !text-mine-shaft-300"
      >
        {props.description}
      </Text>
      <Divider size="xs" className="my-2" color="mine-shaft.7" />
      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-200">&#8377;{props.package} LPA</div>
        <div className="flex gap-1 items-center text-mine-shaft-400 text-xs">
          <Clock className=" h-5 w-5" />
          {props.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobCard;
