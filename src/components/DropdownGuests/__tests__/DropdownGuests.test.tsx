import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { DropdownGuestsIds } from '../../../shared/constants/DropdownGuestsIds';
import { DropdownGuestsItemData } from '../../../types/DropdownItemData';
import { DropdownGuests } from '../DropdownGuests';

describe('dropdownGuests component rendering', () => {
  it('dropdownGuests layout matches the snapshot', () => {
    const guests = [
      { id: DropdownGuestsIds.ADULTS, name: 'взрослые', amount: 0 },
      { id: DropdownGuestsIds.CHILDREN, name: 'дети', amount: 0 },
      { id: DropdownGuestsIds.BABIES, name: 'младенцы', amount: 0 },
    ];

    const dropdownGuests = render(<DropdownGuests items={guests} />);

    expect(dropdownGuests).toMatchSnapshot();
  });

  it(`Return item value when Plus or Minus button clicked`, () => {
    const guests = [
      { id: DropdownGuestsIds.ADULTS, name: 'взрослые', amount: 0 },
      { id: DropdownGuestsIds.CHILDREN, name: 'дети', amount: 0 },
      { id: DropdownGuestsIds.BABIES, name: 'младенцы', amount: 0 },
    ];

    const onChange = jest.fn(
      (dropdownItems: DropdownGuestsItemData[]) => dropdownItems
    );
    render(
      <DropdownGuests
        items={guests}
        onChange={onChange}
        guestsLimit={2}
        babiesLimit={1}
      />
    );

    const buttonsPlus = screen.getAllByText('+');
    const buttonsMinus = screen.getAllByText('-');
    fireEvent.click(buttonsMinus[0]);
    expect(onChange).not.toBeCalled();
    fireEvent.click(buttonsMinus[1]);
    expect(onChange).not.toBeCalled();
    fireEvent.click(buttonsMinus[2]);
    expect(onChange).not.toBeCalled();

    fireEvent.click(buttonsPlus[2]);
    expect(onChange).not.toBeCalled();

    fireEvent.click(buttonsPlus[1]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 0 },
      { id: 'children', name: 'дети', amount: 1 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);

    fireEvent.click(buttonsPlus[2]);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 0 },
      { id: 'children', name: 'дети', amount: 1 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);

    fireEvent.click(buttonsPlus[0]);
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
  });

  it(`Return zero items values when Clear button clicked`, () => {
    const guests = [
      { id: DropdownGuestsIds.ADULTS, name: 'взрослые', amount: 1 },
      { id: DropdownGuestsIds.CHILDREN, name: 'дети', amount: 1 },
      { id: DropdownGuestsIds.BABIES, name: 'младенцы', amount: 1 },
    ];

    const onChange = jest.fn(
      (dropdownItems: DropdownGuestsItemData[]) => dropdownItems
    );
    render(<DropdownGuests items={guests} onChange={onChange} />);

    const clearButton = screen.getByText('Очистить');

    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(onChange).lastReturnedWith([
      { id: 'adults', name: 'взрослые', amount: 0 },
      { id: 'children', name: 'дети', amount: 0 },
      { id: 'babies', name: 'младенцы', amount: 0 },
    ]);
  });
});
