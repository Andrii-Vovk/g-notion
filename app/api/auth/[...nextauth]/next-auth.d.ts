// for it to be recognized by typescript as an extension of next-auth
import _NextAuth from "next-auth";

type AuthError = "refresh-token";

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
}
