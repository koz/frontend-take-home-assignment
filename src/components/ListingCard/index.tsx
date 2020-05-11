import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Button from '../Button';
import { media } from '../../styles/mediaQueries';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0.87rem;

  ${media.desktop} {
    padding: 4.7rem 3.6rem 3.2rem 4.4rem;
  }
`;

const StyledTitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.29;
  font-weight: 600;
  margin-top: 1.9rem;

  ${media.desktop} {
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 3.6rem;
  min-width: 13.5rem;
  padding: 1.2rem 0;

  ${media.desktop} {
    margin-top: 2.8rem;
    min-width: 19.2rem;
  }
`;

interface Props {
  icon: string;
  title: string;
  url: string;
}

const ListingCard: React.FC<Props> = ({ icon, title }) => (
  <StyledCard>
    <img src={icon} />
    <StyledTitle>{title}</StyledTitle>
    <StyledButton>Start setup</StyledButton>
  </StyledCard>
);

export default ListingCard;
