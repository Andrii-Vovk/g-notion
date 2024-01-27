"use client";

import { BsGoogle } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";

const GoogleAuthButton: React.FC = () => {
  const session = useSession();

  return (
    <button onClick={() => signIn("google")}>
      <BsGoogle />
      <span>Sign in with Google</span>

      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </button>
  );
};

export default GoogleAuthButton;
