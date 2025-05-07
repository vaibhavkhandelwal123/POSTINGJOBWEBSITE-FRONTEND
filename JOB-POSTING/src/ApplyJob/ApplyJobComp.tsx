import {
  Button,
  Divider,
  FileInput,
  NumberInput,
  Textarea,
  TextInput,
  Notification,
  rem,
  LoadingOverlay,
} from "@mantine/core";
import { ArrowLeft, Check, Paperclip } from "lucide-react";
import { useState } from "react";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [time, setTime] = useState(5);

  
  const handleSubmit = () => {
    setSubmit(true);
    let x= 5;
    setInterval(() => {
      x--;
      setTime(x);
      if (x === 0) {
        window.location.href = "/find-job";
      }
    },1000)
  };
  const handlePreview = () => {
    setPreview((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="w-2/3 mx-auto">
      <LoadingOverlay
      className="!fixed "
      visible={submit}
      zIndex={1000}
      overlayProps={{radius: "sm" ,blur: 2}}
      loaderProps={{ color: "bright-sun.4", type: "bars" }}/>
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
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Full Name"
              withAsterisk
              placeholder="Enter name"
            />
            <TextInput
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Email"
              withAsterisk
              placeholder="Enter email"
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Phone Number"
              withAsterisk
              hideControls
              placeholder="Enter Phone Number"
              min={0}
              max={999999999}
              clampBehavior="strict"
            />
            <TextInput
              className={`${
                preview ? "text-mine-shaft-300 font-semibold" : ""
              }`}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              label="Personal Website"
              withAsterisk
              placeholder="Enter Url"
            />
          </div>
          <FileInput
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            leftSection={<Paperclip />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
          />
          <Textarea
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            withAsterisk
            placeholder="Type something about yourself"
            label="Cover Letter"
            autosize
            minRows={4}
          />
          {!preview && (
            <Button
              onClick={handlePreview}
              leftSection={<ArrowLeft size={20} />}
              color="bright-sun.5"
              variant="light"
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                color="bright-sun.5"
                variant="outline"
                onClick={handlePreview}
              >
                Edit
              </Button>
              <Button
                fullWidth
                color="bright-sun.5"
                variant="light"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
      className={`!border-bright-sun-400 !fixed top-0 left-[35%] z-[1001] -translate-y-20 transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`}
        icon={<Check style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted"
        mt="md"
        withBorder
        withCloseButton={false}
      >
        Redirecting to the Find jobs page in {time} seconds ...
      </Notification>
    </>
  );
};

export default ApplyJobComp;
