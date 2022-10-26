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