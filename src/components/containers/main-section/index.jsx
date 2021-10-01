// [ COMPONENTS > LAYOUT > MAIN SECTION] #######################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  ImageContianer,
  ContentContianer,
  SectionContainer,
} from "./index.styles";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Section = ({
  bgImage,
  bgColor,
  children,
  JustifyContianer,
  leftSectionImage,
  rightSectionImage,
  ContentAlignItems,
  ContainerAlignItems,
  ContentFlexDirection,
  ContainerFlexDirection,
}) => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <SectionContainer
      bgImage={bgImage}
      bgColor={bgColor}
      JustifyContianer={JustifyContianer}
      ContainerAlignItems={ContainerAlignItems}
      ContainerFlexDirection={ContainerFlexDirection}
    >
      <ContentContianer
        leftSectionImage={leftSectionImage}
        ContentAlignItems={ContentAlignItems}
        ContentFlexDirection={ContentFlexDirection}
      >
        {leftSectionImage && (
          <ImageContianer>
            <img src={leftSectionImage} className="img-fluid" />
          </ImageContianer>
        )}
        <div>{children}</div>
        {rightSectionImage && (
          <ImageContianer>
            <img src={rightSectionImage} className="img-fluid" />
          </ImageContianer>
        )}
      </ContentContianer>
    </SectionContainer>
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

Section.propTypes = {
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  JustifyContianer: PropTypes.string,
  leftSectionImage: PropTypes.string,
  rightSectionImage: PropTypes.string,
  ContentAlignItems: PropTypes.string,
  ContainerAlignItems: PropTypes.string,
  ContentFlexDirection: PropTypes.string,
  ContainerFlexDirection: PropTypes.string,
};

// 1.7.2. END

// 1.7. END ....................................................................

export default Section;

// END FILE ####################################################################
