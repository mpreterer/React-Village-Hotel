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

type Rules = Array<{ text: string; id: number }>;
type Details =
  | {
      withGuests?: boolean;
      withPets?: boolean;
      canSmoke?: boolean;
    }
  | undefined;
type RulesKeyType = keyof typeof rulesList;

const convertRules = (rules: Details) => {
  const resultRulesList: Rules = [];
  let index = 0;
  const temp: Details = {};

  if (rules === undefined) {
    resultRulesList.push({
      text: defaultRule,
      id: (index += 1),
    });

    return resultRulesList;
  }

  for (const [key, value] of Object.entries(rules)) {
    if (rules.propertyIsEnumerable.call(rulesList, key)) {
      temp[key as RulesKeyType] = value;
    }
  }

  for (const [key] of Object.entries(rulesList)) {
    const rule = rulesList[key as RulesKeyType];

    if (rulesList.propertyIsEnumerable.call(temp, key)) {
      resultRulesList.push({
        text: String(rule.can),
        id: (index += 1),
      });
    } else {
      resultRulesList.push({
        text: String(rule.canNot),
        id: (index += 1),
      });
    }
  }

  resultRulesList.push({
    text: defaultRule,
    id: (index += 1),
  });

  return resultRulesList;
};

export { convertRules };
