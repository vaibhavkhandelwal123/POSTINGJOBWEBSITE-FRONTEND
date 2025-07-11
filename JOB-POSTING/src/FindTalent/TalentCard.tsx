import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { CalendarDaysIcon, Heart, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={props.pictures ? `data:image/png;base64,${props.pictures}` : "/avatar-7.png"} alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.jobTitle} &bull; {props.company}
            </div>
          </div>
        </div>
        <div>
          <Heart size={20} className="text-mine-shaft-300 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-2 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg [&>div]:text-xs">
        {props.topSkills?.map((skill: any, index: any) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <div>
        <Text
          lineClamp={2}
          className="!text-xs text-justify !text-mine-shaft-300"
        >
          {props.about}
        </Text>
      </div>
      <Divider color="mine-shaft.5" />
      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <CalendarDaysIcon /> Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
          </div>
          <div className="flex gap-1 items-center text-mine-shaft-400 text-xs">
            <MapPin className=" h-5 w-5" />
            {props.location}
          </div>
        </div>
      )}
      <Divider color="mine-shaft.5" />
        {props.invited ? (
          <div>
            <div className="flex [&>*]:w-1/2 [&>*]:p-1 gap-2">
            <Button color="bright-sun.5" variant="outline" fullWidth>
              Accept
            </Button>
            <Button color="bright-sun.5" variant="light" fullWidth>
                  Reject
                </Button>
          </div>
          </div>
        ) : (
          <div>
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            <Link to="/talent-profile">
              <Button color="bright-sun.5" variant="outline" fullWidth>
                Profle
              </Button>
            </Link>
            <div>
              {props.posted ? (
                <Button
                  onClick={open}
                  rightSection={<CalendarDaysIcon className="w-5 h-5" />}
                  color="bright-sun.5"
                  variant="light"
                  fullWidth
                >
                  Schedule
                </Button>
              ) : (
                <Button color="bright-sun.5" variant="light" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </div>
          </div>
        )}
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            minDate={new Date()}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button color="bright-sun.5" variant="light" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
