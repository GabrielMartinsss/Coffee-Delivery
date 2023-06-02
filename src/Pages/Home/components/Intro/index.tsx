import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../../../assets/coffee.png'

import {
  Icon01,
  Icon02,
  Icon03,
  Icon04,
  IntroContainer,
  IntroItems,
  IntroItemsContainer,
  IntroLeftSide,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroLeftSide>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o CoffeeIcon Delivery você recebe seu café onde estiver, a
          qualquer hora
        </p>
        <IntroItemsContainer>
          <IntroItems>
            <Icon01>
              <ShoppingCart size={16} weight="fill" color="#FFF" />
            </Icon01>
            <span>Compra simples e segura</span>
          </IntroItems>
          <IntroItems>
            <Icon02>
              <Package size={16} weight="fill" color="#FFF" />
            </Icon02>
            <span>Compra simples e segura</span>
          </IntroItems>
          <IntroItems>
            <Icon03>
              <Timer size={16} weight="fill" color="#FFF" />
            </Icon03>
            <span>Compra simples e segura</span>
          </IntroItems>
          <IntroItems>
            <Icon04>
              <Coffee size={16} weight="fill" color="#FFF" />
            </Icon04>
            <span>Compra simples e segura</span>
          </IntroItems>
        </IntroItemsContainer>
      </IntroLeftSide>
      <img src={coffee} alt="" />
    </IntroContainer>
  )
}
