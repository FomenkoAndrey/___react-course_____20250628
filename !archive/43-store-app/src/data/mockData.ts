import { ProductInterface } from '../types/Product.interface'

export const PRODUCT_CATEGORIES = [
  {
    value: 'Laptops',
    text: 'Laptops'
  }, {
    value: 'Desktops and All-in-Ones',
    text: 'Desktops and All-in-Ones'
  }, {
    value: 'Graphics Cards',
    text: 'Graphics Cards'
  }, {
    value: 'Monitors',
    text: 'Monitors'
  }, {
    value: 'Accessories and Peripherals',
    text: 'Accessories and Peripherals'
  }
]

export const INITIAL_PRODUCT: ProductInterface = {
  id: '999',
  name: 'AMD Radeon RX 7800 XT Graphics Card',
  description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
  price: 386.0,
  image: 'https://loremflickr.com/640/480/random',
  category: 'Graphics Cards'
}
