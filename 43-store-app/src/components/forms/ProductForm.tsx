import { FormEvent, useState } from 'react'
import { PRODUCT_CATEGORIES } from '../../data/mockData'
import { ProductInterface } from '../../types/products.interface'
import InputField from './InputField'
import SelectField from './SelectField'

interface ProductFormProps {
  onSubmit: (product: ProductInterface) => void
  product: ProductInterface
}

const ProductForm = ({ onSubmit, product }: ProductFormProps) => {
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [image, setImage] = useState(product.image)
  const [category, setCategory] = useState(product.category)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const returnedProduct: ProductInterface = {
      name,
      description,
      price,
      image,
      category
    }

    if (product.id) {
      returnedProduct.id = product.id
    }

    onSubmit(returnedProduct)

    setName('')
    setDescription('')
    setPrice(0)
    setImage('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="name"
        value={name}
        onChangeInput={(e) => setName(e.target.value)}
        placeholder="Product name"
      />

      <InputField
        id="description"
        textarea
        value={description}
        onChangeTextarea={(e) => setDescription(e.target.value)}
        placeholder="Product description"
      />

      <InputField
        id="price"
        type="number"
        value={price}
        onChangeInput={(e) => setPrice(Number(e.target.value))}
        placeholder="Product price"
      />

      <InputField
        id="image"
        type="url"
        value={image}
        onChangeInput={(e) => setImage(e.target.value)}
        placeholder="Product image"
      />

      <div className="form-group">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <SelectField
        id="category"
        label="Category"
        options={PRODUCT_CATEGORIES}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <div className="form-group">
        <button type="submit" className="form-button">
          {product.id ? 'Edit Product' : 'Add Product'}
        </button>
      </div>
    </form>
  )
}

export default ProductForm
