import { render, screen } from '@testing-library/react';

import { Feature } from '../Feature';

describe('Feature', () => {
  it('should render component', () => {
    render(
      <Feature
        imageName="feature-img"
        label="feature"
        description="feature description"
      />
    );

    const feature = screen.getByTestId('feature');

    expect(feature).toBeInTheDocument();
  });
});
