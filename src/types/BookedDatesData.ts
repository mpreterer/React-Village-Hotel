type BookedDatesData = {
  [key: string]: {
    dates: { from: string; to: string };
    userId: string;
  };
};

export type { BookedDatesData };
