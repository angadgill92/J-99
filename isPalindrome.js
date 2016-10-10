const isPalindrome = (iterable) => {
  let input = iterable
  if (iterable.length <= 1) {
    return true
  } else {
    return (input.shift() === input.pop()) && isPalindrome(input)
  }
}
