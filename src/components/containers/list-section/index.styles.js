// [ COMPONENTS > LAYOUT > SECTION] ############################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
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
  margin: auto;
  display: flex;
  padding: ${spacing["xx-large"]} ${spacing.medium};
  ${({ containerBg }) =>
    containerBg && `background-color: ${addColor(containerBg)}`};
  ${({ justifyContianer }) =>
    justifyContianer && `justify-content:${justifyContianer}`};
  ${({ alignItems }) => alignItems && `align-items:${alignItems}`};
  ${({ containerFlexDirection }) =>
    containerFlexDirection && `flex-direction:${containerFlexDirection}`};

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  padding: 0 ${spacing.small};
  ${({ contentBg }) => contentBg && `background-color: ${addColor(contentBg)}`};

  img {
    margin-bottom: ${spacing.medium};
  }
`;

// 1.6. END ....................................................................

// END FILE ####################################################################
