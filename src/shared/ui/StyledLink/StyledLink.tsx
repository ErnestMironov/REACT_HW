import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import './StyledLink.css'

interface StyledLinkProps {
  to: string
  count?: number
  className?: string
  children?: ReactNode
}

export const StyledLink = ({ to, count, className, children }: StyledLinkProps) => (
  <Link to={to} className={`styled-link ${className}`}>  
    {children ? children : `Избранное${typeof count === 'number' ? ` (${count})` : ''}`}
  </Link>
) 