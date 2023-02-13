type RoomData = {
  roomNumber: number;
  furniture: { id: string; limit: number }[];
  availability: { id: string; limit: number }[];
  reservedDates: { from: string; to: string }[];
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
  images: string[];
  isLux: boolean;
  price: number;
  rating: number;
  reviewsCount: number;
  information?: {
    [key: string]: boolean;
  };
  votes?: { count: number; rating: number }[];
  comments?: {
    avatar: string;
    date: string;
    likeCount: number;
    name: string;
    text: string;
    id: number;
  }[];
};

export type { RoomData };
