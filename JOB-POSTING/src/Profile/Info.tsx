import { useState } from "react";
import { fields } from "../Data/ProfileData";
import SelectInput from "./SelectInput";
import { ActionIcon } from "@mantine/core";
import { BriefcaseBusiness, Edit2, MapPin, Save } from "lucide-react";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { NotificationSuccess } from "../SignUpLogin/NotificationAny";
const Info = () => {
  const select = fields;
  const dispatch = useDispatch();
  const user = useSelector((state:any)=>state.user);
  const profile = useSelector((state:any)=>state.profile);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    if(!edit){
      setEdit(true);
      form.setValues({jobTitle:profile.jobTitle,company:profile.company,location:profile.location})
    }
    else{
      setEdit(false);
      let updatedProfile={...profile,...form.getValues()};
      dispatch(changeProfile(updatedProfile));
      NotificationSuccess("Success","Profile Updated Successfully")
    }
  };
  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '' ,location: ''},
    
  })
  return (
    <div className="flex flex-col gap-2">
      <div
        className={
          "text-3xl font-semibold flex justify-between items-center mt-20"
        }
      >
        {user.name}{" "}
        <ActionIcon
          onClick={handleEdit}
          size="lg"
          variant="subtle"
          color="bright-sun.4"
        >
          {edit ? <Save className="" /> : <Edit2 className="" />}
        </ActionIcon>
      </div>
      {edit && (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <div>
            <SelectInput form={form} name="location" {...select[2]} />
          </div>
        </>
      )}
      {!edit && (
        <div className="">
          <div className="text-xl flex items-center gap-1">
            <BriefcaseBusiness className=" h-5 w-5 stroke={1.5}" />
            {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="flex gap-1 items-center text-mine-shaft-300 text-lg">
            <MapPin className=" h-5 w-5 stroke={1.5}" />
            {profile.location}
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
