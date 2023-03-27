const hasBookingDateExpired = (date: string) => {
  const parts = date.split('.');
  const convertedDate = new Date(
    Number(parts[2]),
    Number(parts[1]) - 1,
    Number(parts[0])
  );

  return new Date() > convertedDate;
};

export { hasBookingDateExpired };
