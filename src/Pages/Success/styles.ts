import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
`

export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dakr']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessMainContainer = styled.main`
  display: flex;
  gap: 7rem;
  align-items: center;
`

const bgBase = (props: any) => props.theme['base-background']

export const SuccessMainInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: fit-content;

  padding: 2.5rem;
  background: linear-gradient(${bgBase}, ${bgBase}) padding-box,
    linear-gradient(90deg, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      display: flex;
      flex-direction: column;
    }

    span {
      font-size: 1rem;
      font-weight: 400;
    }

    strong {
      font-size: 1rem;
      font-weight: 700;
    }

    div {
      padding: 0.5rem;
      border-radius: 100px;
    }
  }

  div:first-child {
    div {
      background: ${(props) => props.theme.purple};
    }
  }
  div:nth-child(2) {
    div:first-child {
      background: ${(props) => props.theme.yellow};
    }

    div:last-child {
      display: flex;
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
    }
  }
  div:last-child {
    div {
      background: ${(props) => props.theme['yellow-dakr']};
    }
  }
`
