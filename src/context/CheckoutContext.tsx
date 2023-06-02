import { ReactNode, createContext, useState } from 'react'

interface Checkout {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  uf: string
  payment: string
}

interface CheckoutProps {
  checkoutData: Checkout
  purchase: (data: Checkout) => void
}

interface CheckoutContextProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutProps)

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutData, setCheckoutData] = useState<Checkout>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
    payment: '',
  })

  function purchase(data: Checkout) {
    setCheckoutData(data)
  }

  return (
    <CheckoutContext.Provider value={{ checkoutData, purchase }}>
      {children}
    </CheckoutContext.Provider>
  )
}
