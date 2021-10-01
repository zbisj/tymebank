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

export const SectionContainer = styled.section`
  display: flex;
  padding: ${spacing["xx-large"]} 0;
  ${({ bgImage }) => bgImage && ` background-image: url(${bgImage})`};
  ${({ bgColor }) => bgColor && `background-color: ${addColor(bgColor)}`};
  ${({ JustifyContianer }) =>
    JustifyContianer && `justify-content:${JustifyContianer}`};
  ${({ ContainerAlignItems }) =>
    ContainerAlignItems && `align-items:${ContainerAlignItems}`};
  ${({ ContainerFlexDirection }) =>
    ContainerFlexDirection && `flex-direction:${ContainerFlexDirection}`};
  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }
`;

export const ContentContianer = styled.div`
  display: flex;
  padding: 0 ${spacing.medium};
  max-width: 67%;
  min-width: 100%;
  position: relative;
  ${({ ContentAlignItems }) =>
    ContentAlignItems && `align-items:${ContentAlignItems}`};
  ${({ ContentFlexDirection }) =>
    ContentFlexDirection && `flex-direction:${ContentFlexDirection}`};
  @media screen and (max-width: 425px) {
    ${({ leftSectionImage }) =>
      leftSectionImage
        ? "flex-direction: column-reverse;"
        : "flex-direction: column;"};
  }
`;

export const ImageContianer = styled.div`
  img {
    ${({ overFlow }) => overFlow && "width: 80%;"};
  }
`;

// 1.6. END ....................................................................

// END FILE ####################################################################
