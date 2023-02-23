type BookingRequestData = {
  roomNumber: number;
  userId: string;
  discount: number;
  additionalService: boolean;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: { id: string; name: string; amount: number }[];
  sequenceNumber: number;
};

type BookingData = {
  roomNumber: number;
  discount: number;
  additionalService: boolean;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: { id: string; name: string; amount: number }[];
  bookingId: string;
};
type BookingResponseData = { name: string };

type ReserveDatesData = {
  sequenceNumber: number;
  userId: string;
  dates: { from: string; to: string };
};

export type {
  BookingData,
  BookingRequestData,
  BookingResponseData,
  ReserveDatesData,
};
