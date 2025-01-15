export type NavLink = {
  href: string
  label: string
}

export type CategoryType = 'men' | 'women'
export type CategoryMenuType = 'shoes' | 'clothing' | 'shopBySport'

export const NAVBAR_MENU: NavLink[] = [
  {
    href: '/search?q=&category=men',
    label: 'Men'
  },
  {
    href: '/search?q=&category=women',
    label: 'Women'
  }
]

export const MENU: Record<CategoryType, Record<CategoryMenuType, NavLink[]>> = {
  men: {
    shoes: [
      {
        href: '#',
        label: 'All Shoes'
      },
      {
        href: '#',
        label: 'Lifestyle'
      },
      {
        href: '#',
        label: 'Jordan'
      },
      {
        href: '#',
        label: 'Running'
      },
      {
        href: '#',
        label: 'Football'
      },
      {
        href: '#',
        label: 'Basketball'
      },
      {
        href: '#',
        label: 'Gym and Training'
      },
      {
        href: '#',
        label: 'Skateboarding'
      },
      {
        href: '#',
        label: 'Sandals and Slides'
      },
      {
        href: '#',
        label: 'Nike By You'
      }
    ],
    clothing: [
      {
        href: '#',
        label: 'All Clothing'
      },
      {
        href: '#',
        label: 'Performance Essentials'
      },
      {
        href: '#',
        label: 'Tops and T-Shirts'
      },
      {
        href: '#',
        label: 'Shorts'
      },
      {
        href: '#',
        label: 'Pants and Leggings'
      },

      {
        href: '#',
        label: 'Hoodies and Sweatshirts'
      },
      {
        href: '#',
        label: 'Jackets and Gilets'
      },
      {
        href: '#',
        label: 'Jerseys and Kits'
      },
      {
        href: '#',
        label: 'Jordan'
      }
    ],
    shopBySport: [
      {
        href: '#',
        label: 'Running'
      },
      {
        href: '#',
        label: 'Basketball'
      },
      {
        href: '#',
        label: 'Football'
      },
      {
        href: '#',
        label: 'Golf'
      },
      {
        href: '#',
        label: 'Tennis'
      },
      {
        href: '#',
        label: 'Gym and Training'
      },
      {
        href: '#',
        label: 'Yoga'
      },
      {
        href: '#',
        label: 'Skateboarding'
      }
    ]
  },
  women: {
    shoes: [
      {
        href: '#',
        label: 'All Shoes'
      },
      {
        href: '#',
        label: 'Lifestyle'
      },
      {
        href: '#',
        label: 'Jordan'
      },
      {
        href: '#',
        label: 'Running'
      },
      {
        href: '#',
        label: 'Gym and Training'
      },
      {
        href: '#',
        label: 'Football'
      },
      {
        href: '#',
        label: 'Basketball'
      },
      {
        href: '#',
        label: 'Sandals and Slides'
      },
      {
        href: '#',
        label: 'Nike By You'
      }
    ],
    clothing: [
      {
        href: '#',
        label: 'All Clothing'
      },
      {
        href: '#',
        label: 'Performance Essentials'
      },
      {
        href: '#',
        label: 'Tops and T-Shirts'
      },
      {
        href: '#',
        label: 'Sports Bras'
      },
      {
        href: '#',
        label: 'Pants and Leggings'
      },
      {
        href: '#',
        label: 'Shorts'
      },
      {
        href: '#',
        label: 'Hoodies and Sweatshirts'
      },
      {
        href: '#',
        label: 'Jackets and Gilets'
      },
      {
        href: '#',
        label: 'Skirts and Dresses'
      },
      {
        href: '#',
        label: 'Modest Wear'
      },
      {
        href: '#',
        label: 'Nike Maternity'
      },
      {
        href: '#',
        label: 'Plus Size'
      }
    ],
    shopBySport: [
      {
        href: '#',
        label: 'Yoga'
      },
      {
        href: '#',
        label: 'Running'
      },
      {
        href: '#',
        label: 'Gym and Training'
      },
      {
        href: '#',
        label: 'Basketball'
      },
      {
        href: '#',
        label: 'Tennis'
      },
      {
        href: '#',
        label: 'Golf'
      },
      {
        href: '#',
        label: 'Football'
      },
      {
        href: '#',
        label: 'Skateboarding'
      }
    ]
  }
}
