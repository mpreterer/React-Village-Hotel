export type Rules = Array<{ text: string; id: number }>;
export type Details = {
  withGuests?: boolean;
  withPets?: boolean;
  canSmoke?: boolean;
};

const convertRules = (rules: Details) => {
  const resultRulesList: Rules = [];
  let index = 0;

  function getConvertRule(
    value: boolean | undefined,
    can: string,
    canNot: string
  ) {
    resultRulesList.push({
      // eslint-disable-next-line no-plusplus
      id: index++,
      text: value ? can : canNot,
    });
  }

  getConvertRule(rules.canSmoke, 'Можно курить', 'Нельзя курить');
  getConvertRule(rules.withPets, 'Можно c питомцами', 'Нельзя c питомцами');
  getConvertRule(
    rules.withGuests,
    'Можно устраивать вечеринки и мероприятия',
    'Без вечеринок и мероприятий'
  );
  getConvertRule(true, 'Время прибытия — после 13:00, а выезд до 12:00', '');
  return resultRulesList;
};

export { convertRules };
