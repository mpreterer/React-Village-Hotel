import { fireEvent, render, screen } from '@testing-library/react';

import { Radio } from '../Radio';

describe('Radio', () => {
  it('should have been in the document', () => {
    const handleChange = jest.fn();

    render(
      <Radio name="gender" text="мужчина" value="man" onChange={handleChange} />
    );
    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
  });

  it('should have been checked', () => {
    const handleChange = jest.fn();

    render(
      <Radio
        name="gender"
        text="мужчина"
        value="man"
        isChecked
        onChange={handleChange}
      />
    );
    const input = screen.getByTestId('radio-input');
    expect(input).toHaveAttribute('checked');
  });

  it('when radio is changed should be called the onChange callback', () => {
    const handleChange = jest.fn();

    render(
      <Radio
        name="gender"
        text="женщина"
        value="woman"
        onChange={handleChange}
      />
    );
    const input = screen.getByTestId('radio-input');

    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

export {};
