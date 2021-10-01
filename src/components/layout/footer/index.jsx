// [ COMPONENTS > LAYOUT > FOOTER] #############################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from "react";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................
import {
  Content,
  Disclaimer,
  CovidSection,
  DownloadSection,
  FooterContainer,
  SocilMediaSection,
  SocialAndDownloadsSection,
} from "./index.styles";
import Button from "../../controls/button";
// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................
import { ReactComponent as WhiteLogo } from "../../../assets/images/white-logo.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/icons/youtube.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";
import GooglePlayImage from "../../../assets/images/googleplay.svg";
import AppGalleryImage from "../../../assets/images/appgallery.svg";
// 1.3. END ....................................................................

// 1.4. DATA ...................................................................
// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Footer = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................
  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES
  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <FooterContainer>
      <CovidSection>
        <div>
          <h5>COVID-19: South African Resource Portal</h5>
          <small>
            Visit the South African Department of Health's online portal for
            official information regarding the COVID-19 pandemic as well as
            government's response.
          </small>
        </div>
        <Button text="Vist Portal" />
      </CovidSection>
      <Content>
        <div>
          <h6>Products</h6>
          <ul>
            <li>
              <a href="#">Personal Banking</a>
            </li>
            <li>
              <a href="#">Business Banking</a>
            </li>
            <li>
              <a href="#">MoreTyme: Buy Now, Pay Later</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Explore</h6>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Partner with Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>About us</h6>
          <ul>
            <li>
              <a href="#">About Tymebank</a>
            </li>
            <li>
              <a href="#">Press Office</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 href="#">Legal</h6>
          <ul>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">PAIA Manual</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Competition Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Conflict of Interest Policy</a>
            </li>
          </ul>
        </div>
      </Content>
      <div>
        <SocialAndDownloadsSection>
          <SocilMediaSection>
            <h6>Connect with Tymebank</h6>
            <ul>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </SocilMediaSection>
          <DownloadSection>
            <h6>Get the banking app</h6>
            <div>
              <a href="#">
                <img src={GooglePlayImage} className="img-fluid" />
              </a>
              <a href="#">
                <img src={AppGalleryImage} className="img-fluid" />
              </a>
            </div>
          </DownloadSection>
        </SocialAndDownloadsSection>
        <Disclaimer>
          <div>
            <WhiteLogo />
          </div>
          <small>
            TymeBank is an Authorised Financial Services (FSP 49140) and
            Registered Credit Provider (NCRCP 10774). Tyme Bank Limited Reg no:
            2015/231510/06
            <br />© 2021 TymeBank. All rights reserved.
          </small>
        </Disclaimer>
      </div>
    </FooterContainer>
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

export default Footer;

// END FILE ####################################################################
