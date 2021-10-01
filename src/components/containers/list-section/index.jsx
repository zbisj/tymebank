// [ COMPONENTS > LAYOUT > LIST SECTION] #######################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";
import PropTypes from "prop-types";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import { Item, MainContainer } from "./index.styles";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const ListSection = ({
  items,
  children,
  contentBg,
  alignItems,
  containerBg,
  flexDirection,
  justifyContent,
}) => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES

  const renderList = (items) =>
    items &&
    items.map((item, index) => (
      <Item key={index} contentBg={contentBg}>
        <img src={item.image} className="img-fluid" />
        <h4>{item.heading}</h4>
        <p>{item.content}</p>
      </Item>
    ));
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <MainContainer
      alignItems={alignItems}
      containerBg={containerBg}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
    >
      {renderList(items)}
      {children}
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

ListSection.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node,
  contentBg: PropTypes.string,
  alignItems: PropTypes.string,
  containerBg: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
};

// 1.7.2. END

// 1.7. END ....................................................................

export default ListSection;

// END FILE ####################################################################
