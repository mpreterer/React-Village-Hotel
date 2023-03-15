import { defaultRule, informationList, rulesList } from './constants';

type Rules = { text: string; id: number }[];
type Details = {
  withGuests?: boolean;
  withPets?: boolean;
  canSmoke?: boolean;
};
type RulesKeyType = keyof typeof rulesList;

type Info = {
  comfort?: boolean;
  convenience?: boolean;
  cosiness?: boolean;
  freeBreakfast?: boolean;
  laundry?: boolean;
};
type ListInfo = {
  label: string;
  description: string;
  imageName: string;
  id: number;
}[];
type InfoKeyType = keyof typeof informationList;

const convertInformation = (info: Info) => {
  return Object.entries(info).reduce((acc: ListInfo, [key], index) => {
    if (Object.hasOwn(informationList, key)) {
      const information = informationList[key as InfoKeyType];

      const newItem = {
        label: information.label,
        description: information.description,
        imageName: information.imageName,
        id: index,
      };

      return [...acc, newItem];
    }
    return acc;
  }, []);
};

const convertRules = (rules: Details) => {
  const resultRulesList: Rules = [];
  let index = 0;

  for (const [key, value] of Object.entries(rulesList)) {
    const rule = rulesList[key as RulesKeyType];

    if (Object.hasOwn(rules, key)) {
      if (value) {
        resultRulesList.push({
          text: rule.can,
          id: (index += 1),
        });
      }
    } else {
      resultRulesList.push({
        text: rule.canNot,
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

const prepareUrl = (path: string, type: 'feedback' | 'like' = 'feedback') => {
  let url = `feedback${path
    .split('/')
    .reduce(
      (accumulator, element) =>
        element ? `${accumulator}/${element}/feedback` : '',
      ''
    )}`;

  url =
    type === 'like'
      ? `${url.slice(0, url.length - '/feedback'.length)}/likes`
      : url;

  return url;
};

export { convertInformation, convertRules, prepareUrl };
