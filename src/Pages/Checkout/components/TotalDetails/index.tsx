import { useContext } from 'react'
import { CheckoutFormTotalDetails } from './styles'
import { CartContext } from '../../../../context/CartContext'

export function TotalDetails() {
  const { totalItemPrice, totalToBuy } = useContext(CartContext)

  return (
    <CheckoutFormTotalDetails>
      <div>
        <h4>Total de itens</h4>
        <h4>{totalItemPrice}</h4>
      </div>
      <div>
        <h4>entrega</h4>
        <h4>R$ 3.50</h4>
      </div>
      <div>
        <h4>Total</h4>
        <h4>{totalToBuy}</h4>
      </div>
    </CheckoutFormTotalDetails>
  )
}
