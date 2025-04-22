import { Avatar, Rating } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { ArrowRight as IconArrowRight, ArrowLeft as IconArrowLeft } from 'lucide-react';
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl mb-3 text-center font-semibold text-mine-shaft-100 [&>span]:text-bright-sun-400 ">
        What<span> User </span>says about us
      </div>
      <Carousel 
        slideSize="22%" 
        height="auto" 
        controlsOffset="md" 
        dragFree 
        loop
        
        className="focus-visible:[&_button]:outline-none
        [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        nextControlIcon={<IconArrowRight className="" />}
        previousControlIcon={<IconArrowLeft className="" />}
      >
        {
          testimonials.map((testimonial, index) => (
            <Carousel.Slide 
              key={index} 
              className="border border-bright-sun-400 rounded-lg px-2 mx-4 my-10 hover:scale-105"
            >
              <div className="flex gap-2 items-center rounded-lg p-4 hover:shadow-lg">
                <Avatar className="!h-14 !w-14" src="/avatar-9.png" alt="User"/>
                <div>
                  <div className="text-lg text-mine-shaft-100 font-semibold">{testimonial.name}</div>
                  <Rating value={testimonial.rating} fractions={2} readOnly />
                </div>
              </div>
              <div className="text-xs mx-auto mb-2 text-mine-shaft-300 w-[80%] mt-2">
                {testimonial.review}
              </div>
            </Carousel.Slide>
          ))
        }
      </Carousel>
    </div>
  );
};

export default Testimonials;
