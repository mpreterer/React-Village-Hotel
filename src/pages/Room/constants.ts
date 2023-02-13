const rulesList = {
  canSmoke: {
    can: 'Можно курить',
    canNot: 'Нельзя курить',
  },
  withPets: {
    can: 'Можно c питомцами',
    canNot: 'Нельзя c питомцами',
  },
  withGuests: {
    can: 'Можно устраивать вечеринки и мероприятия',
    canNot: 'Без вечеринок и мероприятий',
  },
};

const defaultRule = 'Время прибытия — после 13:00, а выезд до 12:00';

const informationList = {
  comfort: {
    label: 'Комфорт',
    description: 'Шумопоглощающие стены',
    imageName: 'insert_emoticon',
  },
  convenience: {
    label: 'Удобство',
    description: 'Окно в каждой из спален',
    imageName: 'location_city',
  },
  cosiness: {
    label: 'Уют',
    description: 'Номер оснащён камином',
    imageName: 'whatshot',
  },
  freeBreakfast: {
    label: 'Бесплатный завтрак',
    description: 'Утренний завтрак в номер',
    imageName: 'coffee',
  },
  laundry: {
    label: 'Прачечная',
    description: 'Стиральная машина в номере',
    imageName: 'local_laundry_service',
  },
};

export { defaultRule, informationList, rulesList };
