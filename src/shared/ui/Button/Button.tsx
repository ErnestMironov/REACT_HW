import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`my-btn ${props.className || ''}`.trim()}>
      {children}
    </button>
  )
} 