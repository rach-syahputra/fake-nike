import { CategoryMenuType, CategoryType, NavLink } from '../types/menus'

export const NAVBAR_MENU: NavLink[] = [
  {
    href: '/men',
    label: 'Men'
  },
  {
    href: '/women',
    label: 'Women'
  }
]

export const MENU: Record<CategoryType, Record<CategoryMenuType, NavLink[]>> = {
  men: {
    shoes: [
      {
        href: '/search?q=',
        label: 'All Shoes'
      },
      {
        href: '/search?q=&categories=1',
        label: 'Lifestyle'
      },
      {
        href: '/search?q=jordan&categories=1,3,5,6,7,9,10',
        label: 'Jordan'
      },
      {
        href: '/search?q=&categories=3',
        label: 'Running'
      },
      {
        href: '/search?q=&categories=5',
        label: 'Football'
      },
      {
        href: '/search?q=&categories=6',
        label: 'Basketball'
      },
      {
        href: '/search?q=&categories=7',
        label: 'Gym and Training'
      },
      {
        href: '/search?q=&categories=9',
        label: 'Skateboarding'
      },
      {
        href: '/search?q=&categories=10',
        label: 'Sandals and Slides'
      }
    ],
    clothing: [
      {
        href: '/search?q=&categories=12,14,16',
        label: 'All Clothing'
      },
      {
        href: '/search?q=&categories=12',
        label: 'Tops and T-Shirts'
      },
      {
        href: '/search?q=&categories=14',
        label: 'Shorts'
      },

      {
        href: '/search?q=&categories=16',
        label: 'Hoodies and Sweatshirts'
      }
    ],
    shopBySport: [
      {
        href: '/running',
        label: 'Running'
      },
      {
        href: '/basketball',
        label: 'Basketball'
      },
      {
        href: 'football',
        label: 'Football'
      }
    ]
  },
  women: {
    shoes: [
      {
        href: '/search?q=&categories=2,4,5,6,8,9,11',
        label: 'All Shoes'
      },
      {
        href: '/search?q=&categories=2',
        label: 'Lifestyle'
      },
      {
        href: '/search?q=jordan&categories=2,4,5,6,8,9,11',
        label: 'Jordan'
      },
      {
        href: '/search?q=&categories=4',
        label: 'Running'
      },
      {
        href: '/search?q=&categories=8',
        label: 'Gym and Training'
      },
      {
        href: '/search?q=&categories=5',
        label: 'Football'
      },
      {
        href: '/search?q=&categories=6',
        label: 'Basketball'
      },
      {
        href: '/search?q=&categories=11',
        label: 'Sandals and Slides'
      }
    ],
    clothing: [
      {
        href: '/search?q=&categories=11,13,15,17,18',
        label: 'All Clothing'
      },
      {
        href: '/search?q=&categories=13',
        label: 'Tops and T-Shirts'
      },
      {
        href: '/search?q=&categories=18',
        label: 'Sports Bras'
      },
      {
        href: '/search?q=&categories=15',
        label: 'Shorts'
      },
      {
        href: '/search?q=&categories=17',
        label: 'Hoodies and Sweatshirts'
      }
    ],
    shopBySport: [
      {
        href: '/running',
        label: 'Running'
      },
      {
        href: '/basketball',
        label: 'Basketball'
      },
      {
        href: '/football',
        label: 'Football'
      }
    ]
  }
}
