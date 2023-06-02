import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { EmptyCartBtn, EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h3>Seu carrinho está vazio.</h3>
      <h4>Deseja olhar os produtos?</h4>

      <NavLink to="/" title="home" style={{ textDecoration: 'none' }}>
        <EmptyCartBtn>
          <ShoppingCart weight="fill" color="#FFF" />
          COMPRAR
        </EmptyCartBtn>
      </NavLink>
    </EmptyCartContainer>
  )
}
