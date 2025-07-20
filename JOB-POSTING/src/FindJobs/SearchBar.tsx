import MultiInput from "./MultiInput";
import { dropdownData } from "../Data/JobData";
import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../Slices/FilterSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 300]);
  const handleChange= (event:any)=>{
    dispatch(updateFilter({salary:event}));
  
  }
  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
        <>
          <div key={index} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
        <div className="flex text-sm justify-between">
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA-&#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider
        onChangeEnd={handleChange}
          size="xs"
          color="bright-sun.4"
          value={value}
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
