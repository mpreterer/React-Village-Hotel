import { DropdownGuestsItemData } from './DropdownItemData';

type Dates = { from: string; to: string };

type Booking = {
  roomNumber: number;
  discount: number;
  additionalService: number;
  totalAmount: number;
  dates: Dates;
  guests: DropdownGuestsItemData[];
  bookingStatus: boolean;
};

type BookingData = Booking & {
  bookingId: string;
};

type BookingRequestData = Booking & {
  userId: string;
};

type ReserveDatesData = {
  sequenceNumber: number;
  userId: string;
  dates: Dates;
};

export type { BookingData, BookingRequestData, ReserveDatesData };
