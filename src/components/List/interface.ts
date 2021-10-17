

export interface IList {
  name?: string,
  type?: string,
  route?: string
  loading?: any,
  items: Array<IItems>
}

export interface IItems {
  _id?: string,
  name?: string,
  description?: string,
  image?: string,
  link?: string
}
