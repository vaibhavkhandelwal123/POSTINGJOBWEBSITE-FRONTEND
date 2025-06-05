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
import { SignUpValidation } from "../Services/FormValidation";

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
  const [data, setData] = useState(initialForm);
  const [formError, setFormError] = useState<{ [key: string]: string }>(blankError);
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
        })
        .catch((err) => {
          console.error("Registration failed:", err);
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
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
