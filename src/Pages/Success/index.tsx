import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryman from '../../assets/deliveryman.png'
import {
  SuccessContainer,
  SuccessHeader,
  SuccessMainContainer,
  SuccessMainInfos,
} from './styles'
import { useContext } from 'react'
import { CheckoutContext } from '../../context/CheckoutContext'

export function Success() {
  const { checkoutData } = useContext(CheckoutContext)

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessMainContainer>
        <SuccessMainInfos>
          <div>
            <div>
              <MapPin size={16} weight="fill" color="#FFF" />
            </div>
            <p>
              <strong>
                <span>Entrega em</span> {checkoutData.street},{' '}
                {checkoutData.number}
              </strong>{' '}
              {checkoutData.neighborhood} - {checkoutData.city},{' '}
              {checkoutData.uf}
            </p>
          </div>
          <div>
            <div>
              <Timer size={16} weight="fill" color="#FFF" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <div>
              <CurrencyDollar size={16} weight="fill" color="#FFF" />
            </div>
            <strong>{checkoutData.payment}</strong>
          </div>
        </SuccessMainInfos>
        <img src={deliveryman} alt="" />
      </SuccessMainContainer>
    </SuccessContainer>
  )
}
