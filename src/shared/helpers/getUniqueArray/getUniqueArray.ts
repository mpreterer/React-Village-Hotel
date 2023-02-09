const getUniqueArray = <T>(items: T[], prop: keyof T): T[] => {
  const filteredArray: T[] = [];

  items.forEach((item) => {
    if (!filteredArray.some((element) => element[prop] === item[prop])) {
      filteredArray.push(item);
    }
  });

  return filteredArray;
};

export { getUniqueArray };
