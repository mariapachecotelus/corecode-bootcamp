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

console.log(smallestInteger(['-6', '1', '3']))
```