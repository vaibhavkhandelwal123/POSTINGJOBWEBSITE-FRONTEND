import { BriefcaseBusiness, MapPin,  } from "lucide-react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const card=[
    {name:"Location",icon:MapPin,value:"New York",id:"location"},
    {name:"Experience",icon:BriefcaseBusiness,value:"Expert",id:"experience"},
    {name:"Salary",icon:CurrencyRupeeIcon,value:"48 LPA",id:"packageOffered"},
    {name:"Job Type",icon:WorkHistoryIcon,value:"Full Time",id:"jobType"},
]

const skills=['React','JavaScript','Node.js','Express.js','MongoDB','Git','GitHub','RESTful APIs','Spring Boot'];
const desc="<h4>About The Job</h4><p>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p><h4>Responsibilities</h4><ul><li>Design, build, test, and deploy software applications and features</li><li>Carry software products through the software development life cycle (SDLC)</li><li>Write clean, concise, and efficient code</li><li>Manage code documentation and version control</li><li>Troubleshoot and debug software</li><li>Participate in on-call rotation to respond to production issues</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>3+ years of professional experience working on this field</li><li>Bachelor's degree in computer science, software engineering, or related field</li><li>Proficiency in at least one programming language (e.g., Java, C#, C++)</li><li>Back-end development expertise</li><li>Strong problem-solving and communication skills</li><li>Experience with build tools such as Gradle and Maven</li><li>Good working knowledge of the Linux operating system</li></ul>"

export {card, skills, desc};