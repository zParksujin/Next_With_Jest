/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { useRouter } from "next/router";

// layout

function Home() {
  const { asPath } = useRouter();

  return (
    <div id="content">
      <div className="content">Home</div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <div id="wrapper">{page}</div>
      <style jsx global></style>
    </>
  );
};

export const getStaticProps = async (props) => ({
  props: {},
});

export default Home;
