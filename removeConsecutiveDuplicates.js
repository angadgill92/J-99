const remDuplicates = (iterable) => {
  if (iterable.length <= 1) {
    return iterable
  } else {
    return iterable[0] === iterable[1] ? (remDuplicates(iterable.slice(1)))
    : [iterable[0]].concat(remDuplicates(iterable.slice(1)))
  }
}
