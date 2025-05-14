import { Button, TextInput } from "@mantine/core";
import { fields } from "../Data/ProfileData";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput label="Title" withAsterisk placeholder="Enter title" />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <MonthPickerInput
            maxDate={new Date()}
            withAsterisk
            minDate={issueDate || undefined}
            label="End date"
            placeholder="Pick date"
            value={issueDate}
            onChange={setIssueDate}
          />
          <TextInput
            label="Certificate ID"
            withAsterisk
            placeholder="Enter Certificate ID"
          />
        </div>
        <div className="flex gap-5 w-2/5">
          <Button
            onClick={() => props.setEdit(false)}
            color="bright-sun.4"
            variant="outline"
            fullWidth
          >
            Save
          </Button>
          <Button
            onClick={() => props.setEdit(false)}
            color="red.8"
            variant="light"
            fullWidth
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertiInput;
