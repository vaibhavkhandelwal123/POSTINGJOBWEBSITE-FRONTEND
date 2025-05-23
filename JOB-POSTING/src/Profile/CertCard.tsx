import { ActionIcon } from "@mantine/core";
import { Trash2 } from "lucide-react";

const CertCard = (props: any) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img className="h-8 w-8" src={`/Logos/${props.issuer}.png`} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className=" flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">{props.issue_date}</div>
          <div className="text-sm text-mine-shaft-300">
            ID: {props.certification_id}
          </div>
        </div>
        {props.edit && (
          <ActionIcon size="lg" variant="subtle" color="red.8">
            <Trash2 className="" />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

export default CertCard;
