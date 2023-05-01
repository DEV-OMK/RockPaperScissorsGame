import styled from 'styled-components'

export const RulesButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 600px;
  padding: 6px;
  padding-inline: 15px;
  align-self: flex-end;
`

export const PopupContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  padding: 5px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 3px;
    font-size: 15px;
  }
`

export const RulesImage = styled.img`
  width: 90%;
  margin: 30px;
  margin-top: 5px;
  margin-bottom: 10px;

  @media screen and (max-width: 767px) {
    margin: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`
