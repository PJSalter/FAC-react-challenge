import { useState } from "react";

export default function Shouter() {
  const [words, setWords] = useState("");

  function update(e) {
    setWords(e.target.value);
  }
  return (
    <>
      {/* <label htmlFor="theWords">{words}</label> */}
      <input value={words} onChange={update} name="theWords" />
      <output>{words.toUpperCase()}</output>
    </>
  );
}
