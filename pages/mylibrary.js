/** @format */
import { useRouter } from "next/dist/client/router";

function mylibrary() {
  const router = useRouter();
  return (
    <div className="bg-backgroundColor w-screen h-screen">
      <p className="text-white font-bold text-4xl text-center pt-56">
        😞 No saved movie / show
      </p>
      <p
        className="text-white font-bold text-2xl text-center mt-4 hover:cursor-pointer hover:text-red-600"
        onClick={() => {
          router.push("/");
        }}>
        Go to Home →
      </p>
    </div>
  );
}

export default mylibrary;
