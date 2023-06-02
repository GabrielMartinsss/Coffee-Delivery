import expressTradicional from './assets/coffees/ExpressTradicional.png'
import expressAmerican from './assets/coffees/ExpressAmerican.png'
import expressCreamy from './assets/coffees/ExpressCreamy.png'
import expressIce from './assets/coffees/ExpressIce.png'
import coffeeWithMilk from './assets/coffees/CoffeWithMilk.png'
import latte from './assets/coffees/Latte.png'
import capuccino from './assets/coffees/Capuccino.png'
import macchiato from './assets/coffees/Macchiato.png'
import mocaccino from './assets/coffees/Mocaccino.png'
import hotChocolate from './assets/coffees/HotChocolate.png'
import cuban from './assets/coffees/Cuban.png'
import hawaiian from './assets/coffees/Hawaiian.png'
import arabic from './assets/coffees/Arabic.png'
import irish from './assets/coffees/Irish.png'

interface CoffeeListProps {
  coffeeUrlImage: string
  tags: string[]
  coffeeName: string
  descriptions: string
  price: number
}

export const coffeeList: CoffeeListProps[] = [
  {
    coffeeUrlImage: expressTradicional,
    tags: ['Tradicional'],
    coffeeName: 'Expresso Tradicional',
    descriptions: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    coffeeUrlImage: expressAmerican,
    tags: ['Tradicional'],
    coffeeName: 'Expresso Americano',
    descriptions: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    coffeeUrlImage: expressCreamy,
    tags: ['Tradicional'],
    coffeeName: 'Expresso Cremoso',
    descriptions: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    coffeeUrlImage: expressIce,
    tags: ['Tradicional', 'Gelado'],
    coffeeName: 'Expresso Gelado',
    descriptions: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    coffeeUrlImage: coffeeWithMilk,
    tags: ['Tradicional', 'Com Leite'],
    coffeeName: 'Café com Leite',
    descriptions: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    coffeeUrlImage: latte,
    tags: ['Tradicional', 'Com Leite'],
    coffeeName: 'Latte',
    descriptions:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    coffeeUrlImage: capuccino,
    tags: ['Tradicional', 'Com Leite'],
    coffeeName: 'Capuccino',
    descriptions:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    coffeeUrlImage: macchiato,
    tags: ['Tradicional', 'Com Leite'],
    coffeeName: 'Macchiato',
    descriptions:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    coffeeUrlImage: mocaccino,
    tags: ['Tradicional', 'Com Leite'],
    coffeeName: 'Mocaccino',
    descriptions: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    coffeeUrlImage: hotChocolate,
    tags: ['Especial', 'Com Leite'],
    coffeeName: 'Chocolate Quente',
    descriptions:
      'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    coffeeUrlImage: cuban,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    coffeeName: 'Cubano',
    descriptions:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    coffeeUrlImage: hawaiian,
    tags: ['Especial'],
    coffeeName: 'Havaino',
    descriptions: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    coffeeUrlImage: arabic,
    tags: ['Especial'],
    coffeeName: 'Árabe',
    descriptions: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    coffeeUrlImage: irish,
    tags: ['Especial', 'Alcoólico'],
    coffeeName: 'Irlandês',
    descriptions: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
