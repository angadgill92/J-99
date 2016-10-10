const elementAt = (iterable, index) => {
  /* Takes an iterable and returns it's k'th  element */
  if (iterable.length === 0) {
    return null
  } else if (index === 0) {
    return iterable[0]
  } return elementAt(iterable.slice(1), --index)
}
