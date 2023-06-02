import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5.875rem 0;

  img {
    filter: drop-shadow(0px 10px 50px rgba(235, 193, 54, 0.3));
  }
`

export const IntroLeftSide = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroItemsContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

export const IntroItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const BaseIntroIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 100px;
`
export const Icon01 = styled(BaseIntroIcons)`
  background: ${(props) => props.theme['yellow-dakr']};
`
export const Icon02 = styled(BaseIntroIcons)`
  background: ${(props) => props.theme['base-text']};
`
export const Icon03 = styled(BaseIntroIcons)`
  background: ${(props) => props.theme.yellow};
`
export const Icon04 = styled(BaseIntroIcons)`
  background: ${(props) => props.theme.purple};
`
