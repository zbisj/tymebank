// [ COMPONENTS > NAVIGATION > HEADER ] ########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import {
  faBars,
  faSearch,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import {
  Logo,
  Icon,
  ListItem,
  MobileNav,
  ListItems,
  PrimaryNav,
  SecondaryNav,
  HeaderContainer,
} from "./index.styles";
import Button from "../../../components/controls/button";

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................

import LogoImage from "../../../assets/images/logo.svg";
import { ReactComponent as SheildIcon } from "../../../assets/icons/shield.svg";

// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Header = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <HeaderContainer>
      {/* NORMAL NAV */}
      <Logo type="main" src={LogoImage} className="" />
      <PrimaryNav>
        <ListItems>
          <ListItem>
            <a href="#">Personal Banking</a>
            <Icon>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </Icon>
          </ListItem>
          <ListItem>
            <a href="#">Business Banking</a>
            <Icon>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </Icon>
          </ListItem>
          <ListItem>
            <a href="#">Ways to Bank</a>
            <Icon>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </Icon>
          </ListItem>
          <ListItem>
            <a href="#">More Skills</a>
          </ListItem>
          <ListItem>
            <a href="#">Help Centre</a>
          </ListItem>
        </ListItems>
      </PrimaryNav>
      <SecondaryNav>
        <ListItems>
          <ListItem>
            {/* <Search /> */}
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </ListItem>
          <ListItem>
            <Button text="Login" type="outlined" iconLeft={<SheildIcon />} />
          </ListItem>
          <ListItem>
            <Button text="Open Account" />
          </ListItem>
        </ListItems>
      </SecondaryNav>
      {/* MOBILE NAV */}
      <MobileNav>
        <ListItems>
          <ListItem>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </ListItem>
          <ListItem>
            <Logo src={LogoImage} />
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </ListItem>
        </ListItems>
      </MobileNav>
    </HeaderContainer>
  );

  // 1.5.3. RENDER
};

// 1.5. END ....................................................................

// 1.6. STYLES .................................................................
// 1.6. END ....................................................................

// 1.7. PROPS ..................................................................

// 1.7.1. REDUX ................................................................

// 1.7.1. END ..................................................................

// 1.7.2. PROP TYPES

// 1.7.2. END

// 1.7. END ....................................................................

export default Header;

// END FILE ####################################################################
