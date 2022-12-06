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
      <Link href={"/query"}>
        <p>Query</p>
      </Link>
      <Link href={"/button"}>
        <p>Button</p>
      </Link>
      <Link href={"/infinite"}>
        <p>Infinite</p>
      </Link>
    </NavStyled>
  );
}

export default Nav;
