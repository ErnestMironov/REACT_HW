import { Product } from './Product'

export interface FavoriteProduct extends Product {
  quantity: number
  addedAt: string
} 