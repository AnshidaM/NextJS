import Link from "next/link";
import React from "react";
import logoImg from "@assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg}
            alt="A plate with food on it"
            width={1024}
            height={1024}
            priority
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> Browse Meals</NavLink>
            </li>
            <li>
              {/* here there is no nested path .hence does direct check like path=== */}
              {/* <Link
                href="/community"
                className={path === "/community" ? classes.active : undefined}
              >
                Community
              </Link> */}
              <NavLink href="/community"> Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
