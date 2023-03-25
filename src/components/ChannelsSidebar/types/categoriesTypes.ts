export interface IChannel {
  title: string,
  type: 'text' | 'voice'
}

export interface ICategory {
  title: string,
  channels: IChannel[]
}