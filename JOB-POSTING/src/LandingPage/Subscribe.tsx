import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
      <div className="text-4xl w-2/5 mb-3 text-center font-semibold text-mine-shaft-100 [&>span]:text-bright-sun-400 ">
        Never Wants to Miss Any<span> Job News?</span>
      </div>
      <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center mr-4">
        <TextInput
          className="[&_input]:text-mine-shaft-100 font-semibold"
          variant="unstyled"
          placeholder="Your@email.com"
          size="xl"
        />
        <Button size='lg' color="#FFD800" variant="filled">Subscribe</Button>
      </div>
    </div>
  );
};

export default Subscribe;
