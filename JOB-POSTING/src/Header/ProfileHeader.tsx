import { Menu, Avatar, Switch } from "@mantine/core";
import {
  FileText,
  LogOut,
  MessageCircle,
  Moon,
  MoonStar,
  Sun,
  UserCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={open} onChange={setOpen}>
      <Menu.Target>
        <div className="flex gap-2 items-center cursor-pointer">
          <div>Vaibhav</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=> setOpen(true)}>
        <Link to='/profile'>
        <Menu.Item leftSection={<UserCircle size={14} />}>Profile</Menu.Item>
        </Link>
        <Menu.Item leftSection={<MessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<FileText size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<Moon size={14} />}
          rightSection={
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              size="md"
              color="dark.5"
              onLabel={<Sun size={16} style={{color:"yellow"}} />}
              offLabel={<MoonStar size={16} style={{color:"skyblue"}} />}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" leftSection={<LogOut size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileHeader;
