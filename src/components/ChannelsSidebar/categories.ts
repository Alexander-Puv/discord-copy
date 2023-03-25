interface IChannel {
  title: string,
  type: 'text' | 'voice'
}

interface ICategory {
  title: string,
  channels: IChannel[]
}

export const categories: ICategory[] = [
  {
    title: 'Text channels',
    channels: [
      {title: 'general', type: 'text'}
    ]
  },
  {
    title: 'Voice channels',
    channels: [
      {title: 'General', type: 'voice'}
    ]
  },
  {
    title: 'New channels',
    channels: [
      {title: 'New general', type: 'text'}
    ]
  }
]