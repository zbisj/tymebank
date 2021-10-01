// [ COMPONENTS > CONTAINERS > OFFSET SECTION ] ################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import colors from "../../../theme/colors.json";
import spacing from "../../../theme/spacing.json";
import { addColor } from "../../../theme/utilities";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. FUNCTIONS ..............................................................
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const MainContainer = styled.section`
  display: flex;
  max-height: 100%;
  position: relative;
  flex-direction: row;
  ${({ type }) => type === "mini" && `max-width: 980px; margin: auto;`};
  ${({ bgColor }) => bgColor && `background-color: ${addColor(bgColor)}`};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  transform: translateY(25%);
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    transform: translateY(-25%);
  }
  @media screen and (max-width: 768px) {
    transform: translateY(-25%);
  }
`;

export const Content = styled.div`
  padding: ${spacing.large};
  transform: translateX(-50%);
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 15%);
  border-radius: ${spacing["radius-md"]};
  background-color: ${colors.white};
  ${({ type }) => type === "mini" && `background-color: #262626;`};

  blockquote {
    color: ${colors.white};
    margin: auto 0;
    display: flex;
    font-family: Rajdhani, Roboto;
    flex-direction: column;
    justify-content: flex-end;
  }

  /*SMART PHONES */
  @media screen and (max-width: 425px) {
    height: 477px;
    max-height: fit-content;
  }

  /* TABLETS & SMART PHONES */
  @media screen and (max-width: 768px) {
    max-width: 80%;
    transform: translateX(12%);
  }
`;

export const Image = styled.img`
  width: 65%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// 1.6. END ....................................................................

// END FILE ####################################################################
