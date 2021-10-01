// [ COMPONENTS > MEDIA > CAROUSEL ] ###########################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import colors from "../../../theme/colors.json";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
import TextureImage from "../../../assets/images/backgrounds/texture.jpg";
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. FUNCTIONS ..............................................................
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const CarouselContianer = styled.section`
  width: 100%;
  height: 490px;
  position: relative;
  background-size: cover;
  background-image: url(${TextureImage});
  background-repeat: repeat;

  /* TABLET */
  @media screen and (max-width: 768px) {
    height: 700px;
  }

  /* TABLET */
  @media screen and (max-width: 321px) {
    height: 400px;
  }
`;

export const ImageContianer = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CarouselContent = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const Item = styled.div`
  height: 100%;
  padding: 40px 10% 0 10%;
  display: flex;
  position: absolute;
  justify-content: center;
  div {
    width: 50%;
  }

  @media screen and (max-width: 679px) {
    padding: 40px 5% 0 5%;
  }
  /* TABLET */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 5% 0 5%;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 20% 0 20%;
  }
  ${({ $active }) => ($active ? "opacity: 1;" : "opacity: 0;")}
`;

export const CarouselNavigator = styled.div`
  bottom: 20px;
  position: absolute;

  ul {
    padding: 0;
    display: flex;
  }

  ${({ $type }) =>
    $type === "mobile"
      ? `@media screen and (max-width: 768px) {
        display: block
      };
      @media screen and (min-width: 769px) {
        display: none
      };
     `
      : `@media screen and (max-width: 768px) {
        display: none
      };
      @media screen and (min-width: 769px) {
        display: block
      };`}
`;
export const CarouselNavigatorItem = styled.li`
  width: 20px;
  height: 5px;
  list-style: none;
  margin-right: 10px;
  background-color: ${colors.grey};
  ${({ $active }) => $active && `background-color: ${colors.primary}`};
`;

// 1.6. END ....................................................................

// END FILE ####################################################################
