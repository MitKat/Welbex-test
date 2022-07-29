
export enum AppRoute {
  Main = '/',
  Pagination = '/:column',
}

export enum ColumnSort {
  Date = 'date',
  Name = 'name',
  Quantity = 'quantity',
  Distance = 'distance',
}

export enum TermsFilter {
  Equals = 'равно',
  Contains = 'содержит',
  Bigger = 'больше',
  Smaller = 'меньше',
}
