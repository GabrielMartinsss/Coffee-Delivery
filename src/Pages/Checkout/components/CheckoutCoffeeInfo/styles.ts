import styled from 'styled-components'

export const CheckoutFormCoffeeInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  h3 {
    width: 4rem;
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 700;
  }
`

export const CheckoutFormCoffeeInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`

export const CheckoutFormCoffeeInfoDetailsInput = styled.div`
  display: flex;
  width: 10.625rem;

  div {
    display: flex;
    align-items: center;

    margin-right: 0.5rem;
    height: 2rem;
    width: 5rem;
    padding: 0.53125rem 0.5rem;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    button {
      display: flex;
      align-items: center;

      border: 0;
      outline: none;
      background: ${(props) => props.theme['base-button']};
      cursor: pointer;
      color: ${(props) => props.theme.purple};
    }

    button:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    button:first-child {
      margin-right: 2px;
    }

    input {
      border: 0;
      background: ${(props) => props.theme['base-button']};
      height: 100%;

      font-size: 1rem;

      text-align: center;
      max-width: 1.5rem;

      -moz-appearance: textfield;
      appearance: textfield;
    }

    input:disabled {
      color: ${(props) => props.theme['base-subtitle']};
    }

    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`

export const CheckoutFormCoffeeInfoDetailsBtn = styled.button`
  display: flex;
  align-items: center;

  height: 2rem;
  padding: 0.40625rem 0.5rem;
  border: 0;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  transition: background 0.2s;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    line-height: 2;
    margin-left: 0.25rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
