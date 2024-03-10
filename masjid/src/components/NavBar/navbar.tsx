import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
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
            <a href="#">Gebetszeiten</a>
          </li>
          <li>
            <a href="#">Veranstaltungen</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
