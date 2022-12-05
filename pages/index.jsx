/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

// layout

function Home() {
  const { asPath } = useRouter();
  const { isLoading, error, data, isFetching } = useQuery(
    ["Test_Fetch_Data"],
    () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json()
      )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div id="content">
      <div className="content">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>
        <strong>✨ {data.stargazers_count}</strong>
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div>
      </div>
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
