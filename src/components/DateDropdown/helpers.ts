const getFormattedDate = (dates: Date[], withYear = false) => {
  const formattedDate = dates.map((date) => {
    if (withYear) {
      return date.toLocaleString('ru', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
      });
    }
    return date
      .toLocaleString('ru', {
        day: '2-digit',
        month: 'short',
      })
      .slice(0, -1);
  });

  return formattedDate;
};

export { getFormattedDate };
