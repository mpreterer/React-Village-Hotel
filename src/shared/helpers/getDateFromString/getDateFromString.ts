const getDateFromString = (dateString: string) =>
  new Date(dateString.split('.').reverse().join());

export { getDateFromString };
