# 🤔 Ensure question solution

```
function question(str) {
  var result = false

  if(str.endsWith('?')){
    result = true
  }

  return result
}

console.log(question('hey?'))
```