import { Button, TextInput } from "@mantine/core";
import { fields } from "../Data/ProfileData";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { NotificationSuccess } from "../SignUpLogin/NotificationAny";

const CertiInput = (props: any) => {
  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      issuer: "",
      issueDate: new Date(),
      certificateId: "",
    },
    validate: {
      title: isNotEmpty("name is required"),
      issuer: isNotEmpty("issuer is required"),
      issueDate: isNotEmpty("Issue Date is required"),
      certificateId: isNotEmpty("Certificate ID is required"),
    },
  });
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const handleSave = () => {
  form.validate();
  if (!form.isValid()) return;

  let certi = [...profile.certifications];
  const newCert = form.getValues();
  const certToSave = {
    ...newCert,
    issueDate: newCert.issueDate ? new Date(newCert.issueDate).toISOString() : undefined,
  };

  certi.push(certToSave);
  let updatedProfile = { ...profile, certifications: certi };

  props.setEdit(false);
  dispatch(changeProfile(updatedProfile));
  NotificationSuccess("Success", "Certificate Added Successfully");
};

  const select = fields;
  
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("title")}
            label="Name"
            withAsterisk
            placeholder="Enter Name"
          />
          <SelectInput form={form} name="issuer" {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <MonthPickerInput
            {...form.getInputProps("issueDate")}
            maxDate={new Date()}
            withAsterisk
            minDate={undefined}
            label="End date"
            placeholder="Pick date"
          />
          <TextInput
            {...form.getInputProps("certificateId")}
            label="Certificate ID"
            withAsterisk
            placeholder="Enter Certificate ID"
          />
        </div>
        <div className="flex gap-5 w-2/5">
          <Button
            onClick={handleSave}
            color="green.8"
            variant="light"
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
