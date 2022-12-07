import React from "react";
import { useRecoilState } from "recoil";
import { nameState } from "../../utils/api/nameAtom";

function Atom() {
  const [name, setName] = useRecoilState(nameState);
  return (
    <input
      data-testid="name_input"
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}

Atom.getLayout = function getLayout(page) {
  return (
    <>
      <div id="container" style={{ padding: "12px" }}>
        <div id="wrapper">{page}</div>
        <Nav />
      </div>
    </>
  );
};

export default Atom;
