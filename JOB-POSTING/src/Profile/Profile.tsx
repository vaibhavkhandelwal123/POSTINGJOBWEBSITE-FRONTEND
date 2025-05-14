import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { BriefcaseBusiness, Edit2, MapPin, Plus, Save } from "lucide-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../Data/ProfileData";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = (props: any) => {
  const [skills, setSkills] = useState([
    "Java",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ]);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(
    "Passionate software engineer with experience in project developing scalable web applications. Strong background in JavaScript, TypeScript, and cloud technologies. Proven track record of leading engineering teams and delivering high-impact projects. Constant learner and advocate for clean code and agile practices Passionate software engineer with experience in project developing scalable web applications. Strong background in JavaScript, TypeScript, and cloud technologies. Proven track record of leading engineering teams and delivering high-impact projects. Constant learner and advocate for clean code and agile practices"
  );

  const [exp,setExp] = useState(false);
  const [certi,setCerti] = useState(false);
  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const select = fields;
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
        <div
          className={`text-3xl font-semibold flex justify-between items-center ${
            window.innerWidth < 768 ? "mt-16" : "mt-36"
          }`}
        >
          {props.name}{" "}
          <ActionIcon
            onClick={() => handleEdit(0)}
            size="lg"
            variant="subtle"
            color="bright-sun.4"
          >
            {edit[0] ? <Save className="" /> : <Edit2 className="" />}
          </ActionIcon>
        </div>
        {edit[0] && (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <div>
              <SelectInput {...select[2]} />
            </div>
          </>
        )}
        {!edit[0] && (
          <div>
            <div className="text-xl flex items-center gap-1">
              <BriefcaseBusiness className=" h-5 w-5 stroke={1.5}" />
              {props.role} &bull; {props.company}
            </div>
            <div className="flex gap-1 items-center text-mine-shaft-300 text-lg">
              <MapPin className=" h-5 w-5 stroke={1.5}" />
              {props.location}
            </div>
          </div>
        )}
        <Divider my="xl" size="sm" />
        <div className="flex flex-col justify-between">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            About
            <ActionIcon
              onClick={() => handleEdit(1)}
              size="lg"
              variant="subtle"
              color="bright-sun.4"
            >
              {edit[1] ? <Save className="" /> : <Edit2 className="" />}
            </ActionIcon>
          </div>
          <div className="">
            {edit[1] && (
              <Textarea
                value={about}
                autosize
                maxRows={3}
                placeholder="write about yourself..."
                onChange={(event) => setAbout(event.currentTarget.value)}
              />
            )}
            {!edit[1] && (
              <div className="text-sm text-mine-shaft-300 text-justify">
                {about}
              </div>
            )}
          </div>
        </div>
        <Divider my="xl" size="sm" />
        <div className="">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            Skills
            <ActionIcon
              onClick={() => handleEdit(2)}
              size="lg"
              variant="subtle"
              color="bright-sun.4"
            >
              {edit[2] ? <Save className="" /> : <Edit2 className="" />}
            </ActionIcon>
          </div>
          {edit[2] ? (
            <TagsInput
              placeholder="add skills"
              splitChars={[",", " ", "|"]}
              value={skills}
              onChange={setSkills}
            />
          ) : (
            <div className="flex gap-2 flex-wrap">
              {skills.map((skill: string, index: number) => (
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
            {props.experience?.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
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
              onClick={() => handleEdit(4)}
              size="lg"
              variant="subtle"
              color="bright-sun.4"
            >
              {edit[4] ? <Save className="" /> : <Edit2 className="" />}
            </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {props.certifications?.map((cert: any, index: any) => (
             <CertCard key={index} {...cert} edit={edit[4]}/>
            ))}
            {certi&&<CertiInput setEdit={setCerti}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
