# 🤔 Ensure Question solution

```
function ensureQuestion(str) {
  var resultStr = ''

  if(str.endsWith('?')){
    return str
  }else{
    resultStr = str.concat('?')
    return resultStr
  }
}

console.log(ensureQuestion('hey'))
```

# 🔠 Reversed Words solution

```
function reversedWords(arr) {
  const arr1 = arr.reverse()
  return arr1
}

console.log(reversedWords(['1', '2', '3']))
```

# 👧🏽 Smallest Integer In Array solution

```
function smallestInteger(arr) {
  const smallest = Math.min(...arr)
  return smallest
}

console.log(smallestInteger([-6, 1, 3]))
```

# 💻 Odd Or Even solution
```
function oddOrEven(arr) {
  const sum = arr.reduce((previousSum, a) => previousSum + a, 0);

  if(sum % 2 == 0){
    return 'even'
  }else{
    return 'odd'
  }
}

console.log(oddOrEven([6, 3, 3]))
```