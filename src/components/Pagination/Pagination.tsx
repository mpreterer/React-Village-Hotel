import { FC, MouseEvent, useState } from 'react';
import classNames from 'classnames';

import { FIRST_PAGE_NUMBER } from './constants';
import { getCounterText, getPageNumbers } from './helpers';
import './Pagination.scss';

type Props = {
  totalItems: number;
  itemsPerPage: number;
  currentPageNumber?: number;
  onSelectPage?: (pageNumber: number) => void;
};

const Pagination: FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPageNumber = FIRST_PAGE_NUMBER,
  onSelectPage,
}) => {
  const [activePageNumber, setActivePageNumber] = useState(currentPageNumber);
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  const handleNextButtonClick = () => {
    setActivePageNumber(activePageNumber + 1);
    onSelectPage?.(activePageNumber + 1);
  };

  const handlePageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const pageNumber = Number(event.currentTarget.textContent);
    setActivePageNumber(pageNumber);
    onSelectPage?.(pageNumber);
  };

  const pageNumbers = getPageNumbers(totalPage, activePageNumber);

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        {pageNumbers.map((pageNumber, index) =>
          pageNumber ? (
            <button
              type="button"
              className={classNames('pagination__button', {
                pagination__button_active: activePageNumber === pageNumber,
              })}
              onClick={handlePageButtonClick}
              disabled={pageNumber === activePageNumber}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          ) : (
            <span
              className="pagination__dots"
              key={`dots:${activePageNumber + index}`}
            >
              ...
            </span>
          )
        )}
        <button
          type="button"
          disabled={totalPage === activePageNumber}
          className="pagination__button pagination__button_type_next"
          onClick={handleNextButtonClick}
        >
          arrow_forward
        </button>
      </div>
      <p className="pagination__text">
        {getCounterText(activePageNumber, itemsPerPage, totalItems)} вариантов
        аренды
      </p>
    </div>
  );
};

export { Pagination };
