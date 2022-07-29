import { useEffect } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute, ColumnSort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/main';
import { sortColumn } from '../../store/action';
import { Mock } from '../../types/mock';

type QuantityColumnProps = {
  mock: Mock[];
}


function QuantityColumn({mock}: QuantityColumnProps): JSX.Element {
  const {column} = useParams();
  const {currentSort} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (column === ColumnSort.Quantity) {
      dispatch(sortColumn(ColumnSort.Quantity));
    }
  }, [column, currentSort, dispatch]);

  const handleClickButton = () => {
    dispatch(sortColumn(ColumnSort.Quantity));
  };

  return (
    <div className="column-container">
      <Link className={`button-column ${(currentSort === ColumnSort.Quantity) && 'button-active'}`}
        to={`${generatePath(AppRoute.Pagination, {column: `${ColumnSort.Quantity}`})}`}
        onClick={handleClickButton}
      >Quantity
      </Link>
      <ul className='table-list'>
        {
          mock.map((item) =>
            <li className='table-item' key={item.id}>{item.quantity}</li>
          )
        }
      </ul>
    </div>
  );
}

export default QuantityColumn;
