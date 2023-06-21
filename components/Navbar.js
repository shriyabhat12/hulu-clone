/** @format */

import { useRouter } from "next/dist/client/router";

function Navbar({ categories }) {
  const router = useRouter();
  const findfirstEle = (e) => {
    const a = e.indexOf(" ");
    if (a > 0) {
      return e.slice(0, parseInt(a) + 1);
    } else {
      return e;
    }
  };
  return (
    <div className="px-6 flex flex-row space-x-10 text-xl font-semibold  text-white overflow-x-scroll scrollbar-hide">
      {categories.genres.map((category) => (
        <p
          key={category.id}
          onClick={() => {
            router.push(`?genre=${category.name}&id=${category.id}`);
          }}
          className="uppercase hover:cursor-pointer hover:text-hoverTextColor">
          {findfirstEle(category.name)}
        </p>
      ))}
    </div>
  );
}
export default Navbar;
