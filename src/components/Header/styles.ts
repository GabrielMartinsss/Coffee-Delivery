import styled from 'styled-components'

export const HeaderConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BaseAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.625rem 0.5rem;

  border-radius: 6px;

  span {
    font-size: 0.875rem;
  }
`

export const Location = styled(BaseAction)`
  background: ${(props) => props.theme['purple-light']};

  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartContainer = styled.div`
  position: relative;
`

export const CartCounterContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: calc(0px - 0.5rem);
  margin-top: calc(0px - 0.5rem);
  width: 1.25rem;
  height: 1.25rem;

  border-radius: 100px;
  background: ${(props) => props.theme['yellow-dakr']};

  span {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-white']};
  }
`

export const Cart = styled.button`
  display: flex;
  align-items: center;

  padding: 0.625rem 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};

  cursor: pointer;

  transition: transform 0.3s;

  &:active {
    outline: none;
    transform: scale(1.1);
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dakr']};
  }

  &:focus {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dakr']};
  }

  &:hover {
    transform: scale(1.1);
  }
`
