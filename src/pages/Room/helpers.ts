import { RateData } from '../../types/RateData';

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

const getVotes = (votesEntries: RateData[]) => {
  let disappointing = 0;
  let bad = 0;
  let satisfied = 0;
  let good = 0;
  let excellent = 0;

  if (votesEntries.length)
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= votesEntries.length; i++) {
      if (votesEntries[i]) {
        switch (votesEntries[i].rate) {
          case 1:
            disappointing += 1;
            break;

          case 2:
            bad += 1;
            break;

          case 3:
            satisfied += 1;
            break;

          case 4:
            good += 1;
            break;

          default:
            excellent += 1;
        }
      }
    }

  const votes: { count: number; rating: number }[] = [];

  if (disappointing) votes.push({ count: disappointing, rating: 1 });
  if (bad) votes.push({ count: bad, rating: 2 });
  if (satisfied) votes.push({ count: satisfied, rating: 3 });
  if (good) votes.push({ count: good, rating: 4 });
  if (excellent) votes.push({ count: excellent, rating: 5 });

  return votes;
};

export { convertInformation, convertRules, getVotes, prepareUrl };
