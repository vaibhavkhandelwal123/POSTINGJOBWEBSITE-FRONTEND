import { useState } from "react";
import { LucideSettings2 } from "lucide-react";

const opt = [
  "Relavance",
  "Most Recent",
  "Experience: Low to High",
  "Experience: High to Low",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Relavance");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev); 
  }

  const handleClose = () => {
    setOpen(false); 
  } 

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setOpen(false); 
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="flex justify-between items-center border border-bright-sun-400 px-4 py-2 rounded-xl font-['poppins'] bg-mine-shaft-950 hover:bg-mine-shaft-800 cursor-pointer"
      >
        <div className="flex text-sm items-center gap-2">
          {selectedItem} <LucideSettings2 size={20} className="text-bright-sun-400" />
        </div>
      </div>
      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-0"
        ></div>
      )}
      {open && (
        <div className="absolute top-full mt-2 w-full bg-mine-shaft-850 border border-bright-sun-400 rounded-lg shadow-lg z-10">
          {opt.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="px-4 text-xs py-2 hover:bg-mine-shaft-700 cursor-pointer text-mine-shaft-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;