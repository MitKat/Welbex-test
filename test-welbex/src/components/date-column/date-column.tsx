import { generatePath, Link } from 'react-router-dom';
import { AppRoute, ColumnSort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/main';
import { sortColumn } from '../../store/action';
import { Mock } from '../../types/mock';

type DateColumnProps = {
  mock: Mock[];
}

function DateColumn({mock}: DateColumnProps): JSX.Element {
  const {currentSort} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleClickButton = () => {
    dispatch(sortColumn(ColumnSort.Date));
  };

  return (
    <div className="column-container">
      <Link className={`button-column ${(currentSort === ColumnSort.Date) && 'button-active'}`}
        to={`${generatePath(AppRoute.Pagination, {column: 'date'})}`}
        onClick={handleClickButton}
      >
        Date
      </Link>
      <ul className='table-list'>
        {
          mock.map((item) =>
            <li className='table-item' key={item.id}>{item.date}</li>
          )
        }
      </ul>
    </div>
  );
}

export default DateColumn;
