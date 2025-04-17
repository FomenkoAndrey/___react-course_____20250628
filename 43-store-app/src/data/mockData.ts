import { ProductInterface } from '../types/products.interface'

export const PRODUCT_CATEGORIES = [
  'Laptops',
  'Desktops and All-in-Ones',
  'Monitors',
  'Accessories and Peripherals',
  'Graphics Cards'
]

export const DEFAULT_OPTION_TEXT = 'Please select a category'

export const INITIAL_PRODUCT: ProductInterface = {
  name: 'AMD Radeon RX 7800 XT Graphics Card',
  description:
    'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  price: 386.0,
  image: 'https://loremflickr.com/640/480/random',
  category: 'Graphics Cards'
}
