type RateData = {
  userId: string;
  roomNumber: string;
  rate: number;
};

type CurrentRates = {
  currentRates?: {
    [key: string]: RateData;
  };
};

export type { CurrentRates, RateData };
