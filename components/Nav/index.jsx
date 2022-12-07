import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavStyled = styled.div``;

function Nav() {
  return (
    <NavStyled>
      <Link href={"/"}>
        <p>Home</p>
      </Link>
      <Link href={"/button"}>
        <p>Render</p>
      </Link>
      <Link href={"/query"}>
        <p>React-Query</p>
      </Link>
      <Link href={"/infinite"}>
        <p>Infinite-Query</p>
      </Link>
      <Link href={"/atom"}>
        <p>Atom</p>
      </Link>
    </NavStyled>
  );
}

export default Nav;
