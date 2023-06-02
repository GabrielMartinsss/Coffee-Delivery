import {
  Location,
  HeaderConteiner,
  Action,
  Cart,
  CartContainer,
  CartCounterContainer,
} from './styles'

import coffeeLogo from '../../assets/coffeeLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  return (
    <HeaderConteiner>
      <NavLink to="/" title="home">
        <img
          src={coffeeLogo}
          alt="copo de café roxo com um foguete branco estampado"
        />
      </NavLink>
      <Action>
        <Location>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Porto Alegre, RS</span>
        </Location>
        <NavLink
          to="/checkout"
          title="checkout"
          style={{ textDecoration: 'none' }}
        >
          <CartContainer>
            <Cart>
              <ShoppingCart weight="fill" color="#C47F17" size={22} />
            </Cart>
            {cart.length > 0 && (
              <CartCounterContainer>
                <span>{cart.length}</span>
              </CartCounterContainer>
            )}
          </CartContainer>
        </NavLink>
      </Action>
    </HeaderConteiner>
  )
}
