/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
// import { unstable_getServerSession } from "next-auth/next";
// import { authOptions } from "./api/auth/[...nextauth]";
import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      <p>Home</p>
      <button type="button" onClick={signIn}>
        Sign In
      </button>
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
      {session && (
        <>
          <div>Auth Name: {session?.user.name}</div>
          <div>Auth Status: {status}</div>
          <div>Auth Expires: {session.expires}</div>
        </>
      )}
    </div>
  );
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

export async function getStaticProps({ req, res }) {
  // const session = await unstable_getServerSession(req, res, authOptions);
  // console.log(session);
  return {
    props: {
      // session,?
    },
  };
}
export default Home;
