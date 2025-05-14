import { useState } from "react";
import { fields } from "../Data/ProfileData";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setDesc] = useState(
    "Led the development of a microservices-based internal dashboard used by 500+ engineers. Optimized cloud functions, reducing response time by 35%. Mentored 4 junior engineers and reviewed 100+ PRs monthly."
  ); 
  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add Experience" : "Edit Experience"}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="">
          <SelectInput {...select[2]} />
        </div>
        <div className="">
          <Textarea
            label="Summary"
            withAsterisk
            value={desc}
            autosize
            maxRows={3}
            placeholder="Enter Summary..."
            onChange={(event) => setDesc(event.currentTarget.value)}
          />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <MonthPickerInput
            maxDate={new Date() || undefined}
            withAsterisk
            label="Start date"
            placeholder="Pick date"
            value={startDate}
            onChange={setStartDate}
          />
          <MonthPickerInput
            maxDate={new Date()}
            disabled={checked}
            withAsterisk
            minDate={startDate || undefined}
            label="End date"
            placeholder="Pick date"
            value={endDate}
            onChange={setEndDate}
          />
        </div>
      </div>
      <Checkbox
        className="flex items-center [&>*]:items-center"
        autoContrast
        label="Currently working here"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
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
  );
};

export default ExpInput;
