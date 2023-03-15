import { BookingRoom } from '../../store/slices/profile/slice';

const sumConfirmedRooms = (rooms: BookingRoom[]) => {
  return rooms.reduce((acc, value) => (value.bookingStatus ? acc + 1 : acc), 0);
};

const discountSum = (rooms: BookingRoom[]) => {
  return rooms.reduce((acc, value) => acc + value.discount, 0);
};

const accommodationPriceSum = (rooms: BookingRoom[]) => {
  return rooms.reduce((acc, value) => acc + value.totalAmount, 0);
};

const additionalAmountService = (rooms: BookingRoom[]) => {
  return rooms.reduce((acc, value) => acc + value.additionalService, 0);
};

export {
  accommodationPriceSum,
  additionalAmountService,
  discountSum,
  sumConfirmedRooms,
};
const validFileTypes = [
  'image/jpeg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
];

const isFileValid = (fileType: string) => validFileTypes.includes(fileType);

export { isFileValid };
