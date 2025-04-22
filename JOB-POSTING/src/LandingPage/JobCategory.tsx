import { Carousel } from '@mantine/carousel';
import * as Icons from 'lucide-react';
import { ArrowRight as IconArrowRight, ArrowLeft as IconArrowLeft } from 'lucide-react';
import { jobCategories } from '../Data/Data';
const JobCategory = () => {   
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl mb-3 text-center font-semibold text-mine-shaft-100 [&>span]:text-bright-sun-400 ">
        Browse<span> Job</span> Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunnities tailored to your skills and interests.Start your career journey today!
      </div>
      <Carousel slideSize="22%" height="auto" controlsOffset="md" dragFree loop className="focus-visible:[&_button]:outline-none
      [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100 "
      nextControlIcon={<IconArrowRight className="" />}
      previousControlIcon={<IconArrowLeft className="" />}
      >
  {jobCategories.map((category, index) => {
    const Icon = Icons[category.icon as keyof typeof Icons] as React.ElementType;

    return (
      <Carousel.Slide key={index} className="px-2 mx-4">
        <div className="h-full flex flex-col justify-evenly border-2 border-bright-sun-400 rounded-xl p-4 bg-mine-shaft-900 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 transition duration-300 ease-in-out">
          <div className="flex justify-center mb-2">
            {Icon && <Icon size={36} className="text-bright-sun-400" />}
          </div>
          <h3 className="text-center text-lg font-bold text-mine-shaft-100">{category.jobTitle}</h3>
          <p className="text-center text-mine-shaft-300 text-sm mt-1 mb-2">{category.jobDescription}</p>
          <p className="text-center text-bright-sun-400 font-semibold">{category.totalNewJobsPosted} new jobs posted</p>
        </div>
      </Carousel.Slide>
    );
  })}
</Carousel>

    </div>
  );
};

export default JobCategory;
