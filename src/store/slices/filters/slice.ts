import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DropdownItemData } from '../../../types/DropdownItemData';
import { RoomData } from '../../../types/RoomData';

type InitialState = {
  selectedDates: Date[];
  price: null | {
    min: number;
    max: number;
    from: number;
    to: number;
  };

  rules: {
    label: string;
    name: string;
    isChecked: boolean;
  }[];

  availability: {
    name: string;
    label: string;
    description: string;
    isChecked: boolean;
  }[];

  capacity: DropdownItemData[];
  furniture: DropdownItemData[];
  convenience: { name: string; label: string; isChecked: boolean }[];
};

const initialState: InitialState = {
  selectedDates: [],
  price: null,
  rules: [
    { name: 'canSmoke', label: 'Можно курить', isChecked: false },
    { name: 'withPets', label: 'Можно с питомцами', isChecked: false },
    {
      name: 'withGuests',
      label: 'Можно пригласить гостей (до 10 человек)',
      isChecked: false,
    },
  ],

  capacity: [
    { id: 'adults', name: 'Взрослые', amount: 0, maxValue: 0 },
    { id: 'children', name: 'Дети', amount: 0, maxValue: 0 },
    { id: 'babies', name: 'Младенцы', amount: 0, maxValue: 0 },
  ],

  furniture: [
    { id: 'bedroom', name: 'спальни', amount: 0, maxValue: 0 },
    { id: 'bed', name: 'кровати', amount: 0, maxValue: 0 },
    { id: 'bathroom', name: 'ванные комнаты', amount: 0, maxValue: 0 },
  ],

  availability: [
    {
      name: 'withAssistance',
      label: 'Широкий коридор',
      description: 'Ширина коридоров в номере не менее 91 см.',
      isChecked: false,
    },
    {
      name: 'withWideHallway',
      label: 'Помощник для инвалидов',
      description: 'На 1 этаже вас встретит специалист  и проводит до номера.',
      isChecked: false,
    },
  ],

  convenience: [
    { name: 'withBreakfast', label: 'Завтрак', isChecked: false },
    { name: 'withDesk', label: 'Письменный стол', isChecked: false },
    { name: 'withBabyChair', label: 'Стул для кормления', isChecked: false },
    { name: 'withBabyBed', label: 'Кроватка', isChecked: false },
    { name: 'withTV', label: 'Телевизор', isChecked: false },
    { name: 'withShampoo', label: 'Шампунь', isChecked: false },
  ],
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    syncFilters: (state, { payload }: PayloadAction<RoomData[]>) => {
      payload.forEach(({ furniture, price, availability }) => {
        state.furniture.forEach((item) => {
          const foundedFurniture = furniture.find(({ id }) => item.id === id);
          if (foundedFurniture) {
            if (item.maxValue < foundedFurniture.limit) {
              item.maxValue = foundedFurniture.limit;
            }
          }
        });

        if (state.price === null) {
          state.price = {
            max: price,
            min: price,
            to: price,
            from: price,
          };
        } else if (price > state.price.max) {
          state.price.max = price;
          state.price.to = price;
        } else if (price < state.price.min) {
          state.price.min = price;
          state.price.from = price;
        }
      });
    },

    updatePrice: (state, action: PayloadAction<number[]>) => {
      if (state.price) {
        const [from, to] = action.payload;
        state.price.from = from;
        state.price.to = to;
      }
    },

    toggleRule: (state, { payload }: PayloadAction<string>) => {
      const foundedRule = state.rules.find((item) => item.name === payload);
      if (foundedRule) {
        foundedRule.isChecked = !foundedRule.isChecked;
      }
    },

    updateSelectedDate: (state, { payload }: PayloadAction<Date[]>) => {
      state.selectedDates = payload.map((item) => new Date(item));
    },

    toggleConvenience: (state, { payload }: PayloadAction<string>) => {
      const currentConvenienceItem = state.convenience.find(
        (item) => item.name === payload
      );
      if (currentConvenienceItem) {
        currentConvenienceItem.isChecked = !currentConvenienceItem.isChecked;
      }
    },

    toggleAvailability: (state, { payload }: PayloadAction<string>) => {
      const foundedAvailability = state.availability.find(
        (item) => item.name === payload
      );
      if (foundedAvailability) {
        foundedAvailability.isChecked = !foundedAvailability.isChecked;
      }
    },

    updateFurniture: (
      state,
      { payload }: PayloadAction<DropdownItemData[]>
    ) => {
      payload.forEach((item) => {
        const currentItem = state.furniture.find(({ id }) => item.id === id);
        if (currentItem) currentItem.amount = item.amount;
      });
    },

    updateCapacity: (state, { payload }: PayloadAction<DropdownItemData[]>) => {
      payload.forEach((item) => {
        const currentItem = state.capacity.find(({ id }) => item.id === id);
        if (currentItem) currentItem.amount = item.amount;
      });
    },
  },
});

export const { reducer: filtersReducer, actions: filtersActions } = slice;
