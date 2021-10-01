// [ COMPONENTS > CONTAINERS > OFFSET SECTION ] ################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  Image,
  Content,
  MainContainer,
  ContentContainer,
} from "./index.styles";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const OffSetSection = ({ type, image, bgColor, children, imagePosition }) => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <MainContainer type={type} bgColor={bgColor}>
      {imagePosition === "left" && <Image src={image} className="img-fluid" />}
      <ContentContainer>
        <Content type={type}>{children}</Content>
      </ContentContainer>
      {imagePosition === "right" && <Image src={image} className="img-fluid" />}
    </MainContainer>
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

OffSetSection.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  imagePosition: PropTypes.oneOf(["left", "right"]),
};

// 1.7.2. END

// 1.7. END ....................................................................

export default OffSetSection;

// END FILE ####################################################################
