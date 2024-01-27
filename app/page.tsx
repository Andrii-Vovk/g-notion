import CalendarsGet from "@/components/calendars-get";
import GoogleAuthButton from "@/components/google-auth-button";
import LogoutButton from "@/components/logout-button";

export default function Home() {
  return (
    <div>
      <GoogleAuthButton />
      <LogoutButton />
      <CalendarsGet />
    </div>
  );
}
