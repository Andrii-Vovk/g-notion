"use client";

import { signOut } from "next-auth/react";

const LogoutButton: React.FC = () => {
  return (
    <button onClick={() => signOut()}>
      <span>Sign out</span>
    </button>
  );
};

export default LogoutButton;
