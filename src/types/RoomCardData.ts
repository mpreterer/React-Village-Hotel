type RoomCardData = [
  string,
  {
    furniture: Array<{ id: string; limit: number }>;
    availability: Array<{ id: string; limit: number }>;
    reservedDates: Array<{ from: string; to: string }>;
    details: {
      withTV?: boolean;
      withBabyBed?: boolean;
      withBabyChair?: boolean;
      withBreakfast?: boolean;
      withDesk?: boolean;
      withGuests?: boolean;
      withShampoo?: boolean;
      withWideHallway?: boolean;
      withAssistance?: boolean;
      withPets?: boolean;
      canSmoke?: boolean;
    };
    images: Array<string>;
    isLux: boolean;
    price: number;
    rating: number;
    reviewsCount: number;
  }
];

export type { RoomCardData };
