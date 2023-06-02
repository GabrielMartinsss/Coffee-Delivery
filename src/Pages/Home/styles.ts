import styled from 'styled-components'

export const HomeContainer = styled.div``

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const CoffeeListHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  button {
    font-size: 0.625rem;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.yellow};
    background: transparent;

    padding: 0.375rem 0.75rem;
    border: 1px solid ${(props) => props.theme.yellow};
    border-radius: 100px;

    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme['base-white']};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
    }
  }
`

export const CoffeeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 3.375rem 0 9.8125rem;
  gap: 2.5rem 2rem;
`
