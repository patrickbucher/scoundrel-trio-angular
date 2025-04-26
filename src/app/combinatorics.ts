const nChooseK = <T>(elements: Array<T>, k: number): Array<Array<T>> => {
  const choices: Array<Array<T>> = [];
  const limit: number = Math.pow(2, elements.length);
  for (let i = 0; i < limit; i++) {
    let mask: number = i;
    const positions: Array<number> = [];
    for (let j = 0; j < elements.length; j++) {
      if ((mask & 1) == 1) {
        positions.push(j);
      }
      mask >>= 1;
    }
    if (positions.length == k) {
      const names: Array<T> = [];
      for (let position of positions) {
        names.push(elements[position]);
      }
      choices.push(names);
    }
  }
  return choices;
};
