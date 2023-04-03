import { render, screen } from '@testing-library/react';

import { FeatureList } from '../FeatureList';

describe('BulletList', () => {
  let listItems: {
    label: string;
    description: string;
    imageName: string;
    id: number;
  }[];

  beforeAll(() => {
    listItems = [
      {
        id: 0,
        label: 'Feature list item',
        imageName: 'Feature list item img',
        description: 'Feature list item description',
      },
      {
        id: 1,
        label: 'Feature list item',
        imageName: 'Feature list item img',
        description: 'Feature list item description',
      },
    ];
  });

  it('should render component', () => {
    render(<FeatureList featureItems={listItems} />);

    const featureList = screen.getByTestId('feature-list');
    const items = screen.getAllByText('Feature list item');

    expect(featureList).toBeInTheDocument();
    expect(items.length).toBe(2);
  });
});
