// [ PAGES > HOME ] ############################################################

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import {
  Header2,
  Header3,
  Header4,
  Blockquote,
  SlideArrows,
  StickyButtons,
  HomeContainer,
  SectionParagraph,
} from "./index.styles";
import Footer from "../../components/layout/footer";
import Button from "../../components/controls/button";
import Header from "../../components/navigation/header";
import Section from "../../components/containers/main-section";
import Carousel from "../../components/media/carousel";
import ListSection from "../../components/containers/list-section";
import OffSetSection from "../../components/containers/offset-section";

// 1.2. END ....................................................................

// 1.3. IMAGES .................................................................

import BadgeImage from "../../assets/images/badge.png";
import ChartImage from "../../assets/images/chart.png";
import KioskImage from "../../assets/images/kiosk.webp";
import SupportImage from "../../assets/images/support.png";
import YellowPattern from "../../assets/images/backgrounds/yellow-pattern.png";
import GoalSaveImage from "../../assets/images/goal-save.webp";
import SendMoneyImage from "../../assets/images/send-money.webp";
import TestimonialImage from "../../assets/images/testimonial.webp";
import SmartShopperImage from "../../assets/images/smart-shopper.webp";
import { ReactComponent as SheildIcon } from "../../assets/icons/shield.svg";

// 1.3. END ....................................................................

// 1.4. DATA ...................................................................

import testimonials from "../../data/testimonials.json";

// 1.4. END ....................................................................

// 1.5. GLOBALS ................................................................
// 1.5. END ....................................................................

// 1.5. COMPONENT ..............................................................

const Home = () => {
  // 1.5.1. HOOKS & API CALLS ..................................................

  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeQuote < 6) setActiveQuote((activeQuote) => activeQuote + 1);
      else {
        setActiveQuote((activeQuote) => 0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeQuote]);

  // 1.5.1. END ................................................................

  // 1.5.2. FUNCTIONS & LOCAL VARIABLES

  const renderQuotes = (testimonials) => {
    return testimonials.map((testimonial, index) => {
      if (index === activeQuote) {
        return (
          <Blockquote key={index}>
            <p>"{testimonial.testimonial}"</p>
            <cite>{testimonial.name}</cite>
          </Blockquote>
        );
      }
    });
  };

  // 1.5.2. END

  // 1.5.3. RENDER

  return (
    <HomeContainer>
      <Header />
      <Carousel />
      <Section
        bgImage={YellowPattern}
        alignItems="center"
        JustifyContianer="center"
        ContentAlignItems="center"
        ContentFlexDirection="column"
      >
        <Header3>
          Over 3 million people in Mzansi have joined us. You can too!
        </Header3>
        <SectionParagraph>
          Open your EveryDay account hona jwale and collect your free Visa debit
          card at a TymeBank kiosk in a Pick n Pay or Boxer store later. All you
          need is your SA ID number and cellphone.
        </SectionParagraph>
        <Button
          size="large"
          text="Join us in less than 5 minutes"
          type="outlined"
          iconRight={<FontAwesomeIcon icon={faArrowRight} size="xs" />}
        />
      </Section>
      <Section
        alignItems="center"
        JustifyContianer="center"
        ContentAlignItems="center"
        ContentFlexDirection="column"
      >
        <Header4>Who are we</Header4>
        <SectionParagraph fontWeight="bold" fontFamily="primary">
          TymeBank is a new kind of bank that’s digitally smart. The money we
          save by not having branches means you pay a lot less for banking, like
          no monthly fees and only pay for what you use.
        </SectionParagraph>
      </Section>
      <Section
        bgColor="lightGrey"
        ContentAlignItems="center"
        ContentFlexDirection="row"
        leftSectionImage={GoalSaveImage}
      >
        <span textalign="left">Save & Earn</span>
        <Header2>Earn up to 8%* interest a year </Header2>
        <SectionParagraph color="grey" fontWeight="bold" fontFamily="primary">
          TymeBank is a new kind of bank that’s digitally smart. The money we
          save by not having branches means you pay a lot less for banking, like
          no monthly fees and only pay for what you use.
        </SectionParagraph>
        <Button
          size="large"
          text="Join us in less than 5 minutes"
          type="contained"
          iconRight={<FontAwesomeIcon icon={faArrowRight} />}
        />
      </Section>
      {/* SEND MONEY */}
      <Section
        bgColor="lightGrey"
        ContentAlignItems="center"
        ContentFlexDirection="row"
        rightSectionImage={SendMoneyImage}
      >
        <span textalign="left">services</span>
        <Header2>SendMoney for less</Header2>
        <SectionParagraph color="grey" fontWeight="bold" fontFamily="primary">
          SendMoney to anyone with a SA mobile number for only R6 and it’s
          mahala for TymeBank to TymeBank customers. Now that’s nca!
        </SectionParagraph>
        <Button
          size="large"
          text="Start using sendmoney"
          type="contained"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
        />
      </Section>
      {/* SMART SHOPPER */}
      <Section
        bgColor="lightGrey"
        ContentAlignItems="center"
        ContentFlexDirection="row"
        leftSectionImage={SmartShopperImage}
      >
        <span textalign="left">services</span>
        <Header2>Earn double Smart Shopper points </Header2>
        <SectionParagraph color="grey" fontWeight="bold" fontFamily="primary">
          Swipa! Swipa! Earn Pick n Pay Smart Shopper points everywhere you shop
          and DOUBLE points in Pick n Pay – swipe once to earn the points and a
          second time to pay with your TymeBank card.
        </SectionParagraph>
        <Button
          size="large"
          text="Learn how to Double your Points"
          type="contained"
        />
      </Section>
      {/* KIOSK SECTION */}
      <OffSetSection
        image={KioskImage}
        bgColor="lightGrey"
        imagePosition="left"
      >
        <span textalign="left">services</span>
        <Header2>Earn double Smart Shopper points </Header2>
        <SectionParagraph color="grey" fontWeight="bold" fontFamily="primary">
          Swipa! Swipa! Earn Pick n Pay Smart Shopper points everywhere you shop
          and DOUBLE points in Pick n Pay – swipe once to earn the points and a
          second time to pay with your TymeBank card.
        </SectionParagraph>
        <Button
          size="large"
          text="Find a kiosk"
          type="contained"
          iconRight={<FontAwesomeIcon icon={faArrowRight} size="xs" />}
        />
      </OffSetSection>
      <ListSection
        contentBg="lightGrey"
        containerBg="lightGrey"
        ContentFlexDirection="row"
        items={[
          {
            image: BadgeImage,
            heading: "Serious about security",
            content:
              "We keep your money safe with regular security updates and we verify transactions using OTPs to make sure it’s really you who is spending your money.",
          },
          {
            image: ChartImage,
            heading: "Our mission",
            content:
              "We’re a bank founded on simplicity, transparency, and affordability. We believe that every South African has the right to accessible and affordable banking.",
          },
          {
            image: SupportImage,
            heading: "Friendly support",
            content:
              "Got questions? Visit our Help Centre, we’ve covered a lot of info here. And if you still can’t find what you’re looking for give us a call on 0860 999 119.",
          },
        ]}
      />
      <OffSetSection
        type="mini"
        image={TestimonialImage}
        bgColor="lightGrey"
        imagePosition="left"
      >
        {renderQuotes(testimonials)}
        <SlideArrows>
          <button
            onClick={() => {
              if (activeQuote > 0) {
                setActiveQuote((activeQuote) => activeQuote - 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => {
              if (activeQuote < 6) {
                setActiveQuote((activeQuote) => activeQuote + 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </SlideArrows>
      </OffSetSection>
      <Footer />
      <StickyButtons>
        <a href="#">
          <SheildIcon />
          Login
        </a>
        <a href="#">Open Account</a>
      </StickyButtons>
    </HomeContainer>
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

export default Home;

// END FILE ####################################################################
