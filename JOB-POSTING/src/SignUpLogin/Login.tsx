import { Button, PasswordInput, TextInput } from "@mantine/core";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { loginUser } from "../Services/UsersService";
import { useState } from "react";
const form = {
  email: "",
  password: "",
};
const Login = () => {
  const [data, setData] = useState(form);
  const handleChange = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    loginUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Login</div>
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
        label="Password"
        placeholder="Password"
      />
      <Link to="/forgot" className="text-bright-sun-400 text-sm">forgot your password?</Link>

      <Button onClick={handleSubmit} autoContrast variant="filled">
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
