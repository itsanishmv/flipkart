export function removeDuplicate(data, property) {
  const newArr = data?.map((val) => {
    return val[property];
  });
  return [...new Set(newArr)];
}
