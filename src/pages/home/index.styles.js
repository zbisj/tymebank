// [ PAGES > HOME] ############################################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import colors from "../../theme/colors.json";
import { addColor } from "../../theme/utilities";

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. FUNCTIONS ..............................................................
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const HomeContainer = styled.div`
  position: relative;
`;

export const Header3 = styled.h3`
  text-align: ${({ textalign }) => (textalign ? textalign : "center")};
`;

export const Header4 = styled.h4`
  color: ${colors.grey};
  text-align: ${({ textalign }) => (textalign ? textalign : "center")};

  text-transform: uppercase;
`;

export const Header2 = styled.h2`
  color: ${({ color }) => (color ? addColor(color) : colors.black)};
  @media screen and (min-width: 700px) {
    font-size: 45px;
  }
`;

export const SectionParagraph = styled.p`
  color: ${({ color }) => (color ? addColor(color) : colors.black)};
  text-align: ${({ textalign }) => (textalign ? textalign : "center")};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ fontFamily }) =>
    fontFamily &&
    `font-family: ${fontFamily === "primary" ? "Rajdhani" : "Roboto"}`}
`;

export const Blockquote = styled.blockquote`
  p {
    font-size: 26px;
    font-weight: 600;
    font-family: Rajdhani;
  }

  cite {
    color: #939598;
    margin-top: 20px;
    font-style: normal;
    font-weight: 600;
    font-family: Rajdhani;
  }
`;

export const SlideArrows = styled.div`
  left: 35px;
  width: fit-content;
  bottom: -30px;
  display: flex;
  position: absolute;

  button {
    border: 1px solid ${colors.primary};
    padding: 20px;
    background-color: ${colors.primary};
  }
`;

export const StickyButtons = styled.nav`
  left: 0;
  width: 100%;
  bottom: 0;
  display: flex;
  position: fixed;
  box-shadow: 0 -1px 6px 0 rgb(0 0 0 / 15%);
  justify-content: space-evenly;

  a {
    width: 100%;
    color: ${colors.black};
    z-index: 20;
    padding: 20px;
    text-align: center;
    font-weight: 600;
    font-family: Rajdhani;
    text-transform: uppercase;
    text-decoration: none;
    background-color: ${colors.primary};

    &:first-child {
      border-right: 3px solid ${colors.white};
    }

    svg {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    opacity: 1;
  }

  @media screen and (min-width: 769px) {
    opacity: 0;
  }
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
