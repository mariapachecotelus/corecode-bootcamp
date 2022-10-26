# 🤔 Ensure question solution

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