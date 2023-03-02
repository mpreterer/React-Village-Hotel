type BookingRequestData = {
  roomNumber: number;
  userId: string;
  discount: number;
  additionalService: boolean;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: { id: string; name: string; amount: number }[];
  sequenceNumber: number;
  bookingStatus: boolean;
};

type BookingData = {
  roomNumber: number;
  discount: number;
  additionalService: boolean;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: { id: string; name: string; amount: number }[];
  bookingId: string;
  bookingStatus: boolean;
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
      additionalService: boolean;
      totalAmount: number;
      dates: { from: string; to: string };
      guests: { id: string; name: string; amount: number }[];
      bookingStatus: boolean;
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
