import { memo, useCallback, useMemo } from 'react'
import { FavoriteProduct } from '../../../shared'
import './FavoriteItem.css'

interface FavoriteItemProps {
  favorite: FavoriteProduct
  onRemove: () => void
  onUpdateQuantity: (quantity: number) => void
}

export const FavoriteItem = memo(({ 
  favorite, 
  onRemove, 
  onUpdateQuantity 
}: FavoriteItemProps) => {
  const { name, price, quantity, addedAt, image } = favorite
  
  const formatDate = useCallback((date: string) => {
    return new Date(date)?.toLocaleDateString()
  }, [])

  const formatPrice = useCallback((price: number) => {
    return price?.toLocaleString('ru-RU') + ' ₽'
  }, [])

  const formattedPrice = useMemo(() => formatPrice(price), [formatPrice, price])
  const formattedDate = useMemo(() => formatDate(addedAt), [formatDate, addedAt])

  const handleDecrease = useCallback(() => {
    onUpdateQuantity(quantity - 1)
  }, [onUpdateQuantity, quantity])

  const handleIncrease = useCallback(() => {
    onUpdateQuantity(quantity + 1)
  }, [onUpdateQuantity, quantity])

  return (
    <li className="favorite__item">
      <div className="favorite__image-container">
        <img src={image} alt={name} className="favorite__image" />
      </div>
      <div className="favorite__info">
        <h3 className="favorite__name">{name}</h3>
        <p className="favorite__price">{formattedPrice}</p>
        <p className="favorite__meta">
          Добавлено: {formattedDate}
        </p>
      </div>
      
      <div className="favorite__quantity-controls">
        <button 
          className="favorite__quantity-btn"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="favorite__quantity">{quantity}</span>
        <button 
          className="favorite__quantity-btn"
          onClick={handleIncrease}
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
}) 