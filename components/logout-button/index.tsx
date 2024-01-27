"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const LogoutButton: React.FC = () => {
  return (
    <Button variant="link" onClick={() => signOut()}>
      Sign out
    </Button>
  );
};

export default LogoutButton;
