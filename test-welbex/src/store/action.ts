import {createAction} from '@reduxjs/toolkit';
import { ColumnSort } from '../const';
import { Filter } from '../types/filter';


export const sortColumn = createAction('main/sortColumn', (payload: ColumnSort) => ({payload}));

export const filtered = createAction('main/filter', (payload: Filter) => ({payload}));
