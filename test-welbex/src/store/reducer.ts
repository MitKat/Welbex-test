import { createReducer } from '@reduxjs/toolkit';
import { ColumnSort, TermsFilter } from '../const';
import { mock } from '../mock/mock';
import { Mock } from '../types/mock';
import { filtered, sortColumn } from './action';

interface initialStateType {
  currentSort: ColumnSort,
  filterMock: Mock[],
}
const initialState: initialStateType = {
  currentSort: ColumnSort.Date,
  filterMock: mock,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sortColumn, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(filtered, (state, action) => {
      switch (action.payload.columnFilter) {
        case ColumnSort.Date:
          switch (action.payload.termsFilter){
            case TermsFilter.Equals:
              state.filterMock = mock.filter((item) => item.date.toLowerCase() === String(action.payload.value).toLowerCase());
              break;
            case TermsFilter.Contains:
              state.filterMock = mock.filter((item) => item.date.toLowerCase().includes(String(action.payload.value).toLowerCase()));
              break;
            case TermsFilter.Bigger:
              state.filterMock = mock.filter((item) => item.date.toLowerCase() > String(action.payload.value));
              break;
            case TermsFilter.Smaller:
              state.filterMock = mock.filter((item) => item.date.toLowerCase() < String(action.payload.value));
              break;
          }
          break;
        case ColumnSort.Name:
          switch (action.payload.termsFilter){
            case TermsFilter.Equals:
              state.filterMock = mock.filter((item) => item.name.toLowerCase() === String(action.payload.value).toLowerCase());
              break;
            case TermsFilter.Contains:
              state.filterMock = mock.filter((item) => item.name.toLowerCase().includes(String(action.payload.value).toLowerCase()));
              break;
            case TermsFilter.Bigger:
              state.filterMock = mock.filter((item) => item.name.toLowerCase() > String(action.payload.value));
              break;
            case TermsFilter.Smaller:
              state.filterMock = mock.filter((item) => item.name.toLowerCase() < String(action.payload.value));
              break;
          }
          break;
        case ColumnSort.Quantity:
          switch (action.payload.termsFilter){
            case TermsFilter.Equals:
              state.filterMock = mock.filter((item) => item.quantity === Number(action.payload.value));
              break;
            case TermsFilter.Contains:
              state.filterMock = mock.filter((item) => String(action.payload.value).includes(String(item.quantity)));
              break;
            case TermsFilter.Bigger:
              state.filterMock = mock.filter((item) => item.quantity > Number(action.payload.value));
              break;
            case TermsFilter.Smaller:
              state.filterMock = mock.filter((item) => item.quantity < Number(action.payload.value));
              break;
          }
          break;
        case ColumnSort.Distance:
          switch (action.payload.termsFilter){
            case TermsFilter.Equals:
              state.filterMock = mock.filter((item) => item.distance === Number(action.payload.value));
              break;
            case TermsFilter.Contains:
              state.filterMock = mock.filter((item) => String(item.distance).includes(String(action.payload.value)));
              break;
            case TermsFilter.Bigger:
              state.filterMock = mock.filter((item) => item.distance > Number(action.payload.value));
              break;
            case TermsFilter.Smaller:
              state.filterMock = mock.filter((item) => item.distance < Number(action.payload.value));
              break;
          }
          break;
      }
    });
});

export {reducer};
