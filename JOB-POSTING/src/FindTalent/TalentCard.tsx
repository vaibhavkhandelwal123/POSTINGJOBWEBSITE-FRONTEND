import { Avatar, Button, Divider, Text } from "@mantine/core";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={`/${props.image}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
             {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <div>
          <Heart size={20} className="text-mine-shaft-300 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-2 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        {props.topskills?.map((skill: any, index: any) => (
            <div key={index}>
                {skill}
            </div>
        ))}
      </div>
      <Text
        lineClamp={2}
        className="!text-xs text-justify !text-mine-shaft-300"
      >
        {props.about}
      </Text>
      <div className="flex justify-between items-center">
        <div className="font-semibold text-mine-shaft-200">
          {props.expectedCtc}
        </div>
        <div className="flex gap-1 items-center text-mine-shaft-400 text-xs">
          <MapPin className=" h-5 w-5" />
          {props.location}
        </div>
      </div>
      <Divider size="xs"  color="mine-shaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        <Link to="/talent-profile">
          <Button color="bright-sun.5" variant="outline" fullWidth>Profle</Button>
        </Link>
        <div>
          <Button color="bright-sun.5" variant="light" fullWidth>Message</Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
