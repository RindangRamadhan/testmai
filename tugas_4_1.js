is_palindrom = (string) => {
  return string.toLowerCase() == string.toLowerCase().split('').reverse().join('')
}

console.log(is_palindrom("level")) // true
console.log(is_palindrom("halo")) // false
console.log(is_palindrom("taat")) // true
console.log(is_palindrom("Kasur Rusak")) // true