import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SignOutButton } from "./sign-out-button";
import { SignInForm } from "./auth/sign-in-form";
import { RegisterForm } from "./auth/register-form";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <nav className="flex items-center justify-between p-5">
      <div>
        <h1>MovieShop</h1>
      </div>
      <div className="flex gap-2">
        {session ? (
          <SignOutButton />
        ) : (
          <>
            <SignInForm />
            <RegisterForm />
          </>
        )}
      </div>
    </nav>
  );
}
