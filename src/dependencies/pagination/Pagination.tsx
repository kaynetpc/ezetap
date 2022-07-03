import {useState} from 'react';
import './Pagination.css';

type Props = {
  perPage: number;
  total: number;
  currentPage: number;
  paginate: (cur: number) => void;
  makePerPage?: (arg: any) => void;
  element?: any;
};
export const Pagination = ({
  perPage,
  total,
  paginate,
  makePerPage,
  currentPage,
  element,
}: Props) => {
  const [currentTab, setCurrentTab] = useState(currentPage);

  const pageNumber = [];

  for (let index = 0; index < Math.ceil(total / perPage); index++) {
    pageNumber.push(index);
  }

  const tm = [];
  for (let i = 0; i < total; i++) {
    tm.push(i + 1);
  }


  const handlePaginate = (num: number) => {
    paginate(num);
    setCurrentTab(num);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        top: '6px',
      }}
    >
      <nav className="paginate-nav">
        <ul>
          {pageNumber.map((number) => (
            <button
              className={`${
                currentTab === number ? 'current-tab ' : ' paginate-tabs'
              }`}
              type="button"
              key={number}
              onClick={() => handlePaginate(number)}
            >
              {number + 1}
            </button>
          ))}
        </ul>
      </nav>
      <div className='pagination-element'>
        {element}
      </div>
    </div>
  );
};
