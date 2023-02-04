/* eslint-disable max-len */
const rooms = {
  1: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  2: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  3: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  4: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  5: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  6: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  7: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  8: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  9: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  10: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  11: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  12: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  13: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  14: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  15: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  16: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  17: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  18: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  19: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  20: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  21: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  22: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  23: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  24: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  25: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  26: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  27: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  28: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  29: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  30: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  31: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  32: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  33: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  34: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  35: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  36: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  37: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  38: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  39: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  40: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  41: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  42: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  43: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  44: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  45: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  46: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  47: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  48: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  49: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  50: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  51: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  52: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  53: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  54: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  55: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  56: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  57: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  58: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  59: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  60: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  61: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  62: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  63: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  64: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  65: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  66: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  67: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  68: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  69: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  70: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  71: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  72: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  73: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  74: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  75: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  76: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  77: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  78: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  79: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  80: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  81: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  82: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  83: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  84: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  85: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  86: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  87: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  88: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  89: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  90: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  91: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  92: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  93: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  94: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  95: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  96: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  97: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  98: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  99: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  100: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  101: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  102: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  103: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  104: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  105: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  106: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  107: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  108: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  109: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  110: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  111: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  112: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  113: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  114: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  115: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  116: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  117: {
    furniture: [
      {
        id: 'bedroom',
        limit: 2,
      },
      {
        id: 'bed',
        limit: 4,
      },
      {
        id: 'bathroom',
        limit: 2,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 5,
      },
      {
        id: 'baby',
        limit: 2,
      },
    ],
    reservedDates: [
      {
        from: '08.02.2023',
        to: '12.02.2023',
      },
      {
        from: '01.03.2023',
        to: '10.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withShampoo: true,
      withWideHallway: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/840.jpg?alt=media&token=7b8bbadb-967d-4c0b-a2d1-2bdf0f69df78',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: false,
    price: 9990,
    rating: 4,
    reviewsCount: 65,
  },
  118: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  119: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  120: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 1,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 2,
      },
      {
        id: 'baby',
        limit: 0,
      },
    ],
    reservedDates: [
      {
        from: '14.02.2023',
        to: '16.02.2023',
      },
      {
        from: '18.02.2023',
        to: '20.02.2023',
      },
      {
        from: '01.03.2023',
        to: '03.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/980.jpg?alt=media&token=46c1d7dd-6dfe-4bcf-a88b-9d8b67f9061b',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 8500,
    rating: 3,
    reviewsCount: 35,
  },
  121: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  122: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  123: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  124: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  125: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  126: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  127: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  128: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  129: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  130: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  131: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  132: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  133: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  134: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  135: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  136: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  137: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  138: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  139: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  140: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  141: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  142: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  143: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  144: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  145: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  146: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  147: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  148: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  149: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  150: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  151: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  152: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  153: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  154: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  155: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  156: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  157: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  158: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  159: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  160: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  161: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  162: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  163: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  164: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  165: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  166: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  167: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  168: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  169: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  170: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  171: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  172: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  173: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  174: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  175: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  176: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  177: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  178: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  179: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  180: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  181: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  182: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  183: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  184: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  185: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  186: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  187: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  188: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  189: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  190: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  191: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  192: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  193: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  194: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  195: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  196: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  197: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  198: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  199: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
  200: {
    furniture: [
      {
        id: 'bedroom',
        limit: 1,
      },
      {
        id: 'bed',
        limit: 2,
      },
      {
        id: 'bathroom',
        limit: 1,
      },
    ],
    availability: [
      {
        id: 'guest',
        limit: 3,
      },
      {
        id: 'baby',
        limit: 1,
      },
    ],
    reservedDates: [
      {
        from: '10.02.2023',
        to: '11.02.2023',
      },
      {
        from: '27.02.2023',
        to: '02.03.2023',
      },
    ],
    details: {
      withTV: true,
      withBabyBed: true,
      withBabyChair: true,
      withBreakfast: true,
      withDesk: true,
      withGuests: true,
      withShampoo: true,
      withWideHallway: true,
      withAssistance: true,
    },
    images: [
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/888.jpg?alt=media&token=f41ee48a-fac8-4b55-b0c0-2fcf09c7be70',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-2.jpg?alt=media&token=07feafb1-8fbc-4a7d-86b6-26e8aa78ca84',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-3.jpg?alt=media&token=7a9dbc51-6cd1-4771-8d9c-a8e63fd31c7e',
      'https://firebasestorage.googleapis.com/v0/b/react-village-d5bce.appspot.com/o/room-4.jpg?alt=media&token=8c2de67f-b40c-4b5d-bfb6-008fdf8b655f',
    ],
    isLux: true,
    price: 9990,
    rating: 5,
    reviewsCount: 145,
  },
};

export { rooms };
