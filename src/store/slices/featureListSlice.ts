import { createSlice } from '@reduxjs/toolkit';

import comfortImage from '../../assets/img/feature/comfort.svg';
import convenienceImage from '../../assets/img/feature/convenience.svg';
import cosinessImage from '../../assets/img/feature/cosiness.svg';

type TFeatureListState = Array<{
  label: string;
  description: string;
  imagePath: string;
  id: number;
}>;

const initialState: TFeatureListState = [
  {
    label: 'Комфорт',
    description: 'Шумопоглощающие стены',
    imagePath: comfortImage,
    id: 1,
  },
  {
    label: 'Удобство',
    description: 'Окно в каждой из спален',
    imagePath: convenienceImage,
    id: 2,
  },
  {
    label: 'Уют',
    description: 'Номер оснащен камином',
    imagePath: cosinessImage,
    id: 3,
  },
];
const featureListSlice = createSlice({
  name: 'feedbackList',
  initialState,
  reducers: {},
});

export default featureListSlice.reducer;
