import React, { useState, useEffect } from "react";

export default function SortingVisualizer(props) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    generateArr(10);
  }, []);

  function generateArr(arrLen) {
    const arr = [];
    for (let i = 0; i < arrLen; i++) {
      arr.push(i)
    }
    // randomize
    for (let i = arrLen - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setArr(arr)
    console.log(arr)
  }

  return (
    <ul>
      {arr.map(i => {
        return <li>{i}</li>;
      })}
    </ul>
  );
}