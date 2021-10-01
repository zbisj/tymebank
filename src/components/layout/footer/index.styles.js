// [ COMPONENTS > LAYOUT > FOOTER ] ############################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import styled from "styled-components";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import colors from "../../../theme/colors.json";

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. FUNCTIONS ..............................................................
// 1.5. END ....................................................................

// 1.6. STYLES .................................................................

export const FooterContainer = styled.section`
  padding: 40px 20px;
  border-top: 3px solid ${colors.primary};
  background-color: #262626;
  h6 {
    color: #939598;
    font-size: 12px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 60px;
  }
`;
export const SocilMediaSection = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    padding: 0;

    li {
      list-style: none;

      margin-right: 20px;
    }
  }
`;

export const CovidSection = styled.div`
  color: #939598;
  display: flex;
  flex-direction: column;
  a {
    margin: 40px 0;
    border: 1px solid ${colors.grey};
    background-color: ${colors.grey};
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DownloadSection = styled.div`
  margin: 40px 0;
  div {
    display: flex;
    flex-direction: row;

    a {
      background: ${colors.black};
      padding: 10px;
      border-radius: 5px;
      border: 1px solid ${colors.white};
      &:first-child {
        margin-right: 10px;
      }
      img {
        width: 100px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      a {
        padding: 5px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  div {
    width: 50%;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  ul {
    padding: 0 0 30px;
  }

  @media only screen and (min-width: 700px) and (max-width: 1023px) {
    flex-direction: row;
    div {
      width: 25%;
    }
  }
`;

export const Disclaimer = styled.div`
  display: flex;
  flex-direction: column;

  small {
    color: #939598;
    font-size: 12px;
    margin-top: 20px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    div {
      width: 25%;
    }
    small {
      width: 75%;
    }
  }
`;
export const SocialAndDownloadsSection = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: row;

    div {
      &:first-child {
        width: 25%;
      }
    }
  }
`;
// 1.6. END ....................................................................

// END FILE ####################################################################
