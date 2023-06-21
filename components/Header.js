/** @format */

import {
  CheckCircleIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-6 py-1 xs:flex-col-reverse ">
      <div className="flex flex-row items-center space-x-10 ml-3 xs:mt-1 xs:space-x-4">
        <HeaderIcon title="Home" Icon={HomeIcon} page="home" />
        <HeaderIcon title="Shows" Icon={LightningBoltIcon} />
        <HeaderIcon title="Verified" Icon={CheckCircleIcon} />
        <HeaderIcon title="My Library" Icon={CollectionIcon} page="lib" />
        <HeaderIcon title="Search" Icon={SearchIcon} page="search" />
        <HeaderIcon title="Profile" Icon={UserIcon} page="profile" />
      </div>
      <img
        src="https://i.ibb.co/0ncvR3b/logo.png"
        alt=""
        height="150"
        width="150"
      />
    </div>
  );
}

export default Header;
