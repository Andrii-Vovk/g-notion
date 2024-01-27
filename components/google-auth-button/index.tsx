"use client";

import { BsGoogle } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../ui/button";

const GoogleAuthButton: React.FC = () => {
  const session = useSession();

  return (
    <Button variant="default" className='flex gap-3' onClick={() => signIn("google")}>
      <BsGoogle />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleAuthButton;
