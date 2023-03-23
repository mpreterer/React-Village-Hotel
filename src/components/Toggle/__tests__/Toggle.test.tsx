import { fireEvent, render, screen } from '@testing-library/react';

import { Toggle } from '../Toggle';

describe('Toggle', () => {
  it('should have been in the document', () => {
    const handleChange = jest.fn();

    render(<Toggle text="Получать уведомления" onChange={handleChange} />);
    const toggle = screen.getByTestId('toggle');
    expect(toggle).toBeInTheDocument();
  });

  it('should have been checked', () => {
    const handleChange = jest.fn();

    render(
      <Toggle text="Получать уведомления" isChecked onChange={handleChange} />
    );
    const input = screen.getByTestId('toggle-input');
    expect(input).toHaveAttribute('checked');
  });

  it('should have name attr', () => {
    const handleChange = jest.fn();

    render(
      <Toggle
        text="Получать уведомления"
        name="subscription"
        onChange={handleChange}
      />
    );
    const input = screen.getByTestId('toggle-input');
    expect(input).toHaveAttribute('name');
  });

  it('when toggle is changed should be called the onChange callback', () => {
    const handleChange = jest.fn();

    render(<Toggle text="женщина" onChange={handleChange} />);
    const input = screen.getByTestId('toggle-input');

    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

export {};
