"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  session: Session | null;
}

const ClientSessionProvider: React.FC<Props> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
export default ClientSessionProvider;
