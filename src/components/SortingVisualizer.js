import React, { useState, useEffect } from "react";
import './SortingVisualizer.css'
const ARR_LEN = 100;
export default function SortingVisualizer(props) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    generateArr();
  }, []);

  function generateArr() {
    const arr = [];
    for (let i = 0; i < ARR_LEN; i++) {
      arr.push(i + 1)
    }
    // randomize
    for (let i = ARR_LEN - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setArr(arr)
  }

  return (
    <div>
        <div className="arr-container">
            {arr.map((val, index) => (
            <div
                style={{
                height: `${val/ARR_LEN*90}vmin`,
                width: `${80/ARR_LEN}vw`,
                backgroundColor: 'black'
                }}
                key={index}
            ></div>
            ))}
        </div>
        <div className="button-container">
            <button onClick={generateArr}>Shuffle</button>
            <button>Sort 1</button>
            <button>Sort 2</button>
            <button>Sort 3</button>
        </div>
    </div>
  );
}