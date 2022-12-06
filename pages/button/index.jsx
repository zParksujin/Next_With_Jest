/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import Nav from "@/components/Nav";
import useToggle from "@/hooks/useToggle";

function Button({ initial = false }) {
  const [on, toggle] = useToggle(initial);

  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}

Button.getLayout = function getLayout(page) {
  return (
    <>
      <div id="container" style={{ padding: "12px" }}>
        <div id="wrapper">{page}</div>
        <Nav />
      </div>
    </>
  );
};

export const getStaticProps = async (props) => ({
  props: {},
});

export default Button;
