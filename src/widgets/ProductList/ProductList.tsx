import { ProductItem } from '../../entities/product/ui/ProductItem'
import { useProductsData } from '../../shared/lib/useProductsData'
import { useFavorites } from '../../entities/favorite/model/FavoritesContext'
import './ProductList.css'
import { StyledLink } from '../../shared/ui/StyledLink/StyledLink'

export const ProductList = () => {
  const { products, loading, error } = useProductsData()
  const { addToFavorites, favorites } = useFavorites()

  const favoriteCount = favorites.length

  if (loading) {
    return <div className="products__loading">Загрузка товаров...</div>
  }

  if (error) {
    return <div className="products__error">{error}</div>
  }

  return (
    <div className="products__container">
      <div className="products__header">
        <h2 className="products__title">Каталог товаров</h2>
        <StyledLink to="/favourites" count={favoriteCount} />
      </div>
      
      {products.length === 0 ? (
        <div className="products__empty">
          <p>Товары не найдены</p>
        </div>
      ) : (
        <div className="products__grid">
          {products.map((product) => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onAddToFavorite={() => addToFavorites(product)}
            />
          ))}
        </div>
      )}
    </div>
  )
} 