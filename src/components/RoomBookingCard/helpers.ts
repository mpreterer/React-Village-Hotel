function convertDate(dateString: { from: string; to: string }) {
  const parts = dateString.to.split('.');
  const date = new Date(
    Number(parts[2]),
    Number(parts[1]) - 1,
    Number(parts[0])
  );
  return date;
}

export { convertDate };
