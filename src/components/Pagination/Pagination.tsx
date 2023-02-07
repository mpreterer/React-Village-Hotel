import { FC, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { useAppDispatch } from '../../hooks/redux';
import { roomCardsAmount } from '../../store/slices/rooms/selectors';
import { setPageNumber } from '../../store/slices/rooms/slice';

import { FIRST_PAGE_NUMBER } from './constants';
import { getCounterText, getPageNumbers } from './helpers';
import './Pagination.scss';

type Props = {
  itemsPerPage: number;
  currentPageNumber?: number;
};

const Pagination: FC<Props> = ({
  itemsPerPage,
  currentPageNumber = FIRST_PAGE_NUMBER,
}) => {
  const dispatch = useAppDispatch();
  const totalItems = useSelector(roomCardsAmount);
  const [activePageNumber, setActivePageNumber] = useState(currentPageNumber);
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  const handleNextButtonClick = () => {
    setActivePageNumber(activePageNumber + 1);
    dispatch(setPageNumber(activePageNumber + 1));
  };

  const handlePrevButtonClick = () => {
    setActivePageNumber(activePageNumber - 1);
    dispatch(setPageNumber(activePageNumber - 1));
  };

  const handlePageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const pageNumber = Number(event.currentTarget.textContent);
    setActivePageNumber(pageNumber);
    dispatch(setPageNumber(pageNumber));
  };

  const pageNumbers = getPageNumbers(totalPage, activePageNumber);

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <button
          type="button"
          disabled={activePageNumber === 1}
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
