import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  RulesButton,
  CloseButton,
  RulesImage,
  PopupContainer,
} from './styledComponent'

const Rules = () => (
  <Popup trigger={<RulesButton>Rules</RulesButton>} modal>
    {close => (
      <PopupContainer className="modal">
        <CloseButton type="button" className="close" onClick={close}>
          <RiCloseLine />
        </CloseButton>
        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopupContainer>
    )}
  </Popup>
)

export default Rules
