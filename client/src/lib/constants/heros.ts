interface IAsset {
  format: 'image' | 'video'
  url: string
}

interface IContent {
  tag?: string
  title: string
  description: string
}

interface IBanner {
  assets: IAsset[]
  content: IContent
}

export const BANNERS: IBanner[] = [
  {
    assets: [
      {
        format: 'image',
        url: '/home/1-A.jpeg'
      },
      {
        format: 'video',
        url: '/home/1-B.mov'
      }
    ],
    content: {
      tag: 'Just In',
      title: 'AIR MAX DN8',
      description: 'Exploration 1 of 8: Kobbie Mainoo by Gabriel Moses'
    }
  },
  {
    assets: [
      {
        format: 'image',
        url: '/home/2-A.jpeg'
      },
      {
        format: 'image',
        url: '/home/2-B.jpeg'
      }
    ],
    content: {
      tag: 'Just In',
      title: 'AIR MAX DN8',
      description: 'Exploration 2 of 8: Masai Russel by Ilia Chemetoff'
    }
  }
]
