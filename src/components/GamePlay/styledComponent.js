import styled from 'styled-components'

export const GamePlayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const GameButton = styled.button`
  width: 34%;
  padding: 0px;
  border: none;
  outline: none;
  background-color: transparent;
  flex-shrink: 0;
  margin: 2%;

  @media screen and (max-width: 768px) {
    width: 36%;
  }

  @media screen and (max-width: 576px) {
    width: 40%;
  }
`

export const ButtonImage = styled.img`
  width: 50%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`
