import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { forgotUser } from "../Services/UsersService";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Notification,rem } from "@mantine/core";
import { Check } from "lucide-react";
import { loginValidation } from "../Services/FormValidation";
const form = {
  email: "",
  password: "",
};
const Forgot = () => {
  const navigate = useNavigate();  
  const [data, setData] = useState<{ [key: string]: string }>(form);
  
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const [time, setTime] = useState(5);
    const [submit, setSubmit] = useState(false);
  
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setFormError({
          ...formError,
          [name]: loginValidation(name, value),
        });
  };
  
  const handleSubmit = () => {
    let valid = true;
        const newFormError: { [key: string]: string } = {};
    
        for (const key in data) {
          newFormError[key] = loginValidation(key, data[key]);
    
          if (newFormError[key]) valid = false;
        }
    
    if (valid) {
      forgotUser(data)
        .then((res) => {
          console.log("Password reset successful:", res);
          setSubmit(true);
          const interval = setInterval(() => {
            setTime((prev) => {
              if (prev <= 1) {
                clearInterval(interval);
                navigate("/login");
                return 5;
              }
              return prev - 1;
            });
          }, 1000);
        })
        .catch((err) => {
          console.error("Password reset failed:", err);
          alert(err.response.data.errorMessage);
        });
    }
      
  };
  

  return (
    <><div className="flex flex-col gap-5 items-center justify-center min-h-screen">
      <div className="border bg-mine-shaft-850 w-[100vh] border-bright-sun-400 rounded-xl p-5 flex flex-col gap-3">
        <div className="text-2xl font-semibold text-center">
          Forgot Password
        </div>
        <TextInput
         error={formError.email}
          value={data.email}
          onChange={handleChange}
          name="email"
          withAsterisk
          leftSection={<AtSignIcon size={20} />}
          label="Your email"
          placeholder="Your email"
        />
        <PasswordInput
          error={formError.password}
          value={data.password}
          onChange={handleChange}
          name="password"
          withAsterisk
          leftSection={<LockKeyholeIcon size={20} />}
          label="New Password"
          placeholder="New Password"
        />
        <Button className="mt-3" onClick={handleSubmit} autoContrast variant="filled">
          Submit
        </Button>
        <div className="text-sm text-bright-sun-400">
          <Link className="cursor-pointer hover:underline" to="/login">
            return to login page
          </Link>
        </div>
      </div>
    </div>
    <Notification
      className={`!border-bright-sun-400 !fixed top-0 left-[35%] z-[1001] -translate-y-20 transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`}
        icon={<Check style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Password Reset Successfully..."
        mt="md"
        withBorder
        withCloseButton={false}
      >
        Redirecting to the Login page in {time} seconds ...
      </Notification></>
  );
}

export default Forgot;
