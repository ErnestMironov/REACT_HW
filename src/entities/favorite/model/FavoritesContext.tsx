import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '../../../shared/types/Product'
import { FavoriteProduct } from '../../../shared/types/FavoriteProduct'

interface FavoritesContextProps {
  favorites: FavoriteProduct[]
  addToFavorites: (product: Product) => void
  removeFromFavorites: (id: string) => void
  updateFavoriteQuantity: (id: string, quantity: number) => void
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>(() => {
    const stored = localStorage.getItem('favorites')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (product: Product) => {
    setFavorites(prev => {
      const existing = prev.find(fav => fav.id === product.id)
      if (existing) {
        return prev.map(fav => fav.id === product.id ? { ...fav, quantity: fav.quantity + 1 } : fav)
      } else {
        const newFavorite: FavoriteProduct = {
          ...product,
          quantity: 1,
          addedAt: new Date().toISOString()
        }
        return [...prev, newFavorite]
      }
    })
  }

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id))
  }

  const updateFavoriteQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromFavorites(id)
      return
    }
    setFavorites(prev => prev.map(fav => fav.id === id ? { ...fav, quantity } : fav))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, updateFavoriteQuantity }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
} 