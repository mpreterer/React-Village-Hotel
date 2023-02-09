type RoomInfoData = {
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
  roomNumber: number;
  comments: Array<{
    avatar: string;
    date: string;
    likeCount: number;
    name: string;
    text: string;
  }> | null;
  votes: Array<{ count: number; rating: number }> | null;
  information: {
    comfort?: boolean;
    convenience?: boolean;
    cosiness?: boolean;
    lateCheckout?: boolean;
    laundry?: boolean;
  };
};

export type { RoomInfoData };
