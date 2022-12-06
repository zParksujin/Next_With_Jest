import Nav from "@/components/Nav";
import React from "react";
import { useQuery } from "react-query";

function Query() {
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

Query.getLayout = function getLayout(page) {
  return (
    <>
      <div id="container" style={{ padding: "12px" }}>
        <div id="wrapper">{page}</div>
        <Nav />
      </div>
    </>
  );
};

export default Query;
