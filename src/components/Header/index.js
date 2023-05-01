import GameContext from '../../context/GameContext'
import {
  HeaderCard,
  HeadingContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponent'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value

      return (
        <HeaderCard>
          <HeadingContainer>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </HeadingContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </HeaderCard>
      )
    }}
  </GameContext.Consumer>
)

export default Header
