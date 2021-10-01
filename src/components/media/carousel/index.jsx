// [ COMPONENTS > MEDIA > CAROUSEL ] ###########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useState, useEffect } from "react";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import {
  Item,
  ImageContianer,
  CarouselContent,
  CarouselContianer,
  CarouselNavigator,
  CarouselNavigatorItem,
} from "./index.styles";
import Button from "../../../components/controls/button";

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................

import HeaderImageOne from "../../../assets/images/header-1.webp";
import HeaderImageTwo from "../../../assets/images/header-2.webp";
import HeaderImageFour from "../../../assets/images/header-4.webp";
import HeaderImageThree from "../../../assets/images/header-3.webp";
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Carousel = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................

  const [activeItem, setActiveItem] = useState(1);

  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeItem < 4) setActiveItem((activeItem) => activeItem + 1);
      else {
        setActiveItem((activeItem) => 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeItem]);

  // 1.5.2. END

  const Navigator = ({ $type }) => (
    <CarouselNavigator $type={$type}>
      <ul>
        <CarouselNavigatorItem $active={activeItem === 1 && "true"}>
          <a href="#" onClick={() => setActiveItem(1)}></a>
        </CarouselNavigatorItem>
        <CarouselNavigatorItem $active={activeItem === 2 && "true"}>
          <a href="#" onClick={() => setActiveItem(2)}></a>
        </CarouselNavigatorItem>
        <CarouselNavigatorItem $active={activeItem === 3 && "true"}>
          <a href="#" onClick={() => setActiveItem(3)}></a>
        </CarouselNavigatorItem>
        <CarouselNavigatorItem $active={activeItem === 4 && "true"}>
          <a href="#" onClick={() => setActiveItem(4)}></a>
        </CarouselNavigatorItem>
        <CarouselNavigatorItem $active={activeItem === 5 && "true"}>
          <a href="#" onClick={() => setActiveItem(5)}></a>
        </CarouselNavigatorItem>
      </ul>
    </CarouselNavigator>
  );
  // 1.5.3. RENDER

  return (
    <CarouselContianer>
      <Item $active={activeItem === 1}>
        <CarouselContent>
          <h2>No monthly fees. Just pay-as-you-use banking</h2>
          <Button text="See our low fees" />
          <Navigator $type="main" />
        </CarouselContent>
        <img src={HeaderImageOne} className="img-fluid" />
        <Navigator $type="mobile" />
      </Item>
      <Item $active={activeItem === 2}>
        <CarouselContent>
          <h2>
            Open an account and collect your card at a kiosk at Pick n Pay and
            Boxer stores
          </h2>
          <Button text="See our low fees" />
          <Navigator $type="main" />
        </CarouselContent>
        <ImageContianer>
          <img src={HeaderImageTwo} className="img-fluid" />
          <Navigator $type="mobile" />
        </ImageContianer>
      </Item>
      <Item $active={activeItem === 3}>
        <CarouselContent>
          <h2>
            Dololo paperwork. Dololo stress. Open an account in less than 5
            minutes
          </h2>
          <Button text="See our low fees" />
          <Navigator $type="main" />
        </CarouselContent>
        <ImageContianer>
          <img src={HeaderImageThree} className="img-fluid" />
          <Navigator $type="mobile" />
        </ImageContianer>
      </Item>
      <Item $active={activeItem === 4}>
        <CarouselContent>
          <h2>What’s worth saving for you? For Katrina Esau it’s N|uu</h2>
          <Button text="See our low fees" />
          <Navigator $type="main" />
        </CarouselContent>
        <ImageContianer>
          <img src={HeaderImageFour} className="img-fluid" />
          <Navigator $type="mobile" />
        </ImageContianer>
      </Item>
    </CarouselContianer>
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

export default Carousel;

// END FILE ####################################################################
