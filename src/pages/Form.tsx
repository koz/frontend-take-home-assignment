import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/mediaQueries';
import homeSVG from '../icons/home.svg';

import SavingCard from '../components/SavingCard';
import PageLayout from '../components/PageLayout';

const StyledTitle = styled.h1`
  color: #1b31a8;
  font-size: 1.8rem;
  line-height: 1.44;
  margin-top: 2.3rem;
  margin-bottom: 2.4rem;

  ${media.desktop} {
    font-size: 2.4rem;
    line-height: 1.33;
    margin-top: 5.4rem;
    margin-bottom: 4rem;
  }

  & > strong {
    font-weight: 600;
  }
`;

const StyledSavingCard = styled(SavingCard)`
  align-self: stretch;

  ${media.mobile} {
    flex-grow: 1;
  }

  ${media.desktop} {
    align-self: center;
    width: 56rem;
  }
`;

const Form = () => (
  <PageLayout>
    <StyledTitle>
      Let&apos;s plan your <strong>saving goal</strong>
    </StyledTitle>
    <StyledSavingCard
      iconSrc={homeSVG}
      iconAlt="Little house with dollar sign on the bottom left"
      title="Buy a house"
    />
  </PageLayout>
);

export default Form;
