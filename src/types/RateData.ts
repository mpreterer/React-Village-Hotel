type RateData = {
  userId: string;
  rate: number;
};

type CurrentRates = {
  currentRates:
    | {
        [key: string]: RateData;
      }
    | undefined;
};

export type { CurrentRates, RateData };
