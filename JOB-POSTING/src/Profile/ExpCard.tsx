import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatData } from "../Services/Utilities";

const ExpCard = (props: any) => {
  const [edit,setEdit] = useState(false);
  return !edit?(
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-8 w-8"
              src={`/Logos/${props.company}.png`}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{props.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {formatData(props.startDate)} - {formatData(props.endDate)}
        </div>
      </div>
      <div className="text-sm text-justify text-mine-shaft-300">
        {props.description}
      </div>
      {props.edit &&<div className="flex gap-5 w-2/5">
        <Button onClick={()=>setEdit(true)} color="bright-sun.4" variant="outline" fullWidth>
          Edit
        </Button>
        <Button color="red.8" variant="light" fullWidth>
          Delete
        </Button>
      </div>}
    </div>
  ):<ExpInput setEdit={setEdit} />
}

export default ExpCard;
