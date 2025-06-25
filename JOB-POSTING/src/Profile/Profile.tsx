import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { Edit2, Plus, Save } from "lucide-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../Slices/ProfileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user=useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  
  const [edit, setEdit] = useState([false, false, false, false]);

  const [exp, setExp] = useState(false);
  const [certi, setCerti] = useState(false);

  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  useEffect(()=>{
    getProfile(user.id).then((data:any)=>{
      dispatch(setProfile(data));
    }).catch((error:any)=>{
      console.error(error);
    });
  },[])
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          width={1200}
          src="/profile banner/banner.jpg"
        />
        <img
          className="h-48 w-48 absolute left-3 border-mine-shaft-950 border-8 -bottom-1/3 rounded-full"
          src="/avatar-7.png"
        />
      </div>
      <div className="px-8 mt-16">
        <Info/>
        <Divider my="xl" size="sm" />
        <div className="flex flex-col justify-between">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            About
            <ActionIcon
              onClick={() => handleEdit(0)}
              size="lg"
              variant="subtle"
              color="bright-sun.4"
            >
              {edit[0] ? <Save className="" /> : <Edit2 className="" />}
            </ActionIcon>
          </div>
          <div className="">
            {edit[0] && (
              <Textarea
                value={about}
                autosize
                maxRows={3}
                placeholder="write about yourself..."
                onChange={(event) => setAbout(event.currentTarget.value)}
              />
            )}
            {!edit[0] && (
              <div className="text-sm text-mine-shaft-300 text-justify">
                {profile?.about}
              </div>
            )}
          </div>
        </div>
        <Divider my="xl" size="sm" />
        <div className="">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            Skills
            <ActionIcon
              onClick={() => handleEdit(1)}
              size="lg"
              variant="subtle"
              color="bright-sun.4"
            >
              {edit[1] ? <Save className="" /> : <Edit2 className="" />}
            </ActionIcon>
          </div>
          {edit[1] ? (
            <TagsInput
              placeholder="add skills"
              splitChars={[",", " ", "|"]}
              value={skills}
              onChange={setSkills}
            />
          ) : (
            <div className="flex gap-2 flex-wrap">
              {profile?.skills?.map((skill: any, index: number) => (
                <div
                  className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 gap-1 text-sm font-medium"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
        <Divider my="xl" size="sm" />
        <div className="">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Experience
            <div className="flex gap-2">
              <ActionIcon
                onClick={() => setExp(true)}
                size="lg"
                variant="subtle"
                color="bright-sun.4"
              >
                <Plus className="" size="large" />
              </ActionIcon>
              <ActionIcon
                onClick={() => handleEdit(2)}
                size="lg"
                variant="subtle"
                color="bright-sun.4"
              >
                {edit[2] ? <Save className="" /> : <Edit2 className="" />}
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {profile?.experiences?.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} edit={edit[2]} />
            ))}
            {exp&&<ExpInput setEdit={setExp} add/>}
          </div>
        </div>
        <Divider my="xl" size="sm" />
        <div>
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Certifications
            <div className="flex gap-2">

            <ActionIcon
                onClick={() => setCerti(true)}
                size="lg"
                variant="subtle"
                color="bright-sun.4"
              >
                <Plus className="" size="large" />
              </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(3)}
              size="lg"
              variant="subtle"
              color="bright-sun.4"
            >
              {edit[3] ? <Save className="" /> : <Edit2 className="" />}
            </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {profile?.certifications?.map((cert: any, index: any) => (
             <CertCard key={index} {...cert} edit={edit[3]}/>
            ))}
            {certi&&<CertiInput setEdit={setCerti}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
