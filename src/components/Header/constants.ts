import SCREENS from '../../routes/endpoints';

const navigationItems = [
  { text: 'о нас', to: SCREENS.MAIN },
  { text: 'услуги', isNested: true, to: '/mock-address/change-me' },
  { text: 'вакансии', to: '/mock-address/change-me' },
  { text: 'новости', to: '/mock-address/change-me' },
  { text: 'соглашения', isNested: true, to: '/mock-address/change-me' },
];

export { navigationItems };
