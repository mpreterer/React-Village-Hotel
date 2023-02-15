import { FC, MouseEvent, useState } from 'react';
import classNames from 'classnames';

import { getCounterText, getPageNumbers } from './helpers';
import './Pagination.scss';

type Props = {
  itemsPerPage: number;
  activePageNumber: number;
  roomsAmount: number;
  onSetActivePageNumber?: (pageNumber: number) => void;
};

const Pagination: FC<Props> = ({
  itemsPerPage,
  activePageNumber,
  roomsAmount,
  onSetActivePageNumber,
}) => {
  const [activePage, setActivePage] = useState(activePageNumber);
  const totalPage = Math.ceil(roomsAmount / itemsPerPage);

  const handleNextButtonClick = () => {
    setActivePage(activePage + 1);
    onSetActivePageNumber?.(activePage + 1);
  };

  const handlePrevButtonClick = () => {
    setActivePage(activePage - 1);
    onSetActivePageNumber?.(activePage - 1);
  };

  const handlePageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const pageNumber = Number(event.currentTarget.textContent);
    setActivePage(pageNumber);
    onSetActivePageNumber?.(pageNumber);
  };

  const pageNumbers = getPageNumbers(totalPage, activePage);

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <button
          type="button"
          disabled={activePage === 1}
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
        {getCounterText(activePage, itemsPerPage, roomsAmount)} вариантов аренды
      </p>
    </div>
  );
};

export { Pagination };
