type UserData = {
  [key: string]: {
    [key: string]: {
      roomNumber: number;
      userId: string;
      discount: number;
      additionalService: boolean;
      totalAmount: number;
      dates: { from: string; to: string };
      guests: { id: string; name: string; amount: number }[];
    };
  };
};

export type { UserData };
