import { FC, MouseEvent, useState } from 'react';
import classNames from 'classnames';

import { FIRST_PAGE_NUMBER } from './constants';
import { getCounterText, getPageNumbers } from './helpers';
import './Pagination.scss';

type Props = {
  itemsPerPage: number;
  totalRooms: number;
  currentPageNumber?: number;
  onClickPage?: (pageNumber: number) => void;
};

const Pagination: FC<Props> = ({
  itemsPerPage,
  totalRooms,
  currentPageNumber = FIRST_PAGE_NUMBER,
  onClickPage,
}) => {
  const [activePage, setActivePage] = useState(currentPageNumber);
  const totalPage = Math.ceil(totalRooms / itemsPerPage);

  const handleNextButtonClick = () => {
    setActivePage(activePage + 1);
    onClickPage?.(activePage + 1);
  };

  const handlePrevButtonClick = () => {
    setActivePage(activePage - 1);
    onClickPage?.(activePage - 1);
  };

  const handlePageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const pageNumber = Number(event.currentTarget.textContent);
    setActivePage(pageNumber);
    onClickPage?.(pageNumber);
  };

  const pageNumbers = getPageNumbers(totalPage, activePage);

  return (
    <div className="pagination" data-testid="pagination">
      <div className="pagination__buttons">
        <button
          type="button"
          disabled={activePage === FIRST_PAGE_NUMBER}
          className="pagination__button pagination__button_type_prev"
          onClick={handlePrevButtonClick}
        >
          arrow_back
        </button>
        {pageNumbers.map((pageNumber, index) =>
          pageNumber ? (
            <button
              type="button"
              className={classNames('pagination__button', {
                pagination__button_active: activePage === pageNumber,
              })}
              onClick={handlePageButtonClick}
              disabled={pageNumber === activePage}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          ) : (
            <span
              className="pagination__dots"
              key={`dots:${activePage + index}`}
            >
              ...
            </span>
          )
        )}
        <button
          type="button"
          disabled={totalPage === activePage}
          className="pagination__button pagination__button_type_next"
          onClick={handleNextButtonClick}
        >
          arrow_forward
        </button>
      </div>
      <p className="pagination__text">
        {getCounterText(activePage, itemsPerPage, totalRooms)} вариантов аренды
      </p>
    </div>
  );
};

export { Pagination };
