import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { ProductInterface } from '../../types/Product.interface.ts'
import { PRODUCT_CATEGORIES } from '../../data/mockData.ts'
import InputField from './InputField.tsx'
import SelectField from './SelectField.tsx'

interface ProductFormProps {
  onSubmit: (product: ProductInterface) => void
  product: Partial<ProductInterface>
  onClose: () => void
}

const ProductForm = ({onSubmit, product, onClose}: ProductFormProps) => {
  const [name, setName] = useState(product.name as string)
  const [description, setDescription] = useState(product.description as string)
  const [price, setPrice] = useState(product.price as number)
  const [image, setImage] = useState(product.image as string)
  const [category, setCategory] = useState(product.category as string)

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setName(e.target.value), [])
  const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value), [])
  const handlePriceChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value)), [])
  const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value), [])
  const handleCategoryChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value), [])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!name || !description || !price || !image || !category) {
      console.error('Please fill out all fields')
      return
    }

    const returnedProduct: ProductInterface = {
      id: product.id || '',
      name,
      description,
      price,
      image,
      category
    }

    onSubmit(returnedProduct)
    onClose()
  }

  return (
      <form onSubmit={handleSubmit}>
        <InputField id="name" type="text" value={name} onChangeInput={handleNameChange} placeholder="Product name"/>

        <InputField
            id="description"
            textarea
            value={description}
            onChangeTextarea={handleDescriptionChange}
            placeholder="Product description"
        />

        <InputField
            id="price"
            type="number"
            value={`${price}`}
            onChangeInput={handlePriceChange}
            placeholder="Product price"
        />

        <InputField
            id="image"
            type="url"
            value={image}
            onChangeInput={handleImageChange}
            placeholder="Product image URL"
        />

        <SelectField
            id="category"
            value={category}
            onChange={handleCategoryChange}
            options={PRODUCT_CATEGORIES}
        />

        <div className="form-group">
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>
  )
}

export default ProductForm
