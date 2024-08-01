import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpImg from "@/assets/signup-image.jpg";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen p-5">
      <div className="flex w-full h-full max-w-[64rem] max-h-[32rem] overflow-hidden rounded-xl shadow-xl bg-card">
        <div className="w-full md:w-1/2 space-y-10 overflow-y-auto p-5">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold">Sign Up To Matrix App</h1>
            <p className="text-muted-foreground pt-3">
              A place where even <span className="italic">you</span> can find a
              friend.
            </p>
          </div>
          <div>
            <div className="text-center bg-blue-500">Sign Up Form Here!</div>
            <Link href="/login" className="block text-center hover:underline">
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src={SignUpImg}
          alt="Sign Up"
          className="hidden md:block w-1/2 object-cover"
        />
      </div>
    </main>
  );
}
