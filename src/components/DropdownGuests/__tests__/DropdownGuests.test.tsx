/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable testing-library/render-result-naming-convention */

import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { DropdownGuestsIds } from '../../../shared/constants/DropdownGuestsIds';
import { DropdownGuestsItemData } from '../../../types/DropdownItemData';
import { DropdownGuests } from '../DropdownGuests';

describe('dropdownGuests component rendering', () => {
  it(`Return item value when Plus or Minus button clicked`, () => {
    const guests = [
      { id: DropdownGuestsIds.ADULTS, name: 'взрослые', amount: 0 },
      { id: DropdownGuestsIds.CHILDREN, name: 'дети', amount: 0 },
      { id: DropdownGuestsIds.BABIES, name: 'младенцы', amount: 0 },
    ];

    const onChange = jest.fn(
      (dropdownItems: DropdownGuestsItemData[]) => dropdownItems
    );
    const dropdownGuests = render(
      <DropdownGuests items={guests} onChange={onChange} />
    );

    expect(dropdownGuests).toMatchSnapshot();

    const applyButton = screen.getByText('Применить');

    const buttonsPlus = screen.getAllByText('+');
    expect(buttonsPlus).toHaveLength(3);
    const buttonsMinus = screen.getAllByText('-');
    fireEvent.click(buttonsPlus[0]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 1 },
      { id: 'children', name: 'дети', amount: 0 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);

    fireEvent.click(buttonsPlus[1]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 1 },
      { id: 'children', name: 'дети', amount: 1 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);
    fireEvent.click(buttonsPlus[2]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 1 },
      { id: 'children', name: 'дети', amount: 1 },
      { id: 'babies', name: 'младенцы', amount: 1 },
    ]);
    fireEvent.click(buttonsMinus[0]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 0 },
      { id: 'children', name: 'дети', amount: 1 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);
    fireEvent.click(buttonsMinus[1]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 0 },
      { id: 'children', name: 'дети', amount: 0 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);

    fireEvent.click(applyButton);
    expect(dropdownGuests).toMatchSnapshot();
  });
});
