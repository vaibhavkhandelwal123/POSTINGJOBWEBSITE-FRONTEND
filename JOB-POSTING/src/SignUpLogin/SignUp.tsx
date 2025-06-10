import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { AtSignIcon, Check, LockKeyholeIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UsersService";
import { SignUpValidation } from "../Services/FormValidation";
import { Notifications } from "@mantine/notifications";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const blankError = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "",
};
const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialForm);
  const [formError, setFormError] = useState<{ [key: string]: string }>(
    blankError
  );
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (event: any) => {
    if (typeof event === "string") {
      setData({ ...data, accountType: event });
      return;
    }

    const { name, value } = event.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);

    const error = SignUpValidation(name, value);
    const confirmPasswordError =
      name === "password" || name === "confirmPassword"
        ? updatedData.password !== updatedData.confirmPassword
          ? "Passwords do not match"
          : ""
        : formError.confirmPassword;

    setFormError({
      ...formError,
      [name]: error,
      confirmPassword: confirmPasswordError,
    });
  };

  const handleSubmit = () => {
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    let valid = true;
    const newFormError: { [key: string]: string } = {};

    for (const key in data) {
      if (key === "accountType") continue;

      if (key !== "confirmPassword") {
        newFormError[key] = SignUpValidation(key, data[key]);
      } else if (data[key] !== data.password) {
        newFormError[key] = "Passwords do not match";
      }

      if (newFormError[key]) valid = false;
    }

    setFormError(newFormError);

    if (valid) {
      registerUser(data)
        .then((res) => {
          console.log("Registration successful:", res);
          setData(initialForm);
          Notifications.show({
            title: "Registrated successful",
            message: "Redirecting to Login Page...",
            withCloseButton: true,
            withBorder: true,
            color: "teal",
            className: "!border-green-500",
            icon: <Check size={25} />,
          })
          setTimeout(() => {
           navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          console.error("Registration failed:", err);
          Notifications.show({
            title: "Registration failed",
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
      <div className="text-2xl font-semibold">Create Account</div>

      <TextInput
        error={formError.name}
        name="name"
        value={data.name}
        onChange={handleChange}
        withAsterisk
        label="Full Name"
        placeholder="Your full name"
      />

      <TextInput
        error={formError.email}
        name="email"
        onChange={handleChange}
        value={data.email}
        withAsterisk
        leftSection={<AtSignIcon size={20} />}
        label="Your email"
        placeholder="Your email"
      />

      <PasswordInput
        error={formError.password}
        name="password"
        onChange={handleChange}
        value={data.password}
        withAsterisk
        leftSection={<LockKeyholeIcon size={20} />}
        label="Password"
        placeholder="Password"
      />

      <PasswordInput
        error={formError.confirmPassword}
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
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 py-4 px-6 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>

      <Checkbox
        checked={termsAccepted}
        onChange={(e) => setTermsAccepted(e.currentTarget.checked)}
        label={
          <span>
            I accept <Anchor>terms & conditions</Anchor>
          </span>
        }
      />

      <Button onClick={handleSubmit} autoContrast variant="filled">
        Sign Up
      </Button>

      <div className="mx-auto">
        Have an account?{" "}
        <span onClick={() => { navigate("/login"); setFormError(initialForm); setData(initialForm);}} className="text-bright-sun-400 hover:underline cursor-pointer">
          Login
        </span>
      </div>
    </div>
  );
};

export default SignUp;
