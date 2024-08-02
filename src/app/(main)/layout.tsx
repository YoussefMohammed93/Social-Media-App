import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";
import SessionProvider from "./sessionProvider";
import NavBar from "./navBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        {children}
      </div>
    </SessionProvider>
  );
}
