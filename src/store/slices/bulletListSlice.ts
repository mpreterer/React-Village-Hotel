import { createSlice } from '@reduxjs/toolkit';

type TBulletListState = {
  labelName: string;
  listItems: Array<{ text: string; id: number }>;
};

const initialState: TBulletListState = {
  labelName: 'Bullet list',
  listItems: [
    { text: 'Нельзя с питомцами', id: 1 },
    { text: 'Без вечеринок и мероприятий', id: 2 },
    { text: 'Время прибытия — после 13:00, а выезд до 12:00', id: 3 },
  ],
};

const bulletListSlice = createSlice({
  name: 'bulletList',
  initialState,

  reducers: {},
});

export default bulletListSlice.reducer;
