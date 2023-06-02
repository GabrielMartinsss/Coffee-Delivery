import { Minus, Plus, Trash } from 'phosphor-react'

import { CartContext, Coffee } from '../../../../context/CartContext'
import {
  CheckoutFormCoffeeInfo,
  CheckoutFormCoffeeInfoDetails,
  CheckoutFormCoffeeInfoDetailsInput,
  CheckoutFormCoffeeInfoDetailsBtn,
} from './styles'
import { useContext, useEffect, useState } from 'react'

interface CoffeeProps {
  coffee: Coffee
}

export function CheckoutCoffeeInfo({ coffee }: CoffeeProps) {
  const { removeCoffeeOnCart, updadeCoffeeOnCart, calculateValues } =
    useContext(CartContext)
  const [coffeeAmount, setCoffeeAmount] = useState(1)
  const [totalCoffeePrice, setTotalCoffeePrice] = useState<string | number>(0)

  useEffect(() => {
    if (coffee.amount !== undefined) {
      setCoffeeAmount(coffee.amount)
    }

    function calculateTotalCoffeePrice() {
      let total = 0

      if (coffee.amount !== undefined) {
        total += coffee.amount * coffee.price
      }

      const totalFormated = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })

      setTotalCoffeePrice(totalFormated)
    }

    calculateTotalCoffeePrice()
  }, [coffee.amount, coffee.price])

  useEffect(() => {
    calculateValues()
  }, [calculateValues, coffeeAmount])

  function handleSelectMoreCoffeeOnShoppingCart() {
    setCoffeeAmount((state) => {
      if (state >= 10) return 10
      return state + 1
    })

    const teste = coffeeAmount + 1

    updadeCoffeeOnCart(coffee, teste)
  }

  function handleSelectLessCoffeeOnShoppingCart() {
    setCoffeeAmount((state) => {
      if (state === 1) return 1
      return state - 1
    })

    const teste = coffeeAmount - 1

    updadeCoffeeOnCart(coffee, teste)
  }

  function handleRemoveCoffeeOnCart() {
    removeCoffeeOnCart(coffee)
  }

  return (
    <CheckoutFormCoffeeInfo>
      <img src={coffee.coffeeUrlImage} alt="" />

      <CheckoutFormCoffeeInfoDetails>
        <h2>{coffee.coffeeName}</h2>

        <CheckoutFormCoffeeInfoDetailsInput>
          <div>
            <button
              type="button"
              onClick={handleSelectLessCoffeeOnShoppingCart}
            >
              <Minus size={14} />
            </button>
            <input
              type="number"
              value={coffeeAmount}
              onChange={() => console.log('only change in button')}
              disabled
            />
            <button
              type="button"
              onClick={handleSelectMoreCoffeeOnShoppingCart}
            >
              <Plus size={14} />
            </button>
          </div>
          <CheckoutFormCoffeeInfoDetailsBtn
            type="button"
            onClick={handleRemoveCoffeeOnCart}
          >
            <Trash size={16} color="#8047F8" />
            <span>REMOVER</span>
          </CheckoutFormCoffeeInfoDetailsBtn>
        </CheckoutFormCoffeeInfoDetailsInput>
      </CheckoutFormCoffeeInfoDetails>

      <h3>{totalCoffeePrice}</h3>
    </CheckoutFormCoffeeInfo>
  )
}
