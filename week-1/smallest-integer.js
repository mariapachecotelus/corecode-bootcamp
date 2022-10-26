function smallestInteger(arr) {
  const smallest = Math.min(...arr)
  return smallest
}

console.log(smallestInteger([-6, 1, 3]))