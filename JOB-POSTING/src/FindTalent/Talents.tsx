import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import { getAllProfiles } from "../Services/ProfileService";
import NewTalentCard from "./NewTalentCard";
import { useSelector } from "react-redux";

const Talents = () => {
  const user = useSelector((state:any)=>state.user);
   const [talentList, setTalentList] = useState([{}]);
   useEffect(()=>{
    getAllProfiles().then((res)=>{
      console.log("Fetched talents", res);
      setTalentList(res);
    }).catch((error)=>{
      console.log("Failed to fetch talents", error);
    });
   },[])

  return (
    <div className="p-5 ">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Recommanded Profiles</div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-around">
        {talentList.map((profile:any, index:number) => profile.id!=user.id && <NewTalentCard key={index} {...profile}/>)}
      </div>
    </div>
  );
};

export default Talents;
