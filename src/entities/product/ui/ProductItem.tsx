import { Product } from '../../../shared/types/Product'
import { Button } from '../../../shared/ui/Button/Button'
import './ProductItem.css'

interface ProductItemProps {
  product: Product
  onAddToFavorite: () => void
}

export const ProductItem = ({ product, onAddToFavorite }: ProductItemProps) => {
  const { name, price, image, description } = product

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽'
  }

  return (
    <div className="product__item">
      <div className="product__image-container">
        <img src={image} alt={name} className="product__image" />
      </div>
      <div className="product__info">
        <h3 className="product__name">{name}</h3>
        <p className="product__price">{formatPrice(price)}</p>
        <p className="product__description">{description}</p>
        <Button 
          className="product__favorite-btn"
          onClick={onAddToFavorite}
        >
          В избранное
        </Button>
      </div>
    </div>
  )
} 