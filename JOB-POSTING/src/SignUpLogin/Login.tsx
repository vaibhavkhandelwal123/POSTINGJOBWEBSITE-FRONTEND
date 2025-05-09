import { Button, PasswordInput, TextInput } from "@mantine/core";
import { AtSignIcon, LockKeyholeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
         <div className="text-2xl font-semibold">Login</div>
         <TextInput
           withAsterisk
           leftSection={<AtSignIcon size={20} />}
           label="Your email"
           placeholder="Your email"
         />
         <PasswordInput withAsterisk leftSection={<LockKeyholeIcon size={20}/>} label="Password" placeholder="Password" />

       <Button autoContrast variant="filled">Login</Button>
       <div className="mx-auto">Don't have an account? <Link to="/signup" className="text-bright-sun-400 hover:underline">SignUp</Link></div>
       </div>
  )
}

export default Login