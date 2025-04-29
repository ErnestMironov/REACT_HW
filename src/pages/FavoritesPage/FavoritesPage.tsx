import { FavoriteItem } from '../../entities/favorite/ui/FavoriteItem'
import { useFavorites } from '../../entities/favorite/model/FavoritesContext'
import './FavoritesPage.css'
import { Link } from 'react-router-dom'
import { StyledLink } from '../../shared/ui/StyledLink/StyledLink'

export const FavoritesPage = () => {
  const { 
    favorites, 
    removeFromFavorites, 
    updateFavoriteQuantity 
  } = useFavorites()

  return (
    <div className="favorites">
      <div className="favorites__header">
        <h2 className="favorites__title">Избранные товары</h2>
        <StyledLink to="/">
          Вернуться в каталог
        </StyledLink>
      </div>
      
      {favorites.length === 0 ? (
        <div className="favorites__empty">
          <p className="favorites__empty-text">У вас пока нет товаров в избранном</p>
          <Link to="/" className="favorites__add-link">
            Перейти в каталог товаров
          </Link>
        </div>
      ) : (
        <ul className="favorites__list">
          {favorites.map(favorite => (
            <FavoriteItem 
              key={favorite.id}
              favorite={favorite}
              onRemove={() => removeFromFavorites(favorite.id)}
              onUpdateQuantity={(quantity) => 
                updateFavoriteQuantity(favorite.id, quantity)
              }
            />
          ))}
        </ul>
      )}
    </div>
  )
} 