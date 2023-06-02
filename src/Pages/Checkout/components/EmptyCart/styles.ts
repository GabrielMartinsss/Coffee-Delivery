import styled from 'styled-components'
import { BaseButton } from '../../styles'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.yellow};
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`
export const EmptyCartBtn = styled(BaseButton)`
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  gap: 0.5rem;
`
