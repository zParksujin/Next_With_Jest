/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Nav from "@/components/Nav";
function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page) {
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

export default Home;
