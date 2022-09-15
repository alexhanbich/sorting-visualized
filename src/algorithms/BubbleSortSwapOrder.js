export default function bubbleSortSwapOrder(arr) {
  const swapOrder = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length-i-1); j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            swapOrder.push([j, j+1, true])
        }
        swapOrder.push([j, j+1, false])

    }
  }
  return swapOrder
}