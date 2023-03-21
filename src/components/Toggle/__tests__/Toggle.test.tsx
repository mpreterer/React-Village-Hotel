import { fireEvent, render, screen } from '@testing-library/react';

import { Toggle } from '../Toggle';

describe('Toggle', () => {
  it('should have been in the document', () => {
    render(<Toggle text="Получать уведомления" />);
    const toggle = screen.getByTestId('toggle');
    expect(toggle).toBeInTheDocument();
  });

  it('should have been checked', () => {
    render(<Toggle text="Получать уведомления" isChecked />);
    const input = screen.getByTestId('toggle-input');
    expect(input).toHaveAttribute('checked');
  });

  it('should have name attr', () => {
    render(<Toggle text="Получать уведомления" name="subscription" />);
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
