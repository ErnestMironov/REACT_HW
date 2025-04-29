import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopPage, FavoritesPage } from './pages'
import { Header } from './shared/ui/Header/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/favourites" element={<FavoritesPage />} />
          </Routes>
        </main>
        <footer>
          <p>Интернет-магазин MyShop &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
