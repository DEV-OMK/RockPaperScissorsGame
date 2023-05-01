import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  background-color: #223a5f;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
