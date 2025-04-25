import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = () => {
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
