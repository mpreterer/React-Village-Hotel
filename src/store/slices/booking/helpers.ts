const getDateFromString = (dateString: string) =>
  new Date(dateString.split('.').reverse().join('.'));

const sortDates = (datesArray: [from: Date, to: Date][]) =>
  datesArray.sort((a, b) => (a[0] > b[0] ? 1 : -1));

export { getDateFromString, sortDates };
