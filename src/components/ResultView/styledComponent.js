import styled from 'styled-components'

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlayerAndItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
`
export const Player = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const Item = styled.img`
  width: 50%;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 600;
  font-size: 24px;
  align-self: center;
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500px;
  padding: 5px;
  padding-inline: 20px;
  align-self: center;
`
