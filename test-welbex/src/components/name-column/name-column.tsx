import { useEffect } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute, ColumnSort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/main';
import { sortColumn } from '../../store/action';
import { Mock } from '../../types/mock';

type NameColumnProps = {
  mock: Mock[];
}

function NameColumn({mock}: NameColumnProps): JSX.Element {
  const {column} = useParams();
  const {currentSort} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (column === ColumnSort.Name) {
      dispatch(sortColumn(ColumnSort.Name));
    }
  }, [column, currentSort, dispatch]);

  const handleClickButton = () => {
    dispatch(sortColumn(ColumnSort.Name));
  };

  return (
    <div className="column-container">
      <Link className={`button-column ${(currentSort === ColumnSort.Name) && 'button-active'}`}
        to={`${generatePath(AppRoute.Pagination, {column: `${ColumnSort.Name}`})}`}
        onClick={handleClickButton}
      >Name
      </Link>
      <ul className='table-list'>
        {
          mock.map((item) =>
            <li className='table-item' key={item.id}>{item.name}</li>
          )
        }
      </ul>
    </div>
  );
}

export default NameColumn;
