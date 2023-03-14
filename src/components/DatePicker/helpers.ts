const getCorrectReservedDates = (
  reservedDates: {
    from: string;
    to: string;
  }[]
): number[] =>
  reservedDates
    .map((dates) => {
      const { from, to } = dates;
      const fromDate = new Date(from.split('.').reverse().join('.'));
      const toDate = new Date(to.split('.').reverse().join('.'));

      const fromDateDay = fromDate.getDate();
      const fromDateMonth = fromDate.getMonth();
      const fromDateYear = fromDate.getFullYear();

      const range = new Date(toDate.getTime() - fromDate.getTime()).getDate();

      const correctDatesInMs = [];

      if (range === 2) {
        for (let i = 0; i < range; i += 1) {
          const date = new Date(fromDateYear, fromDateMonth, fromDateDay + i);
          correctDatesInMs.push(date.getTime());
        }
      }

      if (range > 2) {
        for (let i = 1; i < range - 1; i += 1) {
          const date = new Date(fromDateYear, fromDateMonth, fromDateDay + i);
          correctDatesInMs.push(date.getTime());
        }
      }

      return correctDatesInMs;
    })
    .flat();

export { getCorrectReservedDates };
