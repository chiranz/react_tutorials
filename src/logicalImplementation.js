function unique(array) {
  return array.filter((val, idx, self) => {
    return self.indexOf(val) === idx;
  });
}
