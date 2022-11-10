import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = ({ toggleNav }) => {
  const router = useRouter();
  return (
    <>
      <li>
        <Link
          onClick={toggleNav}
          className={
            router.pathname == "/"
              ? "active"
              : "" + " hover:opacity-70 duration-150 transition-all"
          }
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={toggleNav}
          className={
            router.pathname == "/about"
              ? "active"
              : "" + " hover:opacity-70 duration-150 transition-all"
          }
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          onClick={toggleNav}
          className={
            router.pathname == "/portfolio"
              ? "active"
              : "" + " hover:opacity-70 duration-150 transition-all"
          }
          href="/portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          onClick={toggleNav}
          className={
            router.pathname == "/blog"
              ? "active"
              : "" + " hover:opacity-70 duration-150 transition-all"
          }
          href="/blog"
        >
          Blog
        </Link>
      </li>
    </>
  );
};
export default NavLinks;
