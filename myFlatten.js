const myFlatten = (iterable) => {
  const flatten = (iterable, flat = []) => {
    if (iterable.length === 0) {
      return flat
    } else {
      return typeof iterable[0] !== 'object'
      ? flatten(iterable.slice(1), flat.concat(iterable[0]))
      : flatten(iterable.slice(1), flat.concat(flatten(iterable[0])))
    }
  }
  return flatten(iterable)
}
