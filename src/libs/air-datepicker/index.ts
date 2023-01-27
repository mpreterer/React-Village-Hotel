import AirDatepicker from 'air-datepicker';
import {
  AirDatepickerButton,
  AirDatepickerOptions,
} from 'air-datepicker/air-datepicker';

import './air-datepicker.scss';

type DatepickerOnSelect = {
  date: Date | Date[];
  formattedDate: string | string[];
  datepicker: AirDatepicker;
};

type DatepickerView = 'days' | 'months' | 'years';

type Props = {
  hasTwoInputs?: boolean;
  initialDates?: (Date | string)[];
  datepickerIsSmall?: boolean;
};

class Datepicker {
  protected readonly root: HTMLElement;

  protected readonly props: Props;

  private datepicker!: AirDatepicker<HTMLElement>;

  private params!: Partial<AirDatepickerOptions>;

  private container!: HTMLDivElement;

  private buttons!: HTMLDivElement;

  private clearButton!: HTMLButtonElement;

  private clearButtonProps!: AirDatepickerButton;

  private acceptButtonProps!: AirDatepickerButton;

  private startInput!: HTMLInputElement;

  private endInput!: HTMLInputElement;

  private filterDateDropdown!: HTMLInputElement;

  private arrowButtons!: NodeListOf<HTMLButtonElement>;

  private handleDocumentPointerDown!: (event: PointerEvent) => void;

  private handleDropdownPointerDown!: (event: PointerEvent) => void;

  private handleDropdownKeyDown!: (event: KeyboardEvent) => void;

  private correctDate!: string;

  private startInputDataType!: string;

  private endInputDataType!: string;

  private singleInputDataType!: string;

  private arrowButtonsDataType!: string;

  private acceptButtonDataType!: string;

  private clearButtonDataType!: string;

  private startInputSelector!: string;

  private endInputSelector!: string;

  private singleInputSelector!: string;

  private arrowButtonsSelector!: string;

  private datepickerActiveClass!: string;

  private arrowButtonRotateModifier!: string;

  private datepickerButtonHiddenModifier!: string;

  private datepickerSizeSmallModifier!: string;

  constructor(root: HTMLDivElement, props: Props) {
    this.root = root;
    this.props = props;

    this.init();
  }

  public destroy() {
    this.root.removeEventListener(
      'pointerdown',
      this.handleDropdownPointerDown
    );
    this.root.removeEventListener('keydown', this.handleDropdownKeyDown);
    this.datepicker.destroy();
  }

  private init() {
    const { initialDates = [], datepickerIsSmall = false } = this.props;

    this.getSelector();
    this.findDOMElements();
    this.setup();

    this.datepicker = new AirDatepicker(this.root, this.params);

    this.container = this.datepicker.$datepicker;
    this.buttons = this.container.querySelector(
      '.air-datepicker--buttons'
    ) as HTMLDivElement;
    this.clearButton = this.buttons.querySelector(
      '[data-type="clear"]'
    ) as HTMLButtonElement;

    this.container.classList.remove('-inline-');
    if (datepickerIsSmall) this.createSmallDatepicker();

    this.bindDocumentListener();
    this.bindDropdownPointerDownListener();
    this.bindDropdownKeyDownListener();

    this.root.addEventListener('pointerdown', this.handleDropdownPointerDown);
    this.root.addEventListener('keydown', this.handleDropdownKeyDown);

    if (initialDates) this.setInitialDates(initialDates);
  }

  private setup() {
    const { hasTwoInputs } = this.props;

    this.params = {
      dateFormat: 'dd MMM',
      range: true,
      multipleDatesSeparator: ' - ',
      minDate: new Date(),
      buttons: this.createButtons(),
      navTitles: {
        days: 'MMMM yyyy',
      },
      onSelect: this.onSelect.bind(this),
      onChangeView: this.onChangeView.bind(this),
      prevHtml:
        '<span class="material-icons air-datepicker-arrow">arrow_back</span>',
      nextHtml: `<span class="material-icons air-datepicker-arrow">arrow_forward
        </span>`,
    };

    if (hasTwoInputs) {
      this.params = {
        ...this.params,
        position: 'bottom left',
        dateFormat: 'dd.MM.yyyy',
      };
    }
  }

  private getSelector() {
    this.startInputDataType = 'first-input';
    this.endInputDataType = 'second-input';
    this.singleInputDataType = 'single-input';
    this.arrowButtonsDataType = 'arrow';
    this.acceptButtonDataType = 'apply';
    this.clearButtonDataType = 'clear';

    this.startInputSelector = `[data-type="${this.startInputDataType}"]`;
    this.endInputSelector = `[data-type="${this.endInputDataType}"]`;
    this.singleInputSelector = `[data-type="${this.singleInputDataType}"]`;
    this.arrowButtonsSelector = `[data-type="${this.arrowButtonsDataType}"]`;

    this.datepickerActiveClass = '-active-';
    this.arrowButtonRotateModifier = 'input__arrow-button_rotate';
    this.datepickerButtonHiddenModifier = 'air-datepicker-button--hidden';
    this.datepickerSizeSmallModifier = 'air-datepicker--size-small';
  }

  private findDOMElements() {
    const { hasTwoInputs } = this.props;

    if (hasTwoInputs) {
      this.startInput = this.root.querySelector(
        this.startInputSelector
      ) as HTMLInputElement;
      this.endInput = this.root.querySelector(
        this.endInputSelector
      ) as HTMLInputElement;
    } else {
      this.filterDateDropdown = this.root.querySelector(
        this.singleInputSelector
      ) as HTMLInputElement;
    }

    this.arrowButtons = this.root.querySelectorAll<HTMLButtonElement>(
      this.arrowButtonsSelector
    );
  }

  private createButtons() {
    this.acceptButtonProps = {
      content: 'Применить',
      attrs: {
        type: 'button',
        tabindex: '-1',
        'data-type': this.acceptButtonDataType,
      },
      onClick: () => {
        this.close();
      },
    };

    this.clearButtonProps = {
      content: 'Очистить',
      className: this.datepickerButtonHiddenModifier,
      attrs: {
        type: 'button',
        tabindex: '-1',
        'data-type': this.clearButtonDataType,
      },
      onClick: (datepicker: AirDatepicker) => {
        datepicker.clear();
      },
    };

    return [this.clearButtonProps, this.acceptButtonProps];
  }

  private onSelect({ formattedDate }: DatepickerOnSelect): void {
    const { hasTwoInputs } = this.props;
    const receivedDate = formattedDate as string[];
    const startDate = receivedDate[0];
    const endDate = receivedDate[1];

    if (formattedDate.length) {
      this.showClearButton();
    } else {
      this.hideClearButton();
    }

    if (hasTwoInputs) {
      this.startInput.value = startDate || '';
      this.endInput.value = endDate || '';
    } else {
      this.filterDateDropdown.value = receivedDate.join(' - ');
    }
  }

  private onChangeView(view: DatepickerView) {
    if (view !== 'days') {
      this.hideButtons();
    } else {
      this.showButtons();
    }
  }

  private setInitialDates(dates: (Date | string)[]) {
    if (Array.isArray(dates)) {
      let initialDates: (string | Date)[];

      if (dates.length === 0) {
        initialDates = [
          this.getDate(new Date(), 1),
          this.getDate(new Date(), 4),
        ];
      } else if (dates.length === 1) {
        initialDates = [dates[0], this.getDate(dates[0], 4)];
      } else {
        initialDates = dates;
      }

      this.datepicker.selectDate(initialDates);
      this.showClearButton();
    }
  }

  private getDate(receivedDate: Date | string, days: number) {
    const date = new Date(receivedDate);

    date.setDate(date.getDate() + days);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    this.correctDate = `${year}-${month}-${day}`;

    return this.correctDate;
  }

  private bindDropdownPointerDownListener() {
    this.handleDropdownPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLButtonElement
      ) {
        const { type } = event.target.dataset;

        if (type === this.startInputDataType) this.toggle();
        if (type === this.endInputDataType) this.toggle();
        if (type === this.singleInputDataType) this.toggle();
        if (type === this.arrowButtonsDataType) this.toggle();
      }
    };
  }

  private bindDropdownKeyDownListener() {
    this.handleDropdownKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLButtonElement
      ) {
        const { code, target } = event;
        const { type } = target.dataset;

        if (code === 'Space') {
          event.preventDefault();

          if (type === this.startInputDataType) this.toggle();
          if (type === this.endInputDataType) this.toggle();
          if (type === this.singleInputDataType) this.toggle();
          if (type === this.arrowButtonsDataType) this.toggle();
        }

        if (code === 'Enter') {
          event.preventDefault();
        }
      }
    };
  }

  private bindDocumentListener() {
    this.handleDocumentPointerDown = (event: PointerEvent) => {
      if (!this.isPointerDownOnDatepicker(event)) this.close();
    };
  }

  private isPointerDownOnDatepicker({ target }: PointerEvent) {
    return this.root.contains(target as Node);
  }

  private get isOpen() {
    return this.container.classList.contains(this.datepickerActiveClass);
  }

  private close() {
    this.container.classList.remove(this.datepickerActiveClass);
    this.arrowDown();
    document.removeEventListener('pointerdown', this.handleDocumentPointerDown);
  }

  private open() {
    this.container.classList.add(this.datepickerActiveClass);
    this.arrowUp();
    document.addEventListener('pointerdown', this.handleDocumentPointerDown);
  }

  private toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  private arrowUp() {
    this.arrowButtons.forEach((arrow) =>
      arrow.classList.add(this.arrowButtonRotateModifier)
    );
  }

  private arrowDown() {
    this.arrowButtons.forEach((arrow) =>
      arrow.classList.remove(this.arrowButtonRotateModifier)
    );
  }

  private showClearButton() {
    this.clearButton.classList.remove(this.datepickerButtonHiddenModifier);
  }

  private hideClearButton() {
    this.clearButton.classList.add(this.datepickerButtonHiddenModifier);
  }

  private showButtons() {
    this.buttons.style.display = 'block';
  }

  private hideButtons() {
    this.buttons.style.display = 'none';
  }

  private createSmallDatepicker() {
    this.container.classList.add(this.datepickerSizeSmallModifier);
  }
}

export { Datepicker };
