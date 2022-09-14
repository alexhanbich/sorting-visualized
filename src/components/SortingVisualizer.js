import React, { useState, useEffect } from "react";
import './SortingVisualizer.css'
import { bubbleSort } from "../algorithms/BubbleSort";

const ARR_LEN = 100;
const DELAY = 5

export default function SortingVisualizer() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    generateArr();
  }, []);

  function generateArr() {
    let arr = [];
    for (let i = 0; i < ARR_LEN; i++) {
      arr.push(i + 1)
    }
    // randomize
    for (let i = ARR_LEN - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setArr(arr)
  }

  function bubbleSort() {
    let swapOrder = bubbleSort(arr)
  }

  function highlightArrElem(i) {
    
  }

  function animate(swapOrder) {
    swapOrder.forEach((i, j, isSwapped) => {
        setTimeout(() => {
            highlightArrElem(i)
            highlightArrElem(j)
        })
    }, DELAY);
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