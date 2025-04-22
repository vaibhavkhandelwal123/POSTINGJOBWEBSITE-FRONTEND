import{ Search, MapPin, BriefcaseBusiness,BookCheckIcon } from "lucide-react";
const dropdownData = [
    {title:"Job Title", icon:Search,options:['Developer','Designer','Manager','Analyst','Architect','Consultant','Coordinator','Director','Officer','Specialist','Administrator']},
    {title:"Location", icon:MapPin,options:['New York','Los Angeles','Chicago','Houston','Delhi','Philadelphia','San Antonio','San Diego','Dallas','San Jose']},
    {title:"Experience", icon:BriefcaseBusiness,options:['Entry Level','Intermediate','Expert']},
    {title:"Job Type", icon:BookCheckIcon,options:['Full Time','Part Time','Contract','Freelance','Internship']}
]

export {dropdownData};