import type { ProductInterface } from '../types/Product.interface'
import type { SelectOptionInterface } from '../types/Common'

export const PRODUCT_CATEGORIES: SelectOptionInterface[] = [
  {
    value: 'Laptops',
    text: 'Laptops'
  },
  {
    value: 'Desktops and All-in-Ones',
    text: 'Desktops and All-in-Ones'
  },
  {
    value: 'Graphics Cards',
    text: 'Graphics Cards'
  },
  {
    value: 'Monitors',
    text: 'Monitors'
  },
  {
    value: 'Accessories and Peripherals',
    text: 'Accessories and Peripherals'
  }
]

export const INITIAL_PRODUCT: Partial<ProductInterface> = {
  name: 'AMD Radeon RX 7800 XT Graphics Card',
  description:
    'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  price: 386.0,
  image: 'https://picsum.photos/640/480?random=graphics',
  category: 'Graphics Cards'
}

export const SORT_BY_LIST: SelectOptionInterface[] = [
  { value: '', text: 'Default order' },
  { value: 'price', text: 'Price' },
  { value: 'name', text: 'Name' },
  { value: 'category', text: 'Category' }
]

export const ORDER_LIST: SelectOptionInterface[] = [
  { value: 'asc', text: 'Ascending' },
  { value: 'desc', text: 'Descending' }
]
