import React, { useEffect, useState } from "react";
import ColorfullMessage from "./conponents/ColorfullMessage";
const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //この処理のレンダリングは最初の一度しか発生しない
  useEffect(() => {
    console.log("useEffect");
  }, []);
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  return (
    <>
      <h1 style={{ color: "red" }}>コピー</h1>
      <p style={contentStyle}>コミュニケーション</p>
      <ColorfullMessage color="blue" message="お元気ですか" />
      <ColorfullMessage color="pink" message="お元気ですか" />
      <button onClick={onClickButton}>追加</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>{"(>_<)" + num}</p>}
    </>
  );
};

export default App;
