import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex h-14 justify-between border-b border-zinc-200 px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/next.svg" alt="" width={89} height={18} />
      </Link>

      <nav className="flex item-center gap-4 text-sm my-auto font-extrabold text-zinc-600">
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <Link href="/posts" className="hover:text-zinc-950">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
