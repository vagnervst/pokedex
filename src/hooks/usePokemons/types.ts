import { Stat, Type } from '../../types/pokemon'

export type QueryResponse = {
  id: number,
  name: string,
  specy: { names: { name: string }[] },
  types: Type[],
  stats: Stat[],
}
