import { MapPinLine } from 'phosphor-react'

export function HeaderAddress() {
  return (
    <header>
      <MapPinLine size={22} color="#C47F17" />
      <div>
        <h2>Endereço de Entrega</h2>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </div>
    </header>
  )
}
