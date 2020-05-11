import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import { media } from '../../styles/mediaQueries';

const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.33;

  ${media.desktop} {
    font-size: 3.2rem;
    line-heigth: 1.25;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-self: stretch;
  margin: 2.6rem 1.6rem;

  ${media.desktop} {
    margin: 5.7rem 15.2rem;
  }
`;

const Listing = () => (
  <PageLayout>
    <StyledContainer>
      <StyledTitle>Here’s your saving goals!</StyledTitle>
    </StyledContainer>
  </PageLayout>
);

export default Listing;
