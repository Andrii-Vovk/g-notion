import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge";
import GoogleAuthButton from "../google-auth-button";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav
      className={twMerge(
        "w-full px-7 py-5 bg-background border-b-[1px]",
        "border-b-border/20 border-solid flex justify-between"
      )}
    >
      {session && <GoogleAuthButton />}
    </nav>
  );
};

export default Header;
