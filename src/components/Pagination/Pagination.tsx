import { FC, MouseEvent, useCallback, useState } from 'react';
import classNames from 'classnames';

import './Pagination.scss';

const FIRST_PAGE_NUMBER = 1;
const PAGINATION_BUTTONS_COUNT = 5;

const getCounterText = (
  activePageNumber: number,
  itemsPerPage: number,
  totalItems: number
) => {
  const lastItem = activePageNumber * itemsPerPage;
  const lastItemsNumber = lastItem > totalItems ? totalItems : lastItem;
  const totalCountText = totalItems > 100 ? '100+' : totalItems;
  const textCounter = `${
    itemsPerPage * (activePageNumber - 1) + 1
  } - ${lastItemsNumber} из ${totalCountText}`;
  return textCounter;
};

const createMiddlePages = (totalPage: number, activePageNumber: number) => {
  const result = [];
  const leftPageNumber = activePageNumber - 1;
  const rightPageNumber = activePageNumber + 1;

  switch (activePageNumber) {
    case 1:
    case 2:
      result.push(2);
      result.push(3);
      result.push(null);
      break;
    case 3:
      result.push(leftPageNumber);
      result.push(activePageNumber);
      result.push(rightPageNumber);
      result.push(null);
      break;
    case totalPage - 1:
      result.push(null);
      result.push(leftPageNumber);
      result.push(activePageNumber);
      break;
    case totalPage - 2:
      result.push(null);
      result.push(leftPageNumber);
      result.push(activePageNumber);
      result.push(rightPageNumber);
      break;
    case totalPage:
      result.push(null);
      result.push(activePageNumber - 2);
      result.push(leftPageNumber);
      break;

    default:
      result.push(null);
      result.push(leftPageNumber);
      result.push(activePageNumber);
      result.push(rightPageNumber);
      result.push(null);
  }
  return result;
};

const getPageNumbers = (totalPage: number, activePageNumber: number) => {
  if (totalPage <= PAGINATION_BUTTONS_COUNT) {
    const pageNumbers = [];
    for (let i = FIRST_PAGE_NUMBER; i <= totalPage; i += 1) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  const firstPage = FIRST_PAGE_NUMBER;
  const lastPage = totalPage;
  const middlePage = createMiddlePages(totalPage, activePageNumber);
  return [firstPage, ...middlePage, lastPage];
};

type Props = {
  totalItems: number;
  itemsPerPage: number;
  currentPageNumber?: number;
};

const Pagination: FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPageNumber = FIRST_PAGE_NUMBER,
}) => {
  const [activePageNumber, setActivePageNumber] = useState(currentPageNumber);
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  const handleNextButtonClick = () => {
    setActivePageNumber(activePageNumber + 1);
  };

  const handlePageButtonClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const pageNumber = Number(event.currentTarget.textContent);
      setActivePageNumber(pageNumber);
    },
    []
  );

  const pageNumbers = getPageNumbers(totalPage, activePageNumber);

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumber) {
            return (
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
            );
          }
          return (
            <span
              className="pagination__dots"
              key={`dots:${activePageNumber + index}`}
            >
              ...
            </span>
          );
        })}
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
