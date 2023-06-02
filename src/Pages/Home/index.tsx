import { useState } from 'react'

import {
  CoffeeSection,
  CoffeeListContainer,
  CoffeeListHeader,
  HomeContainer,
} from './styles'

import { coffeeList } from '../../coffeeList'

import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'

interface Coffee {
  coffeeUrlImage: string
  tags: string[]
  coffeeName: string
  descriptions: string
  price: number
}

export function Home() {
  const [coffeeListWithFilter, setCoffeeListWithFilter] = useState<
    Coffee[] | null
  >(null)

  function handleFilterCoffee(tag: string) {
    if (tag === 'Todos') {
      setCoffeeListWithFilter(null)
      return
    }
    const coffeesFinded = coffeeList.filter((coffee) => {
      if (
        coffee.tags[0] === tag ||
        coffee.tags[1] === tag ||
        coffee.tags[2] === tag
      ) {
        return coffee
      }
      return ''
    })
    setCoffeeListWithFilter(coffeesFinded)
  }

  return (
    <HomeContainer>
      <Intro />
      <CoffeeListContainer>
        <CoffeeListHeader>
          <h2>Nossos cafés</h2>
          <nav>
            <button onClick={() => handleFilterCoffee('Todos')}>TODOS</button>

            <button onClick={() => handleFilterCoffee('Tradicional')}>
              TRADICIONAL
            </button>
            <button onClick={() => handleFilterCoffee('Especial')}>
              ESPECIAL
            </button>
            <button onClick={() => handleFilterCoffee('Com Leite')}>
              COM LEITE
            </button>
            <button onClick={() => handleFilterCoffee('Alcoólico')}>
              ALCOÓLICO
            </button>
            <button onClick={() => handleFilterCoffee('Gelado')}>GELADO</button>
          </nav>
        </CoffeeListHeader>

        <CoffeeSection>
          {coffeeListWithFilter &&
            coffeeListWithFilter.map((coffee) => {
              return <CoffeeCard key={coffee.coffeeName} content={coffee} />
            })}

          {!coffeeListWithFilter &&
            coffeeList.map((coffee) => {
              return <CoffeeCard key={coffee.coffeeName} content={coffee} />
            })}
        </CoffeeSection>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
