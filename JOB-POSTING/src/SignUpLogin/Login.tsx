import { Button, PasswordInput, TextInput } from "@mantine/core";
import { AtSignIcon, Check, LockKeyholeIcon, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UsersService";
import { useState } from "react";
import { Notifications } from "@mantine/notifications";
import { loginValidation } from "../Services/FormValidation";
const form = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const handleChange = (event: any) => {
     const { name, value } = event.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    const error = loginValidation(name, value);
    setFormError({
      ...formError,
      [name]: error,
    });
  };
  
  const handleSubmit = () => {
    let valid = true;
    const newFormError: { [key: string]: string } = {};

    for (const key in data) {
      newFormError[key] = loginValidation(key, data[key]);

      if (newFormError[key]) valid = false;
    }
    if(valid){
      loginUser(data)
      .then((res) => {
        console.log("Login successful:", res);
        Notifications.show({
          title: "Login successful",
          message: "Redirecting to Home Page...",
          withCloseButton: true,
          withBorder: true,
          color: "teal",
          className: "!border-green-500",
          icon: <Check size={25} />,
        });
        setTimeout(() => {
          navigate("/home");
        }, 4000);
      })
      .catch((err) => {
        console.error("Login failed:", err);
        Notifications.show({
          title: "Login failed",
          message: err.response.data.errorMessage,
          withCloseButton: true,
          withBorder: true,
          color: "red",
          className: "!border-red-500",
          icon: <X size={25} />,
        });
      });
    }
  };
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Login</div>
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
        label="Password"
        placeholder="Password"
      />
      <Link to="/forgot" className="text-bright-sun-400 text-sm">
        forgot your password?
      </Link>

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
