import { DropdownGuestsItemData } from './DropdownItemData';

type BookingRequestData = {
  roomNumber: number;
  userId: string;
  discount: number;
  additionalService: number;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: DropdownGuestsItemData[];
  sequenceNumber: number;
  bookingStatus: boolean;
};

type BookingData = {
  roomNumber: number;
  discount: number;
  additionalService: number;
  totalAmount: number;
  dates: { from: string; to: string };
  guests: DropdownGuestsItemData[];
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
      additionalService: number;
      totalAmount: number;
      dates: { from: string; to: string };
      guests: DropdownGuestsItemData[];
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
