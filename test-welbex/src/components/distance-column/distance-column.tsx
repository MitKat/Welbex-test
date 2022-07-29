import { useEffect } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute, ColumnSort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/main';
import { sortColumn } from '../../store/action';
import { Mock } from '../../types/mock';

type DistanceColumnProps = {
  mock: Mock[];
}

function DistanceColumn({mock}: DistanceColumnProps): JSX.Element {
  const {column} = useParams();
  const {currentSort} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (column === ColumnSort.Distance) {
      dispatch(sortColumn(ColumnSort.Distance));
    }
  }, [column, currentSort, dispatch]);

  const handleClickButton = () => {
    dispatch(sortColumn(ColumnSort.Distance));
  };

  return (
    <div className="column-container">
      <Link className={`button-column ${(currentSort === ColumnSort.Distance) && 'button-active'}`}
        to={`${generatePath(AppRoute.Pagination, {column: `${ColumnSort.Distance}`})}`}
        onClick={handleClickButton}
      >
          Distance
      </Link>
      <ul className='table-list'>
        {
          mock.map((item) =>
            <li className='table-item' key={item.id}>{item.distance}</li>
          )
        }
      </ul>
    </div>
  );
}

export default DistanceColumn;
