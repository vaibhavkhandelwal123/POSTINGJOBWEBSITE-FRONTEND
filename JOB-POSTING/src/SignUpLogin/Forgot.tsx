import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useState } from "react";
import { forgotUser } from "../Services/UsersService";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";
const form = {
  email: "",
  password: "",
};
const Forgot = () => {
  const [data, setData] = useState(form);
  const handleChange = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    forgotUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="border bg-mine-shaft-850 mx-80 my-40 border-bright-sun-400 rounded-xl p-5 flex flex-col gap-3">
        <div className="text-2xl font-semibold text-center">
          Forgot Password
        </div>
        <TextInput
          value={data.email}
          onChange={handleChange}
          name="email"
          withAsterisk
          leftSection={<AtSignIcon size={20} />}
          label="Your email"
          placeholder="Your email"
        />
        <PasswordInput
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
          <Link to="/login">return to login page </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
