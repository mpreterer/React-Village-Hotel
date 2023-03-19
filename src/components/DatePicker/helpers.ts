type ReservedDates<T> = {
  from: T;
  to: T;
}[];

const filterReservedDates = (reservedDates: ReservedDates<string>) => {
  const currentDate = new Date();

  return reservedDates.filter((dates) => {
    const { to } = dates;

    const toDate = new Date(to.split('.').reverse().join('.'));

    return currentDate < toDate;
  });
};

const getCorrectReservedDates = (
  reservedDates: ReservedDates<string>
): ReservedDates<Date> =>
  filterReservedDates(reservedDates)
    .map((dates) => {
      const from = new Date(dates.from.split('.').reverse().join('.'));
      const to = new Date(dates.to.split('.').reverse().join('.'));

      return { from, to };
    })
    .sort((currDates, nextDates) => {
      return currDates.from < nextDates.from ? -1 : 1;
    });

export { getCorrectReservedDates };
