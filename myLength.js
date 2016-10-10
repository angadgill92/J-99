const myLength = (iterable) => {
  const findLength = (iterable, len = 0) => {
    if (iterable.toString() === '') {
      return len
    } else {
      return findLength(iterable.slice(1), ++len)
    }
  }
  return findLength(iterable)
}
