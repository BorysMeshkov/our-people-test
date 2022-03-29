const generateIslandsMap = (): number[][] => {
  const map = [];
  for (let i = 0; i < 5; i += 1) {
    const row = [];
    for (let j = 0; j < 5; j += 1) {
      const item = Math.round(Math.random());
      row.push(item);
    }
    map.push(row);
  }
  return map;
};

export default generateIslandsMap;
