/** @format */

import { useRouter } from "next/dist/client/router";

function HeaderIcon({ title, Icon, page }) {
  const router = useRouter();
  return (
    <div
      className="group flex flex-col items-center  text-white hover:cursor-pointer hover:text-hoverTextColor"
      onClick={() => {
        if (page === "home") {
          router.push("/");
        } else if (page === "lib") {
          router.push("/mylibrary");
        }
      }}>
      <Icon className="h-6 w-6 mb-1 group-hover:animate-bounce" />
      <p className="hidden group-hover:inline-flex tracking-wider sm:tracking-normal xs:tracking-tight sm:text-base xs:text-xs xs:inline-flex ">
        {title}
      </p>
    </div>
  );
}

export default HeaderIcon;
