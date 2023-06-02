import { CurrencyDollar } from 'phosphor-react'

export function HeaderPaymentMethod() {
  return (
    <header>
      <CurrencyDollar size={22} color="#8047F8" />
      <div>
        <h2>Pagamento</h2>
        <p>
          O pagamento é feito na entrega. Escolha a forma de que deseja pagar
        </p>
      </div>
    </header>
  )
}
