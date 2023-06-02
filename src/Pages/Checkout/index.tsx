import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { CheckoutContext } from '../../context/CheckoutContext'
import { CheckoutCoffeeInfo } from './components/CheckoutCoffeeInfo'
import { useNavigate } from 'react-router-dom'

import { Bank, CreditCard, Money } from 'phosphor-react'

import {
  CheckoutFormBtnSubmit,
  CheckoutFormCoffeesSelectedContainer,
  CheckoutFormContainer,
  CheckoutFormDeliveryAddress,
  CheckoutFormDeliveryAddressInputsContainer,
  CheckoutFormPayment,
  CheckoutFormPaymentInputsContainer,
  CheckoutFormTitle,
  MessageError,
} from './styles'
import { HeaderPaymentMethod } from './components/HeaderPaymentMethod'
import { HeaderAddress } from './components/HeaderAddress'
import { TotalDetails } from './components/TotalDetails'
import { EmptyCart } from './components/EmptyCart'

export function Checkout() {
  const { cart, calculateValues, removeAllCoffeesOnCart } =
    useContext(CartContext)

  const { purchase } = useContext(CheckoutContext)
  const navigate = useNavigate()

  const checkoutFormValidationSchema = zod.object({
    cep: zod
      .string()
      .min(8, 'Minimo 8 caracteres')
      .max(9, 'Maximo 9 caracteres'),
    street: zod
      .string()
      .nonempty({ message: 'A rua é obrigatória' })
      .min(4, 'Minimo 4 caracteres'),
    number: zod
      .string()
      .min(1, 'Minimo 1 caracter')
      .max(5, 'Maximo 5 caracters'),
    complement: zod.string(),
    neighborhood: zod.string().min(4, 'Minimo 4 caracters'),
    city: zod.string().min(4, 'Minimo 4 caracters'),
    uf: zod.string().min(2, 'Minimo 2 caracters').max(2, 'Maximo 2 caracters'),
    payment: zod.string(),
  })

  type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

  const CheckoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors } /*, watch, reset */,
  } = CheckoutForm

  function handleCheckout(data: CheckoutFormData) {
    purchase(data)
    navigate('/success')
    removeAllCoffeesOnCart()
  }

  useEffect(() => {
    calculateValues()
  }, [cart, calculateValues])

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleCheckout)}>
      <div>
        <CheckoutFormTitle>Complete seu pedido</CheckoutFormTitle>
        <CheckoutFormDeliveryAddress>
          <HeaderAddress />

          <CheckoutFormDeliveryAddressInputsContainer>
            <div>
              <input
                type="text"
                id="cep"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors.cep && (
                <MessageError> {errors.cep.message} </MessageError>
              )}
            </div>
            <div>
              <input
                type="text"
                id="street"
                placeholder="Rua"
                {...register('street')}
              />
              {errors.street && (
                <MessageError>{errors.street.message}</MessageError>
              )}
            </div>
            <div>
              <input
                type="number"
                id="number"
                placeholder="Número"
                {...register('number')}
              />
              {errors.number && (
                <MessageError> {errors.number.message} </MessageError>
              )}
            </div>
            <div>
              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors.neighborhood && (
                <MessageError> {errors.neighborhood.message} </MessageError>
              )}
            </div>
            <div>
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city && (
                <MessageError> {errors.city.message} </MessageError>
              )}
            </div>
            <div>
              <input type="text" id="uf" placeholder="UF" {...register('uf')} />
              {errors.uf && <MessageError> {errors.uf.message} </MessageError>}
            </div>
          </CheckoutFormDeliveryAddressInputsContainer>
        </CheckoutFormDeliveryAddress>

        <CheckoutFormPayment>
          <HeaderPaymentMethod />

          <CheckoutFormPaymentInputsContainer>
            <input
              type="radio"
              id="creditCard"
              value="Cartão de Crédito"
              {...register('payment')}
            />
            <label htmlFor="creditCard">
              <CreditCard size={16} color="#8047F8" />
              <span>cartão de crédito</span>
            </label>

            <input
              type="radio"
              id="debitCard"
              value="Cartão de débito"
              {...register('payment')}
            />
            <label htmlFor="debitCard">
              <Bank size={16} color="#8047F8" />
              <span>cartão de débito</span>
            </label>

            <input
              type="radio"
              id="money"
              value="Dinheiro"
              {...register('payment')}
            />
            <label htmlFor="money">
              <Money size={16} color="#8047F8" />
              <span>Dinheiro</span>
            </label>
          </CheckoutFormPaymentInputsContainer>
        </CheckoutFormPayment>
      </div>

      <div>
        <CheckoutFormTitle>Cafés selecionados</CheckoutFormTitle>
        <CheckoutFormCoffeesSelectedContainer>
          {cart.length > 0 ? (
            <>
              {cart.map((coffee) => {
                return (
                  <CheckoutCoffeeInfo key={coffee.coffeeName} coffee={coffee} />
                )
              })}

              <TotalDetails />

              <CheckoutFormBtnSubmit type="submit">
                CONFIRMAR PEDIDO
              </CheckoutFormBtnSubmit>
            </>
          ) : (
            <EmptyCart />
          )}
        </CheckoutFormCoffeesSelectedContainer>
      </div>
    </CheckoutFormContainer>
  )
}
