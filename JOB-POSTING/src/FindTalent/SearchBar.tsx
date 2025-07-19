import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { UserCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 50]);
  const [name,setName] = useState('');
  const handleChange= (name:any,event:any)=>{
    if(name=="exp")dispatch(updateFilter({exp:event}));
    else{
      dispatch(updateFilter({name:event.target.value}))
      setName(event.target.value);
    }
  }
  return (
    <div className="flex px-5 py-8 items-center">
        <div className="flex items-center">
            <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><UserCircle size={20}/></div>
            <Input defaultValue={name} onChange={(e)=>handleChange("name",e)}  className="[&_input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name"/>
        </div>
      {searchFields.map((item, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex text-sm justify-between">
          <div>Experience (Year)</div>
          <div>{value[0]} - {value[1]} </div>
        </div>
        <RangeSlider
        onChangeEnd={(e)=>handleChange("exp",e)}
          size="xs"
          color="bright-sun.4"
          value={value}
          max={50}
          min={1}
          minRange={1}
          labelTransitionProps={{
            transition:'skew-down',
            duration: 150,
            timingFunction: 'linear',

          }}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;
