import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { Coffee, CartContext } from '../../../../context/CartContext'

import {
  ButtonAddCart,
  CoffeeCardContainer,
  CoffeeCardBuySection,
  CoffeeCardBuySectionInput,
  CoffeeCardTags,
} from './styles'

interface CoffeeCardProps {
  content: Coffee
}

export function CoffeeCard({ content }: CoffeeCardProps) {
  const { addCoffeeOnCart } = useContext(CartContext)

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function handleSelectMoreCoffeeOnShoppingCart() {
    setCoffeeAmount((state) => {
      if (state >= 10) return 10
      return state + 1
    })
  }

  function handleSelectLessCoffeeOnShoppingCart() {
    setCoffeeAmount((state) => {
      if (state === 1) return 1
      return state - 1
    })
  }

  function handleAddCoffeeOnShoppingCart() {
    addCoffeeOnCart(content, coffeeAmount)
  }

  return (
    <CoffeeCardContainer>
      <img src={content.coffeeUrlImage} alt="" />
      <CoffeeCardTags>
        {content.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </CoffeeCardTags>
      <h3>{content.coffeeName}</h3>
      <p>{content.descriptions}</p>
      <CoffeeCardBuySection>
        <h4>
          R$ <span>{content.price}</span>
        </h4>
        <CoffeeCardBuySectionInput>
          <button type="button" onClick={handleSelectLessCoffeeOnShoppingCart}>
            <Minus size={14} />
          </button>
          <input
            type="number"
            value={coffeeAmount}
            onChange={() => console.log('only change in button')}
            disabled
          />
          <button type="button" onClick={handleSelectMoreCoffeeOnShoppingCart}>
            <Plus size={14} />
          </button>
        </CoffeeCardBuySectionInput>
        <ButtonAddCart onClick={handleAddCoffeeOnShoppingCart}>
          <ShoppingCart color="#FFF" weight="fill" size={22} />
        </ButtonAddCart>
      </CoffeeCardBuySection>
    </CoffeeCardContainer>
  )
}
