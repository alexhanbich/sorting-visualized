import React, { useState, useEffect, useRef } from "react";
import './SortingVisualizer.css'
import bubbleSortSwapOrder from "../algorithms/BubbleSortSwapOrder";

const ARR_LEN = 50;
const DELAY = 5;
export default function SortingVisualizer() {
  const [arr, setArr] = useState([]);
  const refContainer = useRef(null);
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
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setArr(arr)
  }

  function bubbleSort() {
    const swapOrder = bubbleSortSwapOrder([...arr])
    animate(swapOrder)
  }

  function highlightArrAccess(i) {
    refContainer.current.children[i].style.backgroundColor = 'red';
    setTimeout(() => {
      refContainer.current.children[i].style.backgroundColor = '';
    }, DELAY);
  }

  function animate(swapOrder) {
    for (let k = 0; k < swapOrder.length; k++) {
      let [i, j, isSwapped] = swapOrder[k]
      setTimeout(() => {
        highlightArrAccess(i)
        highlightArrAccess(j)
        setTimeout(() => {
          setArr(() => {
            if (isSwapped) {
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return [...arr]
          })
        }, DELAY)   
      }, (DELAY*2)*k+1);
    }
      
  }

  return (
    <div>
        <div className="arr-container" ref={refContainer}>
            {arr.map((val, index) => (
            <div 
                className="arr-bar"
                style={{
                  height: `${val/ARR_LEN*90}vmin`,
                  width: `${80/ARR_LEN}vw`
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