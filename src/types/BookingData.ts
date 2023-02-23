type BookingRequestData = {
  roomNumber: number;
  userId: string;
  discount: number;
  additionalService: boolean;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: { id: string; name: string; amount: number }[];
};

interface BookingData extends Omit<BookingRequestData, 'userId'> {
  bookingId: string;
}
type BookingResponseData = { name: string };

export type { BookingData, BookingRequestData, BookingResponseData };
