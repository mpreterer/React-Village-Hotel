import { FeedbackListData } from './FeedbackData';

type RoomData = {
  roomNumber: number;
  furniture: { id: string; limit: number }[];
  capacity: { id: string; limit: number }[];
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
  imagesDetailed: string[];
  isLux: boolean;
  price: number;
  rating: number;
  feedbackCount: number;
  information: Record<string, boolean>;
  votes?: { count: number; rating: number }[];
  comments?: {
    avatar: string;
    date: string;
    likeCount: number;
    name: string;
    text: string;
    isLiked: boolean;
    id: number;
  }[];
  bookedDates?: {
    [key: string]: {
      dates: { from: string; to: string };
      userId: string;
    };
  };
  feedback?: FeedbackListData;
};

export type { RoomData };
