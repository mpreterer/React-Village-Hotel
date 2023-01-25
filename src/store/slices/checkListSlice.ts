import { createSlice } from '@reduxjs/toolkit';

type TCheckListState = {
  [id: string]: {
    labelName: string;
    isToggleable: boolean;
    isRich: boolean;
    listItems: Array<{
      label: string;
      name: string;
      description?: string;
      isChecked?: boolean;
      id: number;
    }>;
  };
};

const initialState: TCheckListState = {
  expandable: {
    labelName: 'expandable checkbox list',
    isToggleable: true,
    isRich: false,
    listItems: [
      {
        label: 'Завтрак',
        name: 'breakfast',
        id: 1,
      },
      {
        label: 'Письменный стол',
        name: 'desk',
        id: 2,
      },
      {
        label: 'Стул для кормления',
        name: 'baby-chair',
        id: 3,
      },
      {
        label: 'Кроватка',
        name: 'baby-bed',
        id: 4,
      },
      {
        label: 'Телевизор',
        name: 'tv',
        id: 5,
      },
      {
        label: 'Шампунь',
        name: 'shampoo',
        id: 6,
      },
    ],
  },
  buttons: {
    labelName: 'checkbox buttons',
    isToggleable: false,
    isRich: false,
    listItems: [
      {
        label: 'Можно курить',
        name: 'smoking',
        id: 7,
      },
      {
        label: 'Можно с питомцами',
        name: 'pets',
        id: 8,
      },
      {
        label: 'Можно пригласить гостей (до 10 человек)',
        name: 'guests',
        id: 9,
      },
    ],
  },
  rich: {
    labelName: 'rich checkbox buttons',
    isToggleable: false,
    isRich: true,
    listItems: [
      {
        label: 'Широкий коридор',
        name: 'wide-corridor',
        description: 'Ширина коридоров в номере не менее 91 см',
        id: 10,
      },
      {
        label: 'Помощник для инвалидов',
        name: 'assistance',
        description: 'На 1 этаже вас встретит специалист и проводит до номера',
        id: 11,
      },
    ],
  },
};

const checkListSlice = createSlice({
  name: 'checkList',
  initialState,

  reducers: {},
});

export default checkListSlice.reducer;
