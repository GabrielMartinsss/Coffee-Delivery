import styled from 'styled-components'

export const CheckoutFormContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
`

export const CheckoutFormTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme['base-subtitle']};
`

const BaseCheckoutForm = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    div {
      h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']};
      }
      p {
        font-size: 0.875rem;
      }
    }
  }
`

export const CheckoutFormDeliveryAddress = styled(BaseCheckoutForm)`
  margin-top: 1rem;
`

export const CheckoutFormDeliveryAddressInputsContainer = styled.div`
  display: grid;
  gap: 1rem 0.75rem;
  grid-template-columns: 12.5rem minmax(17.25rem, 1fr) 3.75rem;

  margin-top: 2rem;

  input {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
  }

  input::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dakr']};
  }

  div:first-child {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  div:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    input {
      width: 100%;
    }
  }

  div:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;

    input {
      width: 100%;
    }

    input::-webkit-inner-spin-button {
      -moz-appearance: textfield;
      appearance: textfield;

      -webkit-appearance: none;
    }
  }

  div:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    input {
      width: 100%;
    }
  }

  div:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;

    input {
      width: 100%;
    }
  }

  div:nth-child(6) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;

    input {
      width: 100%;
    }
  }

  div:nth-child(7) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;

    input {
      width: 100%;
    }
  }
`

export const CheckoutFormPayment = styled(BaseCheckoutForm)`
  margin-top: 0.75rem;
`

export const CheckoutFormPaymentInputsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    font-size: 0.75rem;
    text-transform: uppercase;

    width: 11.125rem;
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    cursor: pointer;
    transition: background 0.2s;
  }

  label:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input[type='radio'] {
    height: 0;
    width: 0;
    display: none;
  }

  input[type='radio']:checked + label {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const CheckoutFormCoffeesSelectedContainer = styled.section`
  margin-top: 1rem;
  padding: 1rem 2.5rem 2.5rem;

  min-width: 24.875rem;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};
`

export const BaseButton = styled.button`
  display: flex;

  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  color: ${(props) => props.theme['base-white']};
  background: ${(props) => props.theme.yellow};

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dakr']};
  }
`

export const CheckoutFormBtnSubmit = styled(BaseButton)`
  justify-content: center;
`
export const MessageError = styled.span`
  color: #ff3548;
  font-size: 0.75rem;
  font-weight: 400;
`
