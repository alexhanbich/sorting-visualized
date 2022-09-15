import React, { useState, useEffect } from "react";
import './SortingVisualizer.css'
import bubbleSortSwapOrder from "../algorithms/BubbleSortSwapOrder";

const ARR_LEN = 10;
const DELAY = 100

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
    const newArr = [...arr]
    let swapOrder = bubbleSortSwapOrder(newArr)
    animate(swapOrder)
  }

  function highlightArrElem(i) {
    
  }

  function animate(swapOrder) {
    let prevArr = [...arr]
    for (let k = 0; k < swapOrder.length; k++) {
      let [i, j, isSwapped] = swapOrder[k]
      setTimeout(() => {
        highlightArrElem(i)
        highlightArrElem(j)
        if (isSwapped) {
          [prevArr[i], prevArr[j]] = [prevArr[j], prevArr[i]];
        }
        console.log(prevArr)
        setArr(prevArr)
        
        console.log('hi')
      }, DELAY*(k+1));
    }
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
            <button onClick={bubbleSort}>Sort 1</button>
            <button>Sort 2</button>
            <button>Sort 3</button>
        </div>
    </div>
  );
}