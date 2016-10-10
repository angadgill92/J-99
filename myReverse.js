const myReverse = (iterable) => {
  if (iterable.length === 0) {
    return iterable
  } else {
    return (typeof iterable === 'string')
      ? myReverse(iterable.slice(1)) + iterable[0]
      : myReverse(iterable.slice(1)).concat(iterable[0])
  }
}
