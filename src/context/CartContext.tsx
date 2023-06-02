import { createContext, useState, ReactNode } from 'react'

export interface Coffee {
  coffeeUrlImage: string
  tags: string[]
  coffeeName: string
  descriptions: string
  price: number
  amount?: number
}

interface CartContextType {
  cart: Coffee[]
  totalToBuy: string | number
  totalItemPrice: string | number
  addCoffeeOnCart: (content: Coffee, coffeeAmount: number) => void
  removeCoffeeOnCart: (content: Coffee) => void
  removeAllCoffeesOnCart: () => void
  updadeCoffeeOnCart: (content: Coffee, coffeeAmount: number) => void
  calculateValues: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])

  const [totalItemPrice, setTotalItemPrice] = useState<string | number>(0)
  const [totalToBuy, setTotalToBuy] = useState<string | number>(0)

  function addCoffeeOnCart(content: Coffee, coffeeAmount: number) {
    let isCartAlreadyHasThisCoffee = false

    cart.forEach((item) => {
      if (item.coffeeName === content.coffeeName) {
        isCartAlreadyHasThisCoffee = true
      }
    })

    if (isCartAlreadyHasThisCoffee) {
      cart.forEach((item) => {
        if (item.coffeeName === content.coffeeName) {
          if (item.amount !== undefined) {
            const canAddMoreCoffeeOnCart =
              item.amount === 1 ||
              (item.amount <= 10 && item.amount + coffeeAmount <= 10)

            if (canAddMoreCoffeeOnCart) {
              item.amount += coffeeAmount
            } else {
              alert('O numero maximo de pedidos do mesmo sabor é 10 unidades')
            }
          }
        }
      })
    } else {
      const newRequest: Coffee = {
        coffeeUrlImage: content.coffeeUrlImage,
        tags: content.tags,
        coffeeName: content.coffeeName,
        descriptions: content.descriptions,
        price: content.price,
        amount: coffeeAmount,
      }

      setCart((state) => [...state, newRequest])
    }
  }

  function removeCoffeeOnCart(content: Coffee) {
    const cartWithoutCoffeeWasRemoved = cart.filter((item) => {
      return item.coffeeName !== content.coffeeName
    })

    setCart(cartWithoutCoffeeWasRemoved)
  }

  function updadeCoffeeOnCart(content: Coffee, coffeeAmount: number) {
    cart.map((item) => {
      if (item.coffeeName === content.coffeeName) {
        item.amount = coffeeAmount
      }
      return item
    })
  }

  function removeAllCoffeesOnCart() {
    setCart([])
  }

  function calculateValues() {
    const feeDelivery = 3.5
    let totalWithoutFee = 0
    let totalWithFee = 0

    cart.forEach((item) => {
      if (item.amount !== undefined) {
        totalWithoutFee += item.price * item.amount
      }
    })

    totalWithFee = totalWithoutFee + feeDelivery

    const totalFormatedWithoutFee = totalWithoutFee.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const totalFormatedWithFee = totalWithFee.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    setTotalItemPrice(totalFormatedWithoutFee)
    setTotalToBuy(totalFormatedWithFee)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalToBuy,
        totalItemPrice,
        addCoffeeOnCart,
        removeCoffeeOnCart,
        removeAllCoffeesOnCart,
        updadeCoffeeOnCart,
        calculateValues,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
