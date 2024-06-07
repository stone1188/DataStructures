let s = '}({[)]'
let a = '([{}])'
function sortBrackets(s) {
     const hashMap = { '(': ')', '{':'}', '[':']'}
     const stack = []
     for ( let ch of s ) {
        if(hashMap[ch]) {
            stack.push(hashMap[ch])
        } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
            stack.pop()
        } else {
            return false;
        }
     }
     return stack.length === 0;
}

console.log( 'test s: ' + sortBrackets(s))
console.log( 'test a: ' + sortBrackets(a));





