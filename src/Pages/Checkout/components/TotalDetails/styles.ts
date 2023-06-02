import styled from 'styled-components'

export const CheckoutFormTotalDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 1.5rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4:first-child {
      font-size: 0.875rem;
      font-weight: 400;
    }
    h4:last-child {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  div:last-child {
    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
