import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpImg from "@/assets/signup-image.jpg";
import SignUpForm from "./signUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center h-screen p-5">
      <div
        className="flex w-full h-full max-w-[64rem] max-h-[34rem] overflow-hidden rounded-xl shadow-xl bg-card"
        style={{ border: "1px solid #e2e8f0" }}
      >
        <div className="w-full md:w-1/2 space-y-10 overflow-y-auto p-5">
          <div className="text-center space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Sign Up To Matrix App
            </h1>
            <p className="text-muted-foreground pt-3">
              A place where even <span className="italic">you</span> can find a
              friend.
            </p>
          </div>
          <div>
            <SignUpForm />
            <Link
              href="/login"
              className="block text-center hover:underline mt-8"
            >
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
