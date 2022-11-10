// icons
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { BsSun, BsMoonStars } from "react-icons/bs";
// packages
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// components
import NavLinks from "./NavLinks";
// images
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo-dark.png";
// custom hook
import useDarkMode from "../../hooks/useDarkMode";
import Button from "./Button";

const MobileNav = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (typeof document !== undefined) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isOpen]);

  return (
    <nav className="laptop:hidden">
      <div className="flex items-center space-x-6">
        <button
          className="text-3x text-light-heading dark:text-dark-heading text-3xl"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <BsMoonStars /> : <BsSun />}
        </button>
        <button className="hidden tablet:block btn ">
          <Link href="/contact">Contact Me</Link>
        </button>
        <button className="text-3xl" onClick={toggleNav}>
          <RiMenu3Fill />
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "!z-20 !flex" : "hidden"
        } transition-all duration-200  flex-col justify-center items-center fixed h-screen left-0 top-0 w-full dark:bg-[#222336]  bg-light-soft space-y-10 text-3xl dark:text-dark-heading text-light-text`}
      >
        <li className="absolute top-0 right-0 m-6 text-4xl cursor-pointer">
          <CgClose onClick={toggleNav} />
        </li>
        <NavLinks toggleNav={toggleNav} />
        <li>
          <Link
            className={router.pathname == "/contact" ? "active" : ""}
            href="/contact"
            onClick={toggleNav}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const DesktopNav = ({ theme, toggleTheme }) => {
  return (
    <nav className="hidden laptop:flex w-2/3 justify-between items-center">
      <ul className="flex gap-6">
        <NavLinks />
      </ul>

      <div className="flex items-center space-x-6">
        <button
          className="text-3x text-light-heading dark:text-dark-heading text-3xl"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <BsMoonStars /> : <BsSun />}
        </button>
        <Button href="/contact" text="Contact Me" />
      </div>
    </nav>
  );
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  function toggleTheme() {
    console.log(colorTheme);
    if (colorTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex w-full absolute z-10 top-0 left-1/2 -translate-x-1/2 justify-between p-4 items-center wrapper">
      <div>
        <Link href="/" className="w-32 laptop:w-36 block">
          {colorTheme === "light" ? (
            <Image src={logo} alt="cmarghin logo" placeholder="blur" />
          ) : (
            <Image src={logoDark} alt="cmarghin logo" placeholder="blur" />
          )}
        </Link>
      </div>

      <MobileNav toggleTheme={toggleTheme} theme={colorTheme} />
      <DesktopNav toggleTheme={toggleTheme} theme={colorTheme} />
    </header>
  );
};
export default Header;
