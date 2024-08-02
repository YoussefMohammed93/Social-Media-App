import SearchField from "@/components/searchField";
import UserButton from "@/components/userBtn";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 shadow bg-card">
      <div className="flex items-center justify-center flex-wrap gap-5 mx-auto py-3 px-5 max-w-7xl">
        <Link href="/" className="text-3xl font-bold text-primary pb-1">
          Matbook
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
