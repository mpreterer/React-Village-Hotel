import { createSlice } from '@reduxjs/toolkit';

import MuradAvatar from '../../assets/img/user-img-1.jpg';
import PatriciaAvatar from '../../assets/img/user-img-2.jpg';

type TFeedbackListState = Array<{
  userName: string;
  date: string;
  text: string;
  imagePath: string;
  likesAmount: number;
  isLiked: boolean;
  id: number;
}>;

const initialState: TFeedbackListState = [
  {
    userName: 'Мурад Сарафанов',
    date: '5 дней назад',
    text: `Великолепный матрас на кровати в основной спальне!
      А пуфик вообще потрясающий. И стены, действительно,
      шумоподавляющие. Выкрикивал комплименты повару — 
      никто не жаловался из соседей.`,
    likesAmount: 12,
    isLiked: true,
    imagePath: MuradAvatar,
    id: 1,
  },
  {
    userName: 'Патрисия Стёклышкова',
    date: 'Неделю назад',
    text: `Обслуживание на высоте! Всё аккуратно, чисто.
    Завтраки в номер советую заказать,
    каждый день новое блюдо и десерт как комплимент`,
    likesAmount: 2,
    isLiked: false,
    imagePath: PatriciaAvatar,
    id: 2,
  },
];
const feedbackListSlice = createSlice({
  name: 'feedbackList',
  initialState,
  reducers: {},
});

export default feedbackListSlice.reducer;
