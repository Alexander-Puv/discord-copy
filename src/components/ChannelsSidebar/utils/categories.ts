import { ICategory } from "../types/categoriesTypes";

export const categories: ICategory[] = [
  {
    title: 'Text channels',
    channels: [
      {title: 'general', type: 'text'},
      {title: 'general2', type: 'text'},
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
      {title: 'New general', type: 'text'},
      {title: 'New general2', type: 'voice'},
      {title: 'New general3', type: 'text'},
    ]
  }
]

export const defaultChannel = categories[0].channels[0]