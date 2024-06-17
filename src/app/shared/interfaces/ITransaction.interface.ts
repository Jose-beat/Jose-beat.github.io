export interface ITransaction<T>{
  Message: string,
  ModelObject? : T,
  ListObject? : T[],
  Error?: Boolean
}
