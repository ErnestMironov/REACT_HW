import { useState, useEffect, useMemo, useCallback } from 'react'
import { Product } from '../types/Product'

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Смартфон XPhone Pro',
    price: 89990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=XPhone+Pro',
    description: 'Флагманский смартфон с мощным процессором и отличной камерой',
    category: 'electronics'
  },
  {
    id: '2',
    name: 'Ноутбук UltraBook',
    price: 129990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=UltraBook',
    description: 'Легкий и мощный ноутбук для работы и развлечений',
    category: 'electronics'
  },
  {
    id: '3',
    name: 'Беспроводные наушники SoundPods',
    price: 12990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=SoundPods',
    description: 'Наушники с отличным звуком и шумоподавлением',
    category: 'accessories'
  },
  {
    id: '4',
    name: 'Спортивные кроссовки RunFast',
    price: 8990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=RunFast',
    description: 'Комфортные кроссовки для бега и повседневной носки',
    category: 'clothing'
  },
  {
    id: '5',
    name: 'Умные часы SmartTime',
    price: 24990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=SmartTime',
    description: 'Умные часы с множеством функций для отслеживания здоровья',
    category: 'electronics'
  },
  {
    id: '6',
    name: 'Футболка Premium',
    price: 1990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=Premium+Tshirt',
    description: 'Качественная хлопковая футболка премиум-класса',
    category: 'clothing'
  },
  {
    id: '7',
    name: 'Планшет TabMax',
    price: 34990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=TabMax',
    description: 'Планшет с большим экраном и высокой производительностью',
    category: 'electronics'
  },
  {
    id: '8',
    name: 'Кофемашина BrewPro',
    price: 19990,
    image: 'https://placehold.co/300x200/4361ee/ffffff?text=BrewPro',
    description: 'Автоматическая кофемашина для идеального кофе',
    category: 'home'
  }
]

export const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const memoizedMockProducts = useMemo(() => mockProducts, [])

  const fetchProducts = useCallback(() => {
    setLoading(true)
    try {
      setTimeout(() => {
        setProducts(memoizedMockProducts)
        setLoading(false)
      }, 800)
    } catch (err) {
      console.error('Ошибка при загрузке товаров:', err)
      setError('Ошибка при загрузке товаров')
      setLoading(false)
    }
  }, [memoizedMockProducts])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return { products, loading, error }
} 