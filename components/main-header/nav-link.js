"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./nav-link.module.css";

const NavLink = ({ href, childern }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.Link} ${classes.active}`
          : classes.link
      }
    >
      {childern}
    </Link>
  );
};

export default NavLink;
