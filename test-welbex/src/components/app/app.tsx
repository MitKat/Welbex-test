import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { mock } from '../../mock/mock';
import TableContainer from '../table-container/table-container';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<TableContainer mock={mock} />} />
      <Route path={AppRoute.Pagination} element={<TableContainer mock={mock} />} />
    </Routes>
  );
}

export default App;
