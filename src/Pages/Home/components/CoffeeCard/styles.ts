import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: calc(0px - 1.5rem - 1.25rem);
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2.0625rem;
  }
`
export const CoffeeCardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dakr']};

    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    text-transform: uppercase;
  }
`
export const CoffeeCardBuySection = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 0.25rem;

  h4 {
    flex: 1;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    margin-right: 1.4375rem;

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  img {
    object-fit: contain;
    bottom: 0;
    align-self: flex-end;
  }
`

export const CoffeeCardBuySectionInput = styled.div`
  display: flex;
  align-items: center;

  margin-right: 0.5rem;
  height: 2.375rem;
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
`
export const ButtonAddCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
