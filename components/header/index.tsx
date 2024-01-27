import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge";
import GoogleAuthButton from "../google-auth-button";
import LogoutButton from "../logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = async () => {
  const session = await getServerSession(authOptions);

  const avatarBlock = session?.user?.image && (
    <div className="flex gap-3 items-center">
      <Avatar>
        <AvatarImage src={session.user.image} alt="avatar" />
        <AvatarFallback>{session.user.name?.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="small">{session.user.name}</span>
        <span className="small muted">{session.user.email}</span>
      </div>
    </div>
  );

  const authedBlock = session && (
    <div className="flex items-center gap-6">
      {avatarBlock} <LogoutButton />
    </div>
  );

  return (
    <nav
      className={twMerge(
        "sticky top-0 h-20 w-full px-7 py-5 bg-background backdrop-blur-3xl border-b-[1px]",
        "border-b-border border-solid flex justify-between items-center"
      )}
    >
      <span className="h2">G-notion</span>
      {!session && <GoogleAuthButton />}
      {session && authedBlock}
    </nav>
  );
};

export default Header;
