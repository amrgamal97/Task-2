export interface IOrders {
  orders: any[];
  total: number;
}

export interface IFilter {
  first: number;
  rows: number;
  globalFilter: string | number;
}
