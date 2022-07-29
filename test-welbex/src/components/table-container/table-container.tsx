import { ColumnSort } from '../../const';
import { useAppSelector } from '../../hooks/main';
import DateColumn from '../date-column/date-column';
import DistanceColumn from '../distance-column/distance-column';
import NameColumn from '../name-column/name-column';
import QuantityColumn from '../quantity-column/quantity-column';
import { Mock } from '../../types/mock';
import './table-container.css';
import Filter from '../filter/filter';
import { useMemo } from 'react';

type TableContainerProps = {
  mock: Mock[];
}

function TableContainer({mock}: TableContainerProps): JSX.Element {
  const {currentSort} = useAppSelector((state) => state);
  const {filterMock} = useAppSelector((state) => state);

  //вся фильтрация происходит в редусере
  let mockDatatoRender = useMemo(() => filterMock, [filterMock]);


  switch (currentSort) {
    case ColumnSort.Date:
      mockDatatoRender = filterMock;
      break;
    case ColumnSort.Name:
      mockDatatoRender = [...filterMock].sort((itemA, itemB) => {
        if (itemA.name > itemB.name) {
          return 1;
        }
        if (itemA.name < itemB.name) {
          return -1;
        }
        return 0;
      });
      break;
    case ColumnSort.Quantity:
      mockDatatoRender = [...filterMock].sort((itemA, itemB) => (itemA.quantity - itemB.quantity));
      break;
    case ColumnSort.Distance:
      mockDatatoRender = [...filterMock].sort((itemA, itemB) => (itemA.distance - itemB.distance));
      break;
  }

  return (
    <div className="wrapper">
      <Filter />
      <main className="page-content">
        <DateColumn mock={mockDatatoRender}/>
        <NameColumn mock={mockDatatoRender}/>
        <QuantityColumn mock={mockDatatoRender}/>
        <DistanceColumn mock={mockDatatoRender}/>
      </main>
    </div>
  );
}

export default TableContainer;
