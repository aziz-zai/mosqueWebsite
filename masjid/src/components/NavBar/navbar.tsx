import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

type NavBarProps = {
  isSignedIn: boolean;
};
const NavBar: React.FC<NavBarProps> = ({ isSignedIn }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>LOGO</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#">Gebetszeiten</Link>
          </li>
          <li>
            <Link href="#">Veranstaltungen</Link>
          </li>
          <li>
            <Link href="#">News</Link>
          </li>
          <li>
            <Link href="#">Kontakt</Link>
          </li>
        </ul>
        <div className={styles.hamburger}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        {isSignedIn ? (
          <SignOutButton>
            <button className="bg-primary-100 hover:bg-primary-200 w-28 rounded px-4 py-2 font-bold text-white">
              Ausloggen
            </button>
          </SignOutButton>
        ) : (
          <SignInButton>
            <button className="bg-primary-100 hover:bg-primary-200 w-28 rounded px-4 py-2 font-bold text-white">
              Einloggen
            </button>
          </SignInButton>
        )}
      </nav>
      <div className={styles.menubar}>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
