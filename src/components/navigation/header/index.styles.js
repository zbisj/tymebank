// [ COMPONENTS > NAVIGATION > HEADER ] ########################################

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
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const HeaderContainer = styled.header`
  top: 0;
  z-index: 10;
  display: flex;
  padding: ${spacing.small};
  position: sticky;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 15%);
`;
export const ListItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  list-style: none;
  a {
    font-weight: 600;
    font-family: Rajdhani;
    text-decoration: none;
    color: #262626;
    outline: none;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;

export const PrimaryNav = styled.nav`
  width: 60%;
  padding: 0 40px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  li {
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SecondaryNav = styled.nav`
  width: 30%;
  display: flex;
  padding: 0 40px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;

  li {
    margin-right: 10px;
  }
  button {
    padding: 12px 20px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    svg {
      width: 35px;
      height: 35px;
    }
  }
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Logo = styled.img`
  ${({ type }) =>
    type === "main" &&
    `
      @media screen and (max-width: 1024px) {
        display: none;
      }
    `}
  height: ${spacing["x-large"]};
`;

export const Icon = styled.span`
  svg {
    margin-left: 10px;
  }
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
