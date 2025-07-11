import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../Services/ProfileService";
import { talents } from "../Data/TalentData";

const Talents = () => {
  //  const [talentList, setTalentList] = useState([{}]);
  //  useEffect(()=>{
  //   getAllProfiles().then((res)=>{
  //     console.log("Fetched talents", res);
  //     setTalentList(res);
  //   }).catch((error)=>{
  //     console.log("Failed to fetch talents", error);
  //   });
  //  },[])

  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Recommanded Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-around">
        {
            talents.map((talent, index) => <TalentCard key={index} {...talent} />
       ) }
      </div>
    </div>
  );
};

export default Talents;
