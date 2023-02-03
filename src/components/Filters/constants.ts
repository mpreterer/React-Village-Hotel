const DROPDOWN_DECLENSIONS = {
  guests: ['гость', 'гостя', 'гостей'],
  babies: ['младенец', 'младенца', 'младенцев'],
};

const DROPDOWN_ITEMS = [
  { id: 'adults', name: 'Взрослые', amount: 2 },
  { id: 'children', name: 'Дети', amount: 1 },
  { id: 'babies', name: 'Младенцы', amount: 1 },
];

const DROPDOWN_DECLENSIONS_FURNITURE = {
  bedrooms: ['спальня', 'спальни', 'спален'],
  beds: ['кровать', 'кровати', 'кроватей'],
  bathrooms: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
};

const DROPDOWN_ITEMS_FURNITURE = [
  { id: 'bedrooms', name: 'спальни', amount: 2 },
  { id: 'beds', name: 'кровати', amount: 1 },
  { id: 'bathrooms', name: 'ванные комнаты', amount: 1 },
];

const RANGE_SLIDER = {
  title: 'Диапазон цены',
  start: [5000, 10000],
  text: 'Стоимость за сутки пребывания в номере',
  step: 1,
  range: { min: 0, max: 15000 },
};

const CHECKBOXES = [
  {
    id: 1,
    label: 'Можно курить',
    name: 'smoking',
    isRich: false,
  },
  {
    id: 2,
    label: 'Можно с питомцами',
    name: 'pets',
    isRich: false,
  },
  {
    id: 3,
    label: `Можно пригласить гостей 
    (до 10 человек)`,
    name: 'manyGuests',
    isRich: false,
  },
];

const CHECKBOXES_RICH = [
  {
    id: 1,
    label: 'Широкий коридор',
    name: 'wideHallway',
    description: 'Ширина коридоров в номере не менее 91 см.',
    isRich: true,
  },
  {
    id: 2,
    label: 'Помощник для инвалидов',
    name: 'disabledPersonsAssistant',
    description: 'На 1 этаже вас встретит специалист и проводит до номера.',
    isRich: true,
  },
];

const CHECKLIST = [
  {
    isToggleable: true,
    isRich: false,
    label: 'Завтрак',
    name: 'breakfast',
    id: 1,
  },
  {
    isToggleable: true,
    isRich: false,
    label: 'Письменный стол',
    name: 'writeTable',
    id: 2,
  },
  {
    isToggleable: true,
    isRich: false,
    label: 'Стул для кормления',
    name: 'chairForFeeding',
    id: 3,
  },
  {
    isToggleable: true,
    isRich: false,
    label: 'Кроватка',
    name: 'crib',
    id: 4,
  },
  {
    isToggleable: true,
    isRich: false,
    label: 'Телевизор',
    name: 'tv',
    id: 5,
  },
  {
    isToggleable: true,
    isRich: false,
    label: 'Шампунь',
    name: 'shampoo',
    id: 6,
  },
];

export {
  CHECKBOXES,
  CHECKBOXES_RICH,
  CHECKLIST,
  DROPDOWN_DECLENSIONS,
  DROPDOWN_DECLENSIONS_FURNITURE,
  DROPDOWN_ITEMS,
  DROPDOWN_ITEMS_FURNITURE,
  RANGE_SLIDER,
};
