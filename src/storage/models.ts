export type ColumnItem = {
  title: string,
  id: number,
}

export type CardItem = {
  id: number,
  title: string,
  columnId: number,
  description?: string,
}
