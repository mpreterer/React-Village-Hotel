import { defaultRule, informationList, rulesList } from './constants';

type Rules = { text: string; id: number }[];
type Details = {
  withGuests?: boolean;
  withPets?: boolean;
  canSmoke?: boolean;
};
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
type RulesKeyType = keyof typeof rulesList;
type InfoKeyType = keyof typeof informationList;

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

const convertInformation = (info: Info) => {
  const resultInfo: ListInfo = [];
  let index = 0;

  for (const [key] of Object.entries(info)) {
    if (info.propertyIsEnumerable.call(informationList, key)) {
      const information = informationList[key as InfoKeyType];

      resultInfo.push({
        label: information.label,
        description: information.description,
        imageName: information.imageName,
        id: (index += 1),
      });
    }
  }

  return resultInfo;
};

export { convertInformation, convertRules };
