// [ COMPONENTS > CONTROLS > BUTTON ] ##########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import colors from "../../../theme/colors.json";
import spacing from "../../../theme/spacing.json";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. FUNCTIONS ..............................................................

const renderSize = (size) => {
  switch (size) {
    case "small":

    // TODO: add padding for small buttons;

    case "medium":

    // TODO: add padding for medium buttons;

    case "large":
      return `padding: ${spacing.medium} ${spacing["xx-large"]}`;

    default:
      break;
  }
};
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
export const ButtonContainer = styled.a`
  width: fit-content;
  color: inherit;
  cursor: pointer;
  outline: none;
  border: 2px solid ${colors.primary};
  padding: ${spacing.small};
  display: flex;
  position: relative;
  font-family: Rajdhani;
  font-weight: bold;
  align-items: center;
  border-radius: ${spacing["radius-sm"]};
  flex-direction: row;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${colors.primary};
  ${({ size }) => size && renderSize(size)};
  ${({ type }) =>
    type === "outlined" &&
    `border: 2px solid ${colors.black}; 
    background-color: transparent;`};

  span {
    font-family: Rajdhani;
  }
  &:hover {
    color: inherit;
  }

  /*SMART PHONES */
  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;

export const ButtonIcon = styled.span`
  ${({ $position }) =>
    $position === "right" ? "margin-left: 20px" : "margin-right: 20px"}
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
