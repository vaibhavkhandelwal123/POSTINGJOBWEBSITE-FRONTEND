import { ActionIcon, Button, Divider } from "@mantine/core";
import { Bookmark, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DomPurify from "dompurify";
const JobDesc = () => {
  const description = DomPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14" src={`/Logos/Google.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-2xl ">
              Software Developer |||
            </div>
            <div className="text-lg">
              Google &#x2022; 3 days ago &#x2022; 120 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="bright-sun.5" variant="light">
              Apply
            </Button>
          </Link>

          <Bookmark size={20} className="text-bright-sun-400 cursor-pointer" />
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item, index) => (
          <div className="flex flex-col gap-1 items-center" key={index}>
            <ActionIcon
              color="bright-sun.4"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" fontSize="large" />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex gap-2 flex-wrap">
          {skills.map((item, index) => (
            <ActionIcon
              key={index}
              color="bright-sun.4"
              className="!h-fit !w-fit !text-sm font-medium "
              variant="light"
              p="xs"
              radius="xl"
              aria-label="Settings"
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div>
          <div className="flex justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-3 bg-mine-shaft-800 rounded-xl">
                <img className="h-8" src={`/Logos/Google.png`} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="font-medium text-lg">Google</div>
                <div className=" text-mine-shaft-300">10k+ Employees</div>
              </div>
            </div>
              <Link to="">
                <Button color="bright-sun.5" variant="light">
                  Company Page
                </Button>
              </Link>
            </div>
            <div className="text-mine-shaft-300 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi est dicta eos ratione sint rem, cumque molestias numquam qui mollitia quas dolorem enim hic repellendus necessitatibus! Dolor blanditiis repellat maiores nemo, accusantium illo mollitia? Eius incidunt reprehenderit officiis sed velit!
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
