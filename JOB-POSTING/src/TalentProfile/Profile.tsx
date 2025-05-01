import { Button, Divider } from "@mantine/core";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="rounded-t-2xl" src="/profile banner/banner.jpg" />
        <img
          className="h-48 w-48 absolute left-3 border-mine-shaft-950 border-8 -bottom-1/3 rounded-full"
          src="/avatar-7.png"
        />
      </div>
      <div className="px-8 mt-16">
        <div className={`text-3xl font-semibold flex justify-between items-center ${window.innerWidth < 768 ? 'mt-16' : 'mt-28'}`}>
          {props.name}{" "}
          <Button color="bright-sun.4" variant="light" fullWidth>
            Message
          </Button>
        </div>
        <div className="text-xl flex items-center gap-1">
          <BriefcaseBusiness className=" h-5 w-5 stroke={1.5}" />
          {props.role} &bull; {props.company}
        </div>
        <div className="flex gap-1 items-center text-mine-shaft-300 text-lg">
          <MapPin className=" h-5 w-5 stroke={1.5}" />
          {props.location}
        </div>
        <Divider my="xl" size="sm" />
        <div className="">
          <div className="text-2xl font-semibold mb-3">About</div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {props.about}
          </div>
        </div>
        <Divider my="xl" size="sm" />
        <div className="">
          <div className="text-2xl font-semibold mb-3">Skills</div>
          <div className="flex gap-2 flex-wrap">
            {props.skills.map((skill: string, index: number) => (
              <div className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 gap-1 text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <Divider my="xl" size="sm" />
        <div className="">
          <div className="text-2xl font-semibold mb-5">Experience</div>
          <div className="flex flex-col gap-8">
          {props.experience?.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
          </div>
        </div>
        <Divider my="xl" size="sm" />
        <div>
          <div className="text-2xl font-semibold mb-5">Certifications</div>
          <div className="flex flex-col gap-8">
          {
            props.certifications?.map((cert:any,index:any)=>
            <CertCard key={index} {...cert}/>)
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
