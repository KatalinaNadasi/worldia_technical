export enum sortingOrder {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}

export const sortByAttributes = (
  data: Array<unknown>,
  attribute: string,
  order: sortingOrder
) => {
  return data;
};
