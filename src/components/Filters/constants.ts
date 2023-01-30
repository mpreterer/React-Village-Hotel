const DROPDOWN_DECLENSIONS = {
  guests: ['гость', 'гостя', 'гостей'],
  babies: ['младенец', 'младенца', 'младенцев'],
};

const DROPDOWN_ITEMS = [
  { id: 'adults', name: 'Взрослые', amount: 2 },
  { id: 'children', name: 'Дети', amount: 1 },
  { id: 'babies', name: 'Младенцы', amount: 1 },
];

const RANGE_SLIDER_TITLE = 'Диапазон цены';
const RANGE_SLIDER_START = [5000, 10000];
const RANGE_SLIDER_STEP = 1;
const RANGE_SLIDER_RANGE = { min: 0, max: 15000 };

const CHECKBOXES = [
  {
    label: 'Можно курить',
    name: 'Можно курить',
    isRich: false,
  },
  {
    label: 'Можно с питомцами',
    name: 'Можно с питомцами',
    isRich: false,
  },
  {
    label: `Можно пригласить гостей 
    (до 10 человек)`,
    name: 'Можно пригласить гостей',
    isRich: false,
  },
];

const CHECKBOXES_RICH = [
  {
    label: 'Можно с питомцами',
    name: 'Можно с питомцами',
    description: 'Ширина коридоров в номере не менее 91 см.',
    isRich: true,
  },
  {
    label: 'Можно с питомцами',
    name: 'Можно с питомцами',
    description: 'На 1 этаже вас встретит специалист и проводит до номера.',
    isRich: true,
  },
];

export {
  CHECKBOXES,
  CHECKBOXES_RICH,
  DROPDOWN_DECLENSIONS,
  DROPDOWN_ITEMS,
  RANGE_SLIDER_RANGE,
  RANGE_SLIDER_START,
  RANGE_SLIDER_STEP,
  RANGE_SLIDER_TITLE,
};
