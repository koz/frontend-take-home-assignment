import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

import PageLayout from '../../components/PageLayout';
import ListingCard from '../../components/ListingCard';
import { cards } from './constants';

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
  flex-direction: column;
  align-self: stretch;
  margin: 2.6rem 1.6rem;

  ${media.desktop} {
    margin: 5.7rem 15.2rem;
  }
`;

const StyledCardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2.4rem;
  grid-row-gap: 2.4rem;
  margin-top: 2.6rem;

  ${media.desktop} {
    margin-top: 3.1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1.6rem;
  }
`;

const StyledCardContainer = styled.li`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

const Listing = () => (
  <PageLayout>
    <StyledContainer>
      <StyledTitle>Here’s your saving goals!</StyledTitle>
      <StyledCardList>
        {cards.map(item => (
          <StyledCardContainer key={item.icon}>
            <ListingCard {...item} />
          </StyledCardContainer>
        ))}
      </StyledCardList>
    </StyledContainer>
  </PageLayout>
);

export default Listing;
