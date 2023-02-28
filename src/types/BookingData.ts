type BookingRequestData = {
  roomNumber: number;
  userId: string;
  discount: number;
  additionalService: number;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: { id: string; name: string; amount: number }[];
  sequenceNumber: number;
};

type BookingData = {
  roomNumber: number;
  discount: number;
  additionalService: number;
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

type BookingsData = {
  booking: {
    [key: string]: {
      roomNumber: number;
      discount: number;
      additionalService: number;
      totalAmount: number;
      dates: { from: string; to: string };
      guests: { id: string; name: string; amount: number }[];
    };
  };
};

export type {
  BookingData,
  BookingRequestData,
  BookingResponseData,
  BookingsData,
  ReserveDatesData,
};
