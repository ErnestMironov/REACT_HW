import { FavoriteProduct } from '../../../shared'
import './FavoriteItem.css'

interface FavoriteItemProps {
  favorite: FavoriteProduct
  onRemove: () => void
  onUpdateQuantity: (quantity: number) => void
}

export const FavoriteItem = ({ 
  favorite, 
  onRemove, 
  onUpdateQuantity 
}: FavoriteItemProps) => {
  const { name, price, quantity, addedAt, image } = favorite
  const addedDate = new Date(addedAt)?.toLocaleDateString()
  
  const formatPrice = (price: number) => {
    return price?.toLocaleString('ru-RU') + ' ₽'
  }

  return (
    <li className="favorite__item">
      <div className="favorite__image-container">
        <img src={image} alt={name} className="favorite__image" />
      </div>
      <div className="favorite__info">
        <h3 className="favorite__name">{name}</h3>
        <p className="favorite__price">{formatPrice(price)}</p>
        <p className="favorite__meta">
          Добавлено: {addedDate}
        </p>
      </div>
      
      <div className="favorite__quantity-controls">
        <button 
          className="favorite__quantity-btn"
          onClick={() => onUpdateQuantity(quantity - 1)}
        >
          -
        </button>
        <span className="favorite__quantity">{quantity}</span>
        <button 
          className="favorite__quantity-btn"
          onClick={() => onUpdateQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      
      <button 
        className="favorite__remove-btn"
        onClick={onRemove}
      >
        Удалить
      </button>
    </li>
  )
} 