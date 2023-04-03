import { render, screen } from '@testing-library/react';

import { BulletList } from '../BulletList';

describe('BulletList', () => {
  let listItems: { id: number; text: string }[];

  beforeAll(() => {
    listItems = [
      { id: 0, text: 'test' },
      { id: 1, text: 'test' },
    ];
  });

  it('should render component with items', () => {
    render(<BulletList listItems={listItems} />);

    const bulletList = screen.getByTestId('bullet-list');
    const items = screen.getAllByText('test');

    expect(bulletList).toBeInTheDocument();
    expect(items.length).toBe(2);
  });

  it('should render component with labelName', () => {
    render(<BulletList labelName="bullet-list" listItems={listItems} />);

    const bulletList = screen.getByTestId('bullet-list');

    expect(bulletList).toHaveTextContent('bullet-list');
  });
});
