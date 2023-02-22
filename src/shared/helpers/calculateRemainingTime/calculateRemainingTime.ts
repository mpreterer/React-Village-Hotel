const calculateRemainingTime = (expirationTime: string): number => {
  const currentTime = new Date().getTime();
  const expirationTimeMs = new Date(expirationTime).getTime();

  const remainingTime = expirationTimeMs - currentTime;

  return remainingTime;
};

export { calculateRemainingTime };
