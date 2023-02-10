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
    canNot: 'Нельзя устраивать вечеринки и мероприятия',
  },
};

const defaultRule = 'Время прибытия — после 13:00, а выезд до 12:00';

type Rules = Array<{ text: string; id: number }>;
type Details = {
  withGuests?: boolean;
  withPets?: boolean;
  canSmoke?: boolean;
};
type RoomKeyType = keyof typeof rulesList;

const convertRules = (rules: Details) => {
  const resultRulesList: Rules = [];
  let index = 0;

  for (const [key, value] of Object.entries(rules)) {
    if (rules.propertyIsEnumerable.call(rulesList, key)) {
      if (value === true) {
        resultRulesList.push({
          text: String(rulesList[key as RoomKeyType].can),
          id: (index += 1),
        });
      } else {
        resultRulesList.push({
          text: String(rulesList[key as RoomKeyType].canNot),
          id: (index += 1),
        });
      }
    }
  }

  resultRulesList.push({
    text: defaultRule,
    id: (index += 1),
  });

  return resultRulesList;
};

export { convertRules };
