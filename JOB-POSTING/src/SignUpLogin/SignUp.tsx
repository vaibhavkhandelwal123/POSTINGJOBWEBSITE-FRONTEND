import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../Services/UsersService";
const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [data, setData] = useState(form);

  const handleChange = (event: any) => {
    if (typeof event == "string") setData({ ...data, accountType: event });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    registerUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        name="name"
        value={data.name}
        onChange={handleChange}
        withAsterisk
        label="Full Name"
        placeholder="Your full name"
      />
      <TextInput
        name="email"
        onChange={handleChange}
        value={data.email}
        withAsterisk
        leftSection={<AtSignIcon size={20} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput
        name="password"
        onChange={handleChange}
        value={data.password}
        withAsterisk
        leftSection={<LockKeyholeIcon size={20} />}
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        name="confirmPassword"
        onChange={handleChange}
        value={data.confirmPassword}
        withAsterisk
        leftSection={<LockKeyholeIcon size={20} />}
        label="Confirm Password"
        placeholder="Confirm Password"
      />
      <Radio.Group
        name="accountType"
        onChange={handleChange}
        value={data.accountType}
        label="You are?"
        description="This is anonymous"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 py-4 px-6 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 py-4 px-6 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        className="flex items-center [&>*]:items-center"
        autoContrast
        label={
          <span>
            {" "}
            I accept <Anchor>terms & conditions</Anchor>
          </span>
        }
      />
      <Button onClick={handleSubmit} autoContrast variant="filled">
        Sign Up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
