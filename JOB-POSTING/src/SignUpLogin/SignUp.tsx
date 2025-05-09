import { Anchor,Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Your full name" />
      <TextInput
        withAsterisk
        leftSection={<AtSignIcon size={20} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput withAsterisk leftSection={<LockKeyholeIcon size={20}/>} label="Password" placeholder="Password" />
      <PasswordInput withAsterisk leftSection={<LockKeyholeIcon size={20}/>} label="Confirm Password" placeholder="Confirm Password" />
      
      <Checkbox
      className="flex items-center [&>*]:items-center"
      autoContrast
      label={<span> I accept{' '}<Anchor>terms & conditions</Anchor></span>}/>
    <Button autoContrast variant="filled">Sign Up</Button>
    <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link></div>
    </div>
  );
};

export default SignUp;
