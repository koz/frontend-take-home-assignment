import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Button from '../Button';
import { media } from '../../styles/mediaQueries';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
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

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

interface Props {
  icon: string;
  title: string;
  id: string;
}

const ListingCard: React.FC<Props> = ({ icon, title, id }) => (
  <StyledCard>
    <StyledImg src={icon} />
    <StyledTitle>{title}</StyledTitle>
    <Link to={`/setup/${id}`}>
      <StyledButton>Start setup</StyledButton>
    </Link>
  </StyledCard>
);

export default ListingCard;
